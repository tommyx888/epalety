import { test, expect } from '@playwright/test'

test.describe('Checkout Flow', () => {
  test('complete checkout flow', async ({ page }) => {
    await page.goto('/products')
    
    // Add product to cart
    await page.click('[data-testid="add-to-cart"]')
    
    // Go to cart
    await page.goto('/cart')
    await expect(page.locator('[data-testid="cart-items"]')).toBeVisible()
    
    // Proceed to checkout
    await page.click('[data-testid="checkout"]')
    
    // Fill form
    await page.fill('[name="email"]', 'test@example.com')
    await page.fill('[name="address"]', 'Test Address 123')
    await page.fill('[name="city"]', 'Bratislava')
    await page.fill('[name="zip"]', '81101')
    
    // Place order
    await page.click('[data-testid="place-order"]')
    
    // Check confirmation
    await expect(page.locator('[data-testid="order-confirmation"]')).toBeVisible()
  })
})

