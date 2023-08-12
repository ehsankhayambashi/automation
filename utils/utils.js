const { Builder, By } = require("selenium-webdriver");
const { Options } = require("selenium-webdriver/chrome");

const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();

async function setupWebDriver() {
  //------------WINDOWS-------------//
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(chromeOptions)
    .build();
  return driver;
  //------------END WINDOWS-------------//

  // ----------LINUX------------//
  // let builder = new Builder().forBrowser("chrome");
  // let options = new Options();
  // options.headless(); // run headless Chrome
  // options.excludeSwitches(["enable-logging"]); // disable 'DevTools listening on...'
  // options.addArguments(["--no-sandbox"]); // not an advised flag but eliminates "DevToolsActivePort file doesn't exist" error.
  // let driver = await builder.setChromeOptions(options).build();
  //return driver;
  // ----------END LINUX------------//
}

async function getDivByClassNameAndContent(driver, className, content) {
  try {
    const xpathExpression = `//div[contains(@class, '${className}') and contains(text(), '${content}')]`;
    const divElement = await driver.findElement(By.xpath(xpathExpression));
    return divElement;
  } catch (error) {
    console.error("An error occurred for getDivByClassNameAndContent:", error);
  }
}

async function getDivByClassName(driver, className) {
  try {
    const xpathExpression = `//div[contains(@class, '${className}')]`;
    const divElement = await driver.findElement(By.xpath(xpathExpression));
    return divElement;
  } catch (error) {
    console.error("An error occurred getDivByClassName :", error);
    return null;
  }
}

async function doesElementExist(driver, className) {
  try {
    await driver.findElement(By.className(className));
    return true; // Element exists
  } catch (error) {
    return false; // Element does not exist
  }
}

async function getElementByClassName(driver, className) {
  try {
    const element = await driver.findElement(By.className(className));
    return element;
  } catch (error) {
    console.error("An error occurred getElementByClassName:", error);
    return null;
  }
}

async function waitForUrlAndCheck(driver, expectedUrl) {
  try {
    await driver.sleep(20000); // Wait for 10 seconds
    const currentURL = await driver.getCurrentUrl();
    return currentURL === expectedUrl;
  } catch (error) {
    console.error("An error occurred:", error);
    return false;
  }
}

async function getCheckboxByClassName(driver, className) {
  try {
    const selector = `input[type="checkbox"].${className}`;
    const checkboxElement = await driver.findElement(By.css(selector));
    return checkboxElement;
  } catch (error) {
    console.error("An error occurred getCheckboxByClassName:", error);
    return null;
  }
}

async function getElementById(driver, id) {
  try {
    const element = await driver.findElement(By.id(id));
    return element;
  } catch (error) {
    console.error("An error occurred getElementById:", error);
    return null;
  }
}

module.exports = {
  setupWebDriver,
  getDivByClassNameAndContent,
  getDivByClassName,
  doesElementExist,
  getElementByClassName,
  waitForUrlAndCheck,
  getCheckboxByClassName,
  getElementById,
};
