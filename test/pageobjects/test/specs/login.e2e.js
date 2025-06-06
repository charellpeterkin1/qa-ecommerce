const LoginPage = require('../pageobjects/login.page');

describe('Login Test', () => {
    it('should show error for invalid login', async () => {
        await LoginPage.open();
        await LoginPage.login('fakeuser@example.com', 'fakepassword');
        await expect(LoginPage.alertError).toBeDisplayed();
        await expect(LoginPage.alertError).toHaveTextContaining('Authentication failed.');
    });
});

