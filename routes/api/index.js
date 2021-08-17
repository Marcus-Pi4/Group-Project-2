const router = require('express').Router();

const userRoutes = require('./userRoutes');
const htmlRoutes = require('./htmlRoutes')

router.use('/users', userRoutes); 
router.use("/login", htmlRoutes);

module.exports = router;
