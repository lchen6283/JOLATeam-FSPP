
module.exports = function(req, res, next) {
  const { firstname, lastname, username, password, password2 } = req.body;
  
  // Helper function that validates the correct email format
  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === "/register") {
    // Creating an array that checks for empty values 
    if (![firstname, lastname, username, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } 
    else if (!validEmail(username)) {
      return res.json("Invalid Email");
    }
  } 
  else if (req.path === "/login") {
    // Creating an array that checks for empty values 
    if (![username, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } 
    else if (!validEmail(username)) {
      return res.json("Invalid Email");
    }
  }

  next();
};
