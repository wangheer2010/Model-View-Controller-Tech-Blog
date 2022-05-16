const sequelize = require('../config/connection');
const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');

// GET all postsfor homepage
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      attributes: [
        'id',
        'title',
        'content',
        'created_at'
    ],
      include: [
        {
          model: Comment,
          attributes:  ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
        }
        },
        {
          model: User,
          attributes: ['username']
        }
      ],
    });
    const posts = await postData.map((post) =>
      post.get({ plain: true })
    );
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/posts-commments', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
          id: req.params.id
      },
      attributes: [
        {
          model: Painting,
          attributes: [
            'id',
            'content',
            'title',
            'created_at'
          ],
        },
      ],
      include: [{
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
      }},
    {
      model: User,
      attributes: ['username']
    }]
    });
    if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
    }
    const post = await dbPostData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
          id: req.params.id
      },
      attributes: [
          'id',
          'content',
          'title',
          'created_at'
      ],
      include: [{
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                  model: User,
                  attributes: ['username']
              }
          },
          {
              model: User,
              attributes: ['username']
          }
      ]
    });
    if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
    }
    const post = await dbPostData.get({ plain: true });
    res.render('post', { post, loggedIn: req.session.loggedIn });
  }
catch(err) {
    console.log(err);
    res.status(500).json(err);
}
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

module.exports = router;
