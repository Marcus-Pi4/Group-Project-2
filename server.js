const express = require('express'); 
const path = require('path')
const routes = require('./routes');
const sequelize = require('./config/connection');
const mysql = require('mysql2');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

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
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});

// testing
