const {
  setupWebDriver,
  getElementById,
  getElementByClassName,
  fetchUserData,
  postData,
  waitForUrlAndCheck,
  writeJsonObjectToFile,
} = require("../../../utils/utils");
const { codeData } = require("../../../utils/hashHelper");

async function forgotPassword(email) {
  const driver = await setupWebDriver();
  const forgotPasswordUrl = `${process.env.FRONT_URL}/forgot-password`;
  let resetToken;
  let log = {
    test: "forgot password",
    result: "failed",
    email,
  };
  try {
    await driver.get(forgotPasswordUrl);
    const forgotPassInput = await getElementById(driver, "forgot_email");
    const emailMeButton = await getElementByClassName(
      driver,
      "ant-btn ant-btn-primary ant-btn-lg sc-aXZVg kkjWIo"
    );
    await forgotPassInput.sendKeys(email);
    await emailMeButton.click();

    //post user email hash
    const statusCode = await postData(
      "authmanagement",
      codeData({ action: "sendResetPwd", value: { email } })
    );
    await driver.sleep(10000); // Wait for 10 seconds
    const userData = await fetchUserData(email);
    resetToken = "token";
    const resetPassUrl = `${process.env.FRONT_URL}/reset/${resetToken}`;
    await driver.get(resetPassUrl);
    const step1 = await waitForUrlAndCheck(driver, resetPassUrl);
    if (step1) {
      const passwordInput = await getElementById(driver, "reset_password");
      const passwordConfirmInput = await getElementById(
        driver,
        "reset_confirmPassword"
      );
      const setPassButton = await getElementByClassName(
        driver,
        "ant-btn ant-btn-primary ant-btn-lg sc-aXZVg kkjWIo"
      );
      await passwordInput.sendKeys(`${process.env.PASSWORD}2`);
      await passwordConfirmInput.sendKeys(`${process.env.PASSWORD}2`);
      await setPassButton.click();
      log.result = "SUCCESSFUL";
    }
    writeJsonObjectToFile("log.txt", log);
  } catch (error) {
  } finally {
  }
}
// forgotPassword();
module.exports = forgotPassword;
