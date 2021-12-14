const mongoose = require('mongoose');

const { Schema } = mongoose;

const pdfSchema = new Schema({
	pdfName: {
		type: String,
		required: 'Please provide a {PATH}',
		unique: true,
		minLength: 2,
	},
	pdfPathLink: {
		type: String,
		required: 'Please provide a {PATH}',
		unique: true,
	},
});

module.exports = mongoose.model('MaterialPDF', pdfSchema);
