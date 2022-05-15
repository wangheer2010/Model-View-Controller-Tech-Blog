const { Comment } = require('../models');

const commentdata = [
  {
    name: 'Printemps',
    user_id: 1,
    post_id: 1,
  },
  {
    name: 'Sommer',
    user_id: 2,
    post_id: 2,
  },
  {
    name: 'Herfst',
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
