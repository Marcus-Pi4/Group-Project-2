const  User  = require('../models/User');

const userdata = 
  {
    email: 'test@test.com',
    password: 'testtest',
  }
;

const seedUser = () => User.create(userdata);

module.exports = seedUser;
