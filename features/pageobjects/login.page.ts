import Page from "./base.page";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $("#user_email");
  }
  get inputPassword() {
    return $("#user_password");
  }
  get btnSign() {
    return $('input[value="Sign in"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSign.click();
  }
}

export default new LoginPage();
