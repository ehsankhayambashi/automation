const { Builder, Capabilities, Key, By } = require("selenium-webdriver");
const fs = require("fs");
const chrome = require("selenium-webdriver/chrome");
const webdriver = require("selenium-webdriver");
const axios = require("axios");
const {
  setupWebDriver,
  getElementById,
  getElementByClassName,
  fetchData,
} = require("../../../utils/utils");
const { codeData } = require("../../../utils/hashHelper");
const chromeOptions = new chrome.Options();

async function forgotPassword(email) {
  // const driver = await setupWebDriver();
  const forgotPasswordUrl = `${process.env.FRONT_URL}/forgot-password`;
  // let verifyToken;
  // let log = {
  //   test: "forgot password",
  //   result: "failed",
  //   email,
  // };
  // try {
  //   await driver.get(forgotPasswordUrl);
  //   const forgotPassInput = await getElementById(driver, "forgot_email");
  //   const emailMeButton = await getElementByClassName(
  //     driver,
  //     "ant-btn ant-btn-primary ant-btn-lg sc-aXZVg kkjWIo"
  //   );
  //   await forgotPassInput.sendKeys(email);
  //   await emailMeButton.click();

  //wait for url
  //
  // let params = {
  //   action: "sendResetPwd",
  //   value: { email },
  // };
  // const hashParams = {
  //   hash: ,
  // };
  // console.log("hashParams", hashParams);
  const data = await fetchData(
    "authmanagement",
    codeData({ action: "sendResetPwd", value: { email } })
  );
  console.log(data);
  // } catch (error) {
  // } finally {
  // }
}
// forgotPassword();
module.exports = forgotPassword;
