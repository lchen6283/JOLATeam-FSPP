//DEPENDENCIES
const app = require("./app.js");

//CONFIGURATION
require("dotenv").config();

const PORT = process.env.PORT || 5000;

//LISTEN
app.listen(PORT, () => {
  console.log(`Welcome to SMAK! Server running on PORT:${PORT}`);
});
