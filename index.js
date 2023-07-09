const { Builder, Capabilities, Key, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();

const radioValue = "customer";
const firstName = "John";
const lastName = "Doe";
const email = "user2000@mailinator.com";
const password = "P@ssword1";

async function signUpCustomer() {
  try {
    let driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
    await driver.get("https://app.lawvo.com/sign-up");
    const radio = await driver.findElement(
      By.xpath(`//input[@type='radio' and @value='${radioValue}']`)
    );
    const firstNameInput = await driver.findElement({
      id: "register_firstName",
    });
    const lastNameInput = await driver.findElement({
      id: "register_lastName",
    });
    const emailInput = await driver.findElement({ id: "register_email" });
    const passwordInput = await driver.findElement({ id: "register_password" });
    const confirmPasswordInput = await driver.findElement({
      id: "register_repeatPassword",
    });
    const submitButton = await driver.findElement(
      By.xpath("//button[@type='submit']")
    );
    await radio.click();
    await firstNameInput.sendKeys(firstName);
    await lastNameInput.sendKeys(lastName);
    await emailInput.sendKeys(email);
    await passwordInput.sendKeys(password);
    await confirmPasswordInput.sendKeys(password);

    await submitButton.click();
  } finally {
    await driver.quit();
  }
}

signUpCustomer();
