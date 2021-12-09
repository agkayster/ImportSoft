const Material = require('../models/Material');

function indexRoute(req, res, next) {
	Material.find(req.query)
		.then((material) => res.json(material))
		.catch(next);
}

function createRoute(req, res, next) {
	const material = new Material(req.body);
	material
		.save()
		.then((material) => res.status(201).json(material)) // show http status 200 which is "ok" and reload show page
		.catch(next);
}

function showRoute(req, res, next) {
	Material.findById(req.params.id)
		.then((material) => {
			if (!material) return res.sendStatus(404);
			return res.json(material);
		})
		.catch(next);
}

function updateRoute(req, res, next) {
	Material.findById(req.params.id)
		.then((material) => {
			if (!material) return res.sendStatus(404);
			return material.set(req.body);
		})
		.then((material) => material.save())
		.then((material) => res.json(material))
		.catch(next);
}

function deleteRoute(req, res, next) {
	Material.findById(req.params.id)
		.then((material) => {
			if (!material) return res.sendStatus(404);
			return material.remove().then(() => res.sendStatus(204));
		})
		.catch(next);
}

module.exports = {
	index: indexRoute,
	create: createRoute,
	show: showRoute,
	update: updateRoute,
	delete: deleteRoute,
};
