const router = require('express').Router();
const materialController = require('../controllers/materials');
const materialPdfController = require('../controllers/materialsPdf');
// const authController = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => {
	res.json({ message: 'Hello world' });
});

router
	.route('/materials')
	.get(materialController.index)
	.post(materialController.create);

router
	.route('/materials/:id')
	.get(materialController.show)
	.put(materialController.update)
	.delete(materialController.delete);

router
	.route('/materialsPdf')
	.get(materialPdfController.index)
	.post(materialPdfController.create);

router
	.route('/materialsPdf/:id')
	.get(materialPdfController.show)
	.put(materialPdfController.update)
	.delete(materialPdfController.delete);

// router.post('/register', authController.register);
// router.post('/login', authController.login);

module.exports = router;
