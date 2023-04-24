import { config as sharedConfig } from './wdio.shared.conf.js'

const capabilities = {
  platformName: 'Android',
  'appium:app': 'storage:filename=linda-app.apk', // The filename of the mobile app
  'appium:deviceName': 'Google Pixel 5 GoogleAPI Emulator',
  'appium:platformVersion': '11.0',
  'appium:automationName': 'UiAutomator2',
  'sauce:options': {
    appiumVersion: '2.0.0-beta56',
    build: "appium-build-10VL0",
    name: "lindatest",
  }
}

export const config: WebdriverIO.Config = {
  ...sharedConfig,
  baseUrl: 'wd/hub',
  port: 443,
  ...{
    user: 'oauth-alex.radulescu-f3456',
    key: '5e5531e1-8f48-4499-992b-9b0bf7b1d252',
    region: 'eu',
    services: ['sauce'],
    capabilities: [capabilities]
  }
}
