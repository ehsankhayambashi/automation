const { setupWebDriver } = require("../../../utils/utils");
const willsAsCustomer = require("./wills");
async function casePreview() {
  //   const driver = await setupWebDriver();
  try {
    await willsAsCustomer();
  } finally {
    // await driver.quit();
  }
}
module.exports = casePreview;
