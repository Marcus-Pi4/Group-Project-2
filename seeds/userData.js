const  User  = require('../models/User');

const userdata = 
  {
    email: 'test@test.com',
    password: 'testtest',
  }
;

const seedUser = () => User.create(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;
