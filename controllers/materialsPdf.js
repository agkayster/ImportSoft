const MaterialPDF = require('../models/MaterialPDF');

function indexRoute(req, res, next) {
	MaterialPDF.find(req.query)
		.then((materialpdf) => res.json(materialpdf))
		.catch(next);
}

function createRoute(req, res, next) {
	const materialpdf = new MaterialPDF(req.body);
	material
		.save()
		.then((materialpdf) => res.status(201).json(materialpdf)) // show http status 200 which is "ok" and reload show page
		.catch(next);
}

function showRoute(req, res, next) {
	MaterialPDF.findById(req.params.id)
		.then((materialpdf) => {
			if (!materialpdf) return res.sendStatus(404);
			return res.json(materialpdf);
		})
		.catch(next);
}

function updateRoute(req, res, next) {
	MaterialPDF.findById(req.params.id)
		.then((materialpdf) => {
			if (!materialpdf) return res.sendStatus(404);
			return materialpdf.set(req.body);
		})
		.then((materialpdf) => materialpdf.save())
		.then((materialpdf) => res.json(materialpdf))
		.catch(next);
}

function deleteRoute(req, res, next) {
	MaterialPDF.findById(req.params.id)
		.then((materialpdf) => {
			if (!materialpdf) return res.sendStatus(404);
			return materialpdf.remove().then(() => res.sendStatus(204));
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
