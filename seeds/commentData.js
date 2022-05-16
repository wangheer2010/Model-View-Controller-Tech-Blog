const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Printemps',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: 'Sommer',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: 'Herfst',
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
