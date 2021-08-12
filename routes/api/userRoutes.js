const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// CREATE a new user
router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        newUser.password = await bcrypt.hash(req.body.password, 10);
        const userData = await User.create(newUser);
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// LOGIN for current user
router.post('/login', async (req, res) => {
    try {
        // Search DB by user email
        const userData = await User.findOne({ where: { email: req.body.email } });
        if (!userData) {
        res.status(404).json({ message: 'Login failed. Please try again!' });
        return;
    }
    // Using bcrypt to compare entered password and the hashed password
    const validPassword = await bcrypt.compare(
        req.body.password,
        userData.password
    );
        // return error message if password does NOT match
        if (!validPassword) {
            res.status(400).json({ message: 'Login failed. Please try again' });
        return;
        }
        // return success message if password matches
        res.status(200).json({ message: 'Succes! You are now logged in.' });
        } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
