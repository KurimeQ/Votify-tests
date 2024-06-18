import { Locator, Page } from '@playwright/test';

export class OnboardingPage {
    page: Page;
    title: Locator;
    onboardingTitle: Locator;
    onboardingText: Locator;
    letsGetStartedButton: Locator;
    profilHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.getByText('Votify').first();
        this.onboardingTitle = page.getByText('🚀 Vítejte ve Vašem prvním');
        this.onboardingText =  page.getByText('Začínáte onboardingem, který');
        this.letsGetStartedButton = page.getByRole('button', { name: 'Let\'s get started' });
        this.profilHeader = page.getByText('Profil')

    }

    async clickOnLetsGetStarted() {
        await this.letsGetStartedButton.click();
    }
} 