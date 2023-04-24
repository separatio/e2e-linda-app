import { join } from 'path'
import { config } from './wdio.shared.conf.ts'

// ============
// Capabilities
// ============
config.capabilities = [
  {
    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: 1,
    //
    platformName: 'Android',
    acceptInsecureCerts: true,
    'appium:deviceName': 'Pixel_5_API_30',
    'appium:platformVersion': '11.0',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    // The path to the app
    'appium:app': join(process.cwd(), './apps/linda-app.apk'),
    // @ts-ignore
    'appium:newCommandTimeout': 240,
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
  },
]

export { config }
