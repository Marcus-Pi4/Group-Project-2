const express = require('express'); 
const path = require('path')
const routes = require('./routes');
const sequelize = require('./config/connection');
const mysql = require('mysql2');
const session = require('express-session');
const SequelizeStore = require
('connect-session-sequelize')(session.Store);
const User = require("./models/User.js")

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))
// Set up sessions with cookies
const sess = {
  secret: 'Super secret ',
  cookie: {
    // Stored in seconds (86400 === 1 day)
    maxAge: 86400,
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Turn on routes
app.use(routes);

// Connection to server
sequelize.sync({ force: false }).then(() => {
  User.findAll().then(users => console.log('all users in db', users));
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});

// testing
