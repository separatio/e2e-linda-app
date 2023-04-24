import homeScreen from '../support/screenobjects/home.screen.ts'

describe('meditation session selection', () => {
  it('should favourite and unfavourite meditation', async () => {
    // Using Accessibility IDs as exemplified here:
    // https://webdriver.io/docs/selectors/#accessibility-id
    await homeScreen.favouriteMeditation()
    await homeScreen.unfavouriteMeditation()

    const favouriteList = await homeScreen.scrollToElement('favourites_list')
    await favouriteList.waitForExist({ timeout: 5000, reverse: true })
    expect(await favouriteList.isExisting()).toBe(false)
  })
})
