/**
 * main screen object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Screen {
  async scrollToElement(accessibilityId: string): Promise<WebdriverIO.Element> {
    const favouriteSectionSelector = `new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("${accessibilityId}"))`

    return await $(`android=${favouriteSectionSelector}`)
  }
}
