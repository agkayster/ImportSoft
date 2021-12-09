const mongoose = require('mongoose');

const { Schema } = mongoose;

const pdfSchema = new Schema({
	pdfName: { type: String, required: true, unique: true, minLength: 2 },
	pdfPathLink: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('MaterialPDF', pdfSchema);
