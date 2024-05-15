const express = require('express');
const viewsDir = process.cwd() + '/views';
const options = {
    "caseSensitive": false,
    "strict": false
};
const router = express.Router(options);
router.get('/add-product', (req, res, next) => {
    res.sendFile(viewsDir + '/add_product.html');
});
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/products');
});

router.get('/products', (req, res, next)=> {
    res.sendFile(viewsDir + '/product.html');
})

module.exports = router;