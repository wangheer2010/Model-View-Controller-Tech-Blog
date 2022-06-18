const { Post } = require('../models');

const postdata = [
  {
    title: 'title 1',
    content: 'content 1',
    user_id: 1,
  },
  {
    title: 'title 2',
    content: 'content 2',
    user_id: 1,
  },
  {
    title: 'title 3',
    content: 'content 3',
    user_id: 2,
  },  
  {
    title: 'ahhhhhh',
    content: 'wo sha le',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
