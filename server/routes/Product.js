const router = require('express').Router();

const { createProduct, updateProduct, deleteProduct, getProduct, getAllProduct, searchProduct } = require('../controllers/Product');
const { verifyTokenAndAdmin } = require('./VerifyToken')



router.route('/').post( createProduct);

router.route('/:id').put( updateProduct);

router.route('/:id').delete( deleteProduct);

router.route('/find/:id').get(getProduct);

router.route('/').get(getAllProduct);

router.route('/search').get(searchProduct);

module.exports = router