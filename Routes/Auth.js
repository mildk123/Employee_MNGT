
const express = require("express");
const router = express.Router();

const Users = require('../Model/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

// ///////////////// Authentication ////////////////////
router.post("/auth/register", (req, res) => {
    const user = req.body;
    const hash = hashPassword(user.password);

    const newUser = new Users({ email: user.email, password: hash });

    newUser.save()
        .then(() => res.send({ message: "User registered successfully!", registered: true }))
        .catch(e => res.status(500).send({ message: e.message, registered: false }));
})

router.post("/auth/login", async (req, res) => {
    console.log('Authenticating User');

    //Check Email
    const user = await Users.find({ email: req.body.email });

    if (!user.length) {
        res.status(500).send({ message: "User not found!", match: false });
        return;
    }

    //Compare Email
    const passwordMatched = await bcrypt.compareSync(req.body.password, user[0].password);

    if (!passwordMatched) {
        res.status(500).send({ message: "Incorrect Email/Password!", match: false });
        return;
    }

    //Generate Token
    const token = await jwt.sign({ user: user[0] }, 'anySecretKey');

    res.send({ token: token, match: true });
})


function hashPassword(password) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(password, salt);

    return hash;
}

module.exports = router;
