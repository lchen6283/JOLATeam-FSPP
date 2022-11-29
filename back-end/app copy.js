//DEPENDENCIES
const express = require("express");
const cors = require("cors");

const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const { PORT, CLIENT_URL } = require('./constants');
const { Pool } = require("pg");
require("dotenv").config();


const usersController = require("./controllers/usersController");
const reviewsController = require("./controllers/reviewsController.js");
const ordersControllers = require("./controllers/ordersController");

// const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;


// const pool = new Pool({
//   connectionString: connectionString,
//   ssl: isProduction
// });


//CONFIG
const app = express();

// const initializePassport = require("./passportConfig");
// initializePassport(passport)

// INIT MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: CLIENT_URL, credentials: true }));
// Funtion inside passport which initializes passport
app.use(passport.initialize());

//app.use(express.urlencoded({ extended: false }));
// IMPORT AUTH ROUTES
const authRoutes = require("./routes/auth");


// app.use(
//   session({
//     // Key we want to keep secret which will encrypt all of our information
//     secret: process.env.SESSION_SECRET,
//     // Should we resave our session variables if nothing has changes which we dont
//     resave: false,
//     // Save empty value if there is no vaue which we do not want to do
//     saveUninitialized: true
//   })
// );

// // Funtion inside passport which initializes passport
// app.use(passport.initialize());
// // Store our variables to be persisted across the whole session. Works with app.use(Session) above
// app.use(passport.session());


//app.use('/api', authRoutes)
// app.use("/users", usersController);
// app.use("/reviews", reviewsController);
// app.use("/orders", ordersControllers);

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to SMAK APP");
  //res.render("index");
});

// POST: SIGN UP
app.post("/register", async (req, res) => {
  let { firstname, lastname, username, password, password2 } = req.body;

  let errors = [];

  console.log({
    firstname,
    lastname,
    username,
    password,
    password2
  });

  if (!firstname || !lastname  || !username || !password || !password2) {
    errors.push({ message: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password must be a least 6 characters long" });
  }

  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }
  console.log(errors.length);
  if (errors.length > 0) {
    // ?
    //res.render("register", { errors, firstname, lastname, username, password, password2 });
  } else {
    hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    // Validation passed
    pool.query(
      `SELECT * FROM users
        WHERE username = $1`,
      [username],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          return res.render("register", {
            message: "Email already registered"
          });
        } else {
          pool.query(
            `INSERT INTO users (firstname, lastname, username, password)
                VALUES ($1, $2, $3, $4)
                RETURNING id, password`,
            [firstname, lastname, username, hashedPassword],
            (err, results) => {
              if (err) {
                throw err;
              }
              //console.log('results:',results);
              //console.log(results.rows);
              req.flash("success_msg", "You are now registered. Please log in");
              res.redirect("/login");
            }
          );
        }
      }
    );
  }
});

// GET: SIGN UP
app.get("/register", checkAuthenticated, (req, res) => {
  console.log('res');
  console.log(res);
  return res.redirect('/login');
});

// POST: SIGN IN
app.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/login'
}));
// app.post("/login", (req, res, next) => {

//   // passport.authenticate("local", {
//   //   successRedirect: "/dashboard",
//   //   failureRedirect: "/login",
//   //   failureFlash: true
//   // })
//   passport.authenticate('local', (err, user, failureDetails) => {
//     console.log('entering: passport.authenticate')
//     if (err) {
//         res.status(500).json({ message: 'Error authenticating user' });
//         return;
//     }

//     if (!user) {
//         res.status(401).json(failureDetails);
//         return;
//     }

//     req.login(user, err => {
//       if(err) {
//         res.status(500).json({ message: 'Session error' })
//       } else {
//         console.log('login success')
//         res.status(200).json(user),
//         //successRedirect: "/dashboard",
//       }
//     })

//   })(req, res, next)


// });

// GET: SIGN IN
app.get("/login", (req, res, next) => {
  
});
//app.get("/login", checkAuthenticated, (req, res) => {
// app.get("/login", (req, res, next) => {

//   console.log(res)
//   // flash sets a messages variable. passport sets the error message
//   //console.log(req.session.flash.error);
//   //console.log(req.isAuthenticated())
//   // if (req.isAuthenticated()) {
//   //   return res.redirect("/dashboard");
//   // }

//   //next();
// });

function checkAuthenticated(req, res, next) {
  console.log('checkAuthenticated')
  //console.log(req.isAuthenticated())
  if (req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  next();
}

function checkNotAuthenticated(req, res, next) {
  console.log('checkNotAuthenticated')
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

app.get("/dashboard", checkNotAuthenticated, (req, res) => {
  console.log('get dashboard')
  //res.send("Welcome to Dashboard", { user: req.user.name });
  res.send("Welcome to Dashboard");
  //res.render("index");
});

app.get("/logout", (req, res) => {
  req.logout();
  //res.render("index", { message: "You have logged out successfully" });
});

app.get("*", (req, res) => {
  res.status(404).send("Sorry Bud, nothing here");
});

//EXPORT
module.exports = app;