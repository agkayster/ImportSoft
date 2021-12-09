const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Material = require('../models/Material');
const User = require('../models/User');
const MaterialPDF = require('../models/MaterialPDF');
const materialData = require('./data/materialData');
const userData = require('./data/userData');
const materialPDFData = require('./data/materialPDFData');

mongoose
	.connect(dbURI)
	.then(() => mongoose.connection.db.dropDatabase())
	.then(() => Material.create(materialData))
	.then(() => User.create(userData))
	.then(() => MaterialPDF.create(materialPDFData))
	.then(() => console.log('Successfully seeded!'))
	.catch((err) => console.log(err))
	.finally(() => mongoose.connection.close());
