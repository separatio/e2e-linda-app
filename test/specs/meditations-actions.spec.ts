describe('meditation session selection', () => {
  it.skip('should favourite and unfavourite meditation', async () => {
    // Using Accessibility IDs as exemplified here:
    // https://webdriver.io/docs/selectors/#accessibility-id
    const firstMeditation = await $('~meditation0')
    await firstMeditation.click()

    const favouriteButton = await $('~favourite_button')
    await favouriteButton.click()

    const backButton = await $('~Go back')
    await backButton.click()

    const favouriteSectionSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("favourites_list"))`
    const favouriteList = await $(`android=${favouriteSectionSelector}`)

    await favouriteList.$('~meditation0').click()
    await favouriteButton.click()
    await backButton.click()

    await favouriteList.waitForExist({ timeout: 5000, reverse: true })
    expect(await favouriteList.isExisting()).toBe(false);
  })
})
