const router = require('express').Router();
const materialController = require('../controllers/materials');
const materialPdfController = require('../controllers/materialsPdf');
const authController = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => {
	res.json({ message: 'Hello world' });
});

router
	.route('/materials')
	.get(materialController.index)
	.post(secureRoute, materialController.create);

router
	.route('/materials/:id')
	.get(materialController.show)
	.put(secureRoute, materialController.update)
	.delete(secureRoute, materialController.delete);

router
	.route('/materialsPdf')
	.get(materialPdfController.index)
	.post(secureRoute, materialPdfController.create);

router
	.route('/materialsPdf/:id')
	.get(materialPdfController.show)
	.put(secureRoute, materialPdfController.update)
	.delete(secureRoute, materialPdfController.delete);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
