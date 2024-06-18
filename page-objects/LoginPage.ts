import { Locator, Page } from '@playwright/test';

export class LoginPage {
    page: Page;
    userNameInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;
    errorMessageLocator: Locator;
    invalidEmailLocator: Locator;
    requiredCredentialsLocator: Locator;
    eyeIconLocator: Locator;
    signUpButton: Locator;
    forgotPasswordButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = page.getByPlaceholder('name@gmail.com');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByTestId('submitAction');
        this.errorMessageLocator = page.getByText('You have entered an invalid username or password.');
        this.invalidEmailLocator = page.getByText('Invalid e-mail');
        this.requiredCredentialsLocator = page.getByText('Required');
        this.eyeIconLocator = page.getByTestId('passwordInput').getByRole('button');
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
        this.forgotPasswordButton = page.getByRole('button', { name: 'Forgot password?' });

    }

    async gotoLoginPage() {
        await this.page.goto('https://auth.votify.app');
    }

    async enterValidUsername() {
        await this.userNameInput.fill('ichbinsoschon@gmail.com');
    }

    async enterInvalidUsername() {
        await this.userNameInput.fill('jmeno@jmeno.com');
    }

    async enterCorruptedUsername() {
        await this.userNameInput.fill('jmeno');
    }

    async enterValidPassword() {
        await this.passwordInput.fill('12345678');
    }

    async enterInvalidPassword() {
        await this.passwordInput.fill('@@@@@@@@');
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async doubleClickLoginButton() {
        await this.loginButton.dblclick();
    }

    async clickEyeIcon() {
        await this.eyeIconLocator.click();
    }

    async login() {
        await this.userNameInput.fill('ichbinsoschon@gmail.com');
        await this.passwordInput.fill('12345678');
        await this.loginButton.click();
    }

    async clickSignUpButton() {
        await this.signUpButton.click();
    }

    async clickForgetPasswordButton() {
        await this.forgotPasswordButton.click();
    }

};
