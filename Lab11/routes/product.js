const express = require('express');
const path = require("path");
const options = {
    "caseSensitive": false,
    "strict": false
};
let products = [
    {"name": "Laptop", "itemPrice": 200},
    {"name": "Coffee", "price": 5}
];
const router = express.Router(options);
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add_product.html' ));
});
router.post('/add-product', (req, res, next) => {
    products.push(req.body);
    console.log("Product added successfully");
    res.redirect('/products');
});

router.get('/products', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'product.html' ));
})

module.exports = router;