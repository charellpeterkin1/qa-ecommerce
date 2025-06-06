it('should log out successfully', async () => {
    await LoginPage.open();
    await LoginPage.login('validuser@example.com', 'validpassword');
    await LoginPage.logout();
    await expect(LoginPage.logoutButton).not.toBeDisplayed();  // Ensure the logout button disappears
});

