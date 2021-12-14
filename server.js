const express = require('express');
const mongoose = require('mongoose');
mongoose.plugin(require('mongoose-unique-validator'), {
	message: 'Please choose another {PATH}',
});
const cors = require('cors');
const router = require('./config/router');
const errorHandler = require('./lib/errorHandler');
const { port, dbURI } = require('./config/environment');
const app = express();

// The fileUpload npm package for handling
// file upload functionality
const fileUpload = require('express-fileupload');

// Passing fileUpload as a middleware
app.use(fileUpload());

// app.use(cors());

mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/dist`));

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// app.use(function (req, res, next) {
// 	res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept'
// 	);
// 	next();
// });

app.post('/upload', function (req, res) {
	// When a file has been uploaded
	if (req.files && Object.keys(req.files).length !== 0) {
		// Uploaded path
		const uploadedFile = req.files.uploadFile;

		// see details of uploading file
		console.log('get uploaded File =>', uploadedFile);

		// // Upload path to vscode path//
		// const uploadPath = `${__dirname}/FilesUD/uploads/${uploadedFile.name}`;

		// Upload path points to my desktop folder//
		const uploadPath = `/Users/mac/Desktop/justPDF/${uploadedFile.name}`;

		// To save the file using mv() function
		uploadedFile.mv(uploadPath, function (err) {
			if (err) {
				console.log(err);
				res.send('Failed !!!');
			} else {
				res.send('Successfully uploaded!!');
			}
		});
	} else {
		res.send('No file Uploaded!!');
	}
});

app.use('/api', router);
app.use(errorHandler);

app.listen(port, () => console.log(`app is up and running on port ${port}`));

module.exports = app;
