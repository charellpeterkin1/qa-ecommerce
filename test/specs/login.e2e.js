const LoginPage = require('../pageobjects/login.page');

describe('Login Test', () => {
    it('should show error for invalid login', async () => {
        // Open login page
        await LoginPage.open();
        
        // Try to login with fake credentials
        await LoginPage.login('fakeuser@example.com', 'fakepassword');
        
        // Check if the error message is displayed
        await expect(LoginPage.alertError).toBeDisplayed();
        
        // Verify the error message contains "Authentication failed"
        await expect(LoginPage.alertError).toHaveTextContaining('Authentication failed.');
    });
});

it('should login with valid credentials', async () => {
    await LoginPage.open();
    await LoginPage.login('validuser@example.com', 'validpassword');
    await expect(LoginPage.alertError).not.toBeDisplayed();  // Ensure error isn't shown
    await expect(browser).toHaveUrlContaining('my-account');  // Ensure user is redirected to 'My Account' page
});

