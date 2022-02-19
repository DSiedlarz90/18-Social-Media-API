const router = require('express').Router();
//import routes from /api
const apiRoutes = require('./api');

//add api prefix to imported routes
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>😝 404 Error!</h1>');
});

//export for global use
module.exports = router;