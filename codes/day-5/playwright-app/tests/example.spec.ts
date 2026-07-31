import { test, expect } from '@playwright/test';
import { StartPage } from './start/start.page';

test.describe(
  "Start Page Testing",
  () => {

    test(
      "page displays h2 with -> Start Page",
      async ({ page }) => {
        // await page.goto('/start')
        // expect(await page.getByTestId('start-page-id').textContent()).toEqual('Start Page')
        const startPage = new StartPage(page)
        await startPage.goto()
        expect(await startPage.message.textContent()).toEqual('Start Page')
      }
    )
  }
)