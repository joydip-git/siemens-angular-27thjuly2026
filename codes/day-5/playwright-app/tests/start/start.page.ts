import { Locator, Page } from "@playwright/test";

export class StartPage {
    readonly message: Locator;
    private readonly page: Page;
    
    constructor(page: Page) {
        this.page = page;
        this.message = this.page.getByTestId('start-page-id');
    }

    async goto() {
        this.page.goto('/start')
    }
}