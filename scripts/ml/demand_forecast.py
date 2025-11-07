import pandas as pd
from prophet import Prophet
import psycopg2
import os
from datetime import datetime

DATABASE_URL = os.getenv('DATABASE_URL')

def load_historical_data():
    """Load historical order data from database"""
    conn = psycopg2.connect(DATABASE_URL)
    
    df = pd.read_sql("""
        SELECT 
            DATE(created_at) as ds,
            SUM(quantity) as y
        FROM order_items
        JOIN orders ON orders.id = order_items.order_id
        WHERE orders.status = 'delivered'
        GROUP BY DATE(created_at)
        ORDER BY ds
    """, conn)
    
    conn.close()
    return df

def train_model(df):
    """Train Prophet model"""
    model = Prophet(yearly_seasonality=True, weekly_seasonality=True)
    model.fit(df)
    return model

def make_predictions(model, periods=30):
    """Make predictions for future periods"""
    future = model.make_future_dataframe(periods=periods)
    forecast = model.predict(future)
    return forecast

def save_predictions(forecast):
    """Save predictions to database"""
    conn = psycopg2.connect(DATABASE_URL)
    
    forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_sql(
        'demand_forecast',
        conn,
        if_exists='replace',
        index=False
    )
    
    conn.close()
    print(f"✅ Predictions saved at {datetime.now()}")

if __name__ == '__main__':
    print("Loading historical data...")
    df = load_historical_data()
    
    if len(df) < 30:
        print("⚠️  Not enough data for forecasting (need at least 30 days)")
        exit(1)
    
    print("Training model...")
    model = train_model(df)
    
    print("Making predictions...")
    forecast = make_predictions(model, periods=30)
    
    print("Saving predictions...")
    save_predictions(forecast)
    
    print("✅ Demand forecasting completed")

