const { Post} = require('../models');

const postdata = [
  {
    title: 'Blossoming Apricot',
    content: 'LedyX',
    user_id: 1,
  },
  {
    title: 'Cosmos Flowers',
    content: 'WStudio',
    user_id: 1,
  },
  {
    title: 'Sand + Sea = Summer',
    content: 'S_Photo',
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
