require("dotenv").config();

// signup and login customer
// require("./routes/Auth/Customer/signUpLogIn");

// signup and login lawyer
// require("./routes/Auth/Lawyer/signUpLogIn");

// signup login partner
// require("./routes/Auth/Partner/signUpLogin");

//signup login firm
// require("./routes/Auth/Firm/signUpLogin");

// //sign in Firm's Lawyer
// require("./routes/Auth/Firm's Lawyer/testLogIn");

//sign in partner's Lawyer
// require("./routes/Auth/Partner's Lawyer/testLogIn");

// forgot password
require("./routes/Auth/ForgotPassword/forgotPassword")(
  "qa-8116f3f0@mailinator.com"
);

// buy a wills case as guest
// require("./routes/cases/guest/wills");
