const express = require('express');
const router = express.Router();
const { addToCart, getCartItems, deletefromCart } = require('../controllers/cartController');

router.post('/add-to-cart', addToCart);
router.route('/cart-items/:userId').get(getCartItems);
router.delete('/cart-items/:userId/:productId', deletefromCart);

module.exports = router;