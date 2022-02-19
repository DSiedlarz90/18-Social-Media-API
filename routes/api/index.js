const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

//add /thoughts to thoughts
router.use('/thoughts', thoughtRoutes);
//add /users to users
router.use('/users', userRoutes);

//export for global use
module.exports = router;