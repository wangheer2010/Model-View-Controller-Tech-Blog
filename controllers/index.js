const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-routes');
const postRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts',postRoutes);

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
