const router = require('express').Router(); 
const bcrypt = require('bcrypt'); 

const User = require('../../models/User');

// CREATE a new user
router.post('/signup', async (req, res) => {
    try {
        const userData = await User.create({ 
            email: req.body.email,
            password: req.body.password, 
        });
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
            userData.dataValues.password
        );
        // return error message if password does NOT match
        if (!validPassword) { 
            console.log('invalid user password');
            res.status(400).json({ message: 'Login failed. Please try again' });
        return;
        }
        // return success message if password matches
        // res.status(200).json({ message: 'Succes! You are now logged in.' }); 
        req.session.save(() => { 
            console.log("--------in  session .save")
            req.session.loggedIn = true;
        res.status(302).redirect("/")
        });
        } catch (err) {
        console.log('look out for this error here', err);
        res.status(500).json(err);
    }
});

// GETS specific user by id
// router.get('/:id', async (req, res) => {
//     try {
//         const userData = await User.findByPk(req.params.id);
//         if (!userData) {
//         res.status(404).json({ message: 'No user with this id!' });
//         return;
//         }
//         res.status(200).json(userData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

module.exports = router;
