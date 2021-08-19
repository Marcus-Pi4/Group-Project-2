const { User } = require('../models');

const userdata = [
  {
    email: 'rachael123@fakeemail.com',
    password: '#PasSWord49!',
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;
