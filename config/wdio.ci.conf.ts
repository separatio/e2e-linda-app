import { join } from 'path'
import { config } from './wdio.shared.conf.ts'

// ============
// Capabilities
// ============
config.capabilities = [
  {
    maxInstances: 1,
    platformName: 'Android',
    acceptInsecureCerts: true,
    'appium:deviceName': 'Nexus_6_API_30',
    'appium:platformVersion': '11.0',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), './apps/linda-app.apk'),
    'appium:newCommandTimeout': 240,
  },
]

export { config }
