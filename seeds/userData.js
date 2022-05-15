const { User } = require('../models');

const userData = [{
        username: 'aaaaaa',
        email: 'a@mail.com',
        password: '123456'
    },
    {
        username: 'bbbbbb',
        email: 'b@mail.com',
        password: '123456'
    },
    {
        username: 'cccccc',
        email: 'c@mail.com',
        password: '123456'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;