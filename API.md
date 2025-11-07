# EPALETY.SK - API Documentation

## Base URL
```
https://api.epalety.sk/v1
```

## Authentication

Väčšina endpointov vyžaduje autentifikáciu pomocou API kľúča:

```
Authorization: Bearer YOUR_API_KEY
```

## Endpoints

### Products

#### GET /products
Získať zoznam produktov

**Query Parameters:**
- `category` (string, optional) - Filter podľa kategórie
- `limit` (number, optional, default: 20) - Počet výsledkov
- `offset` (number, optional, default: 0) - Offset pre pagination

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "name": "EUR Paleta",
      "price": 10.00,
      "stock_quantity": 500,
      "category": "eur-pallets"
    }
  ],
  "total": 100,
  "limit": 20,
  "offset": 0
}
```

#### GET /products/:id
Získať detail produktu

**Response:**
```json
{
  "id": "uuid",
  "name": "EUR Paleta",
  "description": "...",
  "price": 10.00,
  "stock_quantity": 500,
  "category": "eur-pallets"
}
```

### Orders

#### POST /orders
Vytvoriť novú objednávku

**Request Body:**
```json
{
  "items": [
    {
      "product_id": "uuid",
      "quantity": 10
    }
  ],
  "shipping_address": {
    "name": "John Doe",
    "address": "Street 123",
    "city": "Bratislava",
    "zip": "81101"
  }
}
```

**Response:**
```json
{
  "id": "uuid",
  "order_number": "ORD-2024-001",
  "status": "pending",
  "total": 100.00,
  "created_at": "2024-01-01T12:00:00Z"
}
```

#### GET /orders/:id
Získať detail objednávky

**Response:**
```json
{
  "id": "uuid",
  "order_number": "ORD-2024-001",
  "status": "confirmed",
  "items": [...],
  "total": 100.00,
  "created_at": "2024-01-01T12:00:00Z"
}
```

### Quotes

#### POST /quotes
Vytvoriť cenovú ponuku

**Request Body:**
```json
{
  "items": [
    {
      "product_id": "uuid",
      "quantity": 100
    }
  ],
  "customer": {
    "name": "Company s.r.o.",
    "email": "info@company.sk",
    "phone": "+421900123456"
  }
}
```

## Rate Limiting

- **Free tier:** 100 requests/hour
- **Pro tier:** 1000 requests/hour
- **Enterprise:** Unlimited

Rate limit headers:
```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 95
X-RateLimit-Reset: 1640995200
```

## Error Responses

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {}
  }
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error

