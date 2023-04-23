import Gestures from "../support/Gestures.ts"

describe('meditation session selection', () => {
  it.only('should favourite and unfavourite meditation', async () => {
    // Using Accessibility IDs as exemplified here:
    // https://webdriver.io/docs/selectors/#accessibility-id
    const firstMeditation = await $('~meditation0')
    await firstMeditation.click()

    const favouriteButton = await $('~favourite_button')
    await favouriteButton.click()

    const backButton = await $('~Go back')
    await backButton.click()

    await Gestures.swipeDown(10)
    await driver.pause(10000)

    // const favouriteSection = await $('~favourites_list')
    // expect(favouriteSection).toBe(true)

    // const favoritedMeditation = await $('~favourites_list')
    //   .$('~meditation0')
    //   .waitForExist({ timeout: 3000, interval: 1000 })
    // expect(favoritedMeditation).toBe(true)

    // await firstMeditation.click()
    // await favouriteButton.click()
    // await backButton.click()

    // expect(favouriteSection).toBe(false)
  })

  it('should download meditation', async () => {
    const powerOfLoveMeditation = await $(
      'new UiSelector().text("Power of Love")'
    )
    powerOfLoveMeditation.$('~downloadButton').click()

    // Disable internet on the phone
    // assert player screen is loaded
    const playButton = await $$('~playButton')
    expect(playButton.length).toBe(1)
  })

  it('should display all meditation type sections', async () => {
    const popularSection = await $$('~popular')
    const anxietySection = await $$('~axiety')
    const sleepSection = await $$('~sleep')

    const sectionsCount =
      popularSection.length + anxietySection.length + sleepSection.length

    expect(sectionsCount).toBe(3)
  })

  it('shows donate screen', async () => {
    const powerOfLoveMeditation = await $(
      'new UiSelector().text("Power of Love")'
    )
    powerOfLoveMeditation.click()

    // click 10 seconds forward 14 times
    const skip10SecondsButton = await $('~forward')
    driver.pause(1000)
    for (let i = 0; i < 14; i += 1) {
      await skip10SecondsButton.click()
    }

    const successMessage = await $(
      'new UiSelector().text("You have completed 1 meditation!")'
    )
    const askForDonationMessage = await $(
      'new UiSelector().text("Do you want to give a donation?")'
    )

    // expect(successMessage.isExisting()).toBe(true)
    // expect(askForDonationMessage.isExisting()).toBe(true)

    const skipButton = await $('new UiSelector().text("Skip")')
    const donateButton = await $('new UiSelector().text("Donate")')

    // expect donateButton to have url redirect

    await skipButton.click()
    // expect to see home page
  })
})
