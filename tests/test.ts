import { expect, test, type Page, type BrowserContext } from '@playwright/test';

// just testing Playwright, run with npm run test:playwright

test.describe('CthulhuCon happy path', async () => {
	test.describe.configure({ mode: 'serial' });
	test.beforeEach(() => test.setTimeout(10000));
	let context: BrowserContext;
	let page: Page;
	test.beforeAll(async ({ browser }) => {
		// Create a shared context and page for the entire test suite
		context = await browser.newContext();
		page = await context.newPage();
	});

	test('going to index', async () => {
		await page.goto('/');
	});

	test('that index page has expected h1', async () => {
		await expect(page.getByRole('heading', { name: 'CthulhuCon', level: 1 })).toBeVisible();
	});

	test('that index page has expected h2', async () => {
		await expect(page.getByRole('heading', { name: "CthulhuCon is returning to Stockholm on 2023-11-25. Don't miss it!", level: 2 })).toBeVisible();
	});

  // sponsored by ChatGPT
	test('Purchase Ticket Test', async ({ page }) => {
		// Open the page
    await page.goto('/tickets');
    
		// Get the total amount before submitting the form
		const totalBeforePurchase = await page.textContent('p.text-emerald-500');

		// Fill out the form
		await page.fill('input#name', 'John Doe');
		await page.fill('input#email', 'john.doe@example.com');
		await page.selectOption('select#ticketType', { label: 'Regular ticket (500SEK)' });
		await page.fill('input#ticketAmount', '2');


		// Click the purchase button
		await page.click('button');

		// Get the total amount after the purchase
		const totalAfterPurchase = await page.textContent('p.text-emerald-500');

		// Assertions
		expect(totalBeforePurchase).toContain('Total:');
		expect(totalAfterPurchase).toContain('Total:');
		expect(totalBeforePurchase).not.toEqual(totalAfterPurchase);

		// You can add more assertions based on the behavior of your app after the purchase

		// You can also take screenshots for debugging or record the video of the test
		await page.screenshot({ path: 'purchase-test-screenshot.png' });
	});
});
