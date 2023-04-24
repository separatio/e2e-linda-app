import Screen from './screen'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomeScreen extends Screen {
  /**
   * define selectors using getter methods
   */
  private get firstMeditation() {
    return $('~meditation0')
  }

  private get favouriteButton() {
    return $('~favourite_button')
  }

  private get backButton() {
    return $('~Go back')
  }

  public async favouritedMeditation(): Promise<WebdriverIO.Element> {
    const favouriteList = await this.scrollToElement('favourites_list');
    return favouriteList.$('~meditation0');
  }

  public async favouriteMeditation() {
    await this.firstMeditation.click()
    await this.favouriteButton.click()
    await this.backButton.click()
  }

  public async unfavouriteMeditation() {
    const favouritedMeditaiton = await this.favouritedMeditation()
    await favouritedMeditaiton.click()

    await this.favouriteButton.click()
    await this.backButton.click()
  }
}

export default new HomeScreen()
