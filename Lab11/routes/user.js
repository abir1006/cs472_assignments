const express = require('express');
const path = require("path");
const options = {
    "caseSensitive": false,
    "strict": false
};
let users = [
    {"user_name": "Abdoon", "user_address": "1000 N 4th St"},
    {"user_name": "John", "user_address": "123 St Detroit"}
];
const router = express.Router(options);
router.get('/add-user', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add_user.html' ));
});

router.post('/add-user', (req, res, next) => {
    users.push(req.body);
    console.log("User added successfully");
    res.redirect('/user');
});

router.get('/user', (req, res, next)=> {
    res.sendFile(path.join(__dirname, '..', 'views', 'user.html' ));
})

module.exports = router;