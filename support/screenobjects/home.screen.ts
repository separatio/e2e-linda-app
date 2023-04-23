import Screen from "./screen";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomeScreen extends Screen {
  /**
   * define selectors using getter methods
   */
  public get inputUsername() {
    return $("#username");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }
}

export default new HomeScreen();
