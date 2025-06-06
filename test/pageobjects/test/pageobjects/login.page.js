class LoginPage {
    get emailInput() { return $('#email'); }
    get passwordInput() { return $('#passwd'); }
    get submitButton() { return $('#SubmitLogin'); }
    get alertError() { return $('.alert-danger'); }

    open() {
        return browser.url('/index.php?controller=authentication&back=my-account');
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.submitButton.click();
    }
}

module.exports = new LoginPage();

