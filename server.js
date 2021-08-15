const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const mysql = require('mysql2');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Turn on routes
app.use(routes);

// Connection to server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));
});

// testing
