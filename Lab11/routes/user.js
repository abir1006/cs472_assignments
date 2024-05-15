const express = require('express');
const viewsDir = process.cwd() + '/views';
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);
router.get('/add-user', (req, res, next) => {
    res.sendFile(viewsDir + '/add_user.html');
});

router.post('/add-user', (req, res, next) => {
    console.log(req.body);
    res.redirect('/user');
});

router.get('/user', (req, res, next)=> {
    res.sendFile(viewsDir + '/user.html');
})

module.exports = router;