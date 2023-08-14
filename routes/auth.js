const User = require('../models/User');
const router = require('express').Router();

router.get('/register', async (req, res) => {
    const user = await new User({
        username: "john",
        email: "john@gmail.com",
        password: "123456"
    })

    await user.save();
    res.send('ok');
})

module.exports = router; 