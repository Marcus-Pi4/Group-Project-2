const  User  = require('../models/User');

const userdata = 
  {
    email: 'rachael123@fakeemail.com',
    password: '#PasSWord49!',
  }
;

const seedUser = () => User.create(userdata);

module.exports = seedUser;
