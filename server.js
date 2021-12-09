const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./config/router');
const errorHandler = require('./lib/errorHandler');
const { port, dbURI } = require('./config/environment');
const app = express();
// app.use(cors());

// var whitelist = ['http://localhost:8000']; //white list consumers
// var corsOptions = {
// 	origin: function (origin, callback) {
// 		if (whitelist.indexOf(origin) !== -1) {
// 			callback(null, true);
// 		} else {
// 			callback(null, false);
// 		}
// 	},
// 	methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
// 	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
// 	credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
// 	allowedHeaders: [
// 		'Content-Type',
// 		'Authorization',
// 		'X-Requested-With',
// 		'device-remember-token',
// 		'Access-Control-Allow-Origin',
// 		'Origin',
// 		'Accept',
// 	],
// };

// app.use(cors(corsOptions)); //adding cors middleware to the express with above configurations

mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/dist`));

app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

// var allowedOrigins = ['http://localhost:8000'];
// app.use(
// 	cors({
// 		origin: function (origin, callback) {
// 			// allow requests with no origin
// 			// (like mobile apps or curl requests)
// 			if (!origin) return callback(null, true);
// 			if (allowedOrigins.indexOf(origin) === -1) {
// 				var msg =
// 					'The CORS policy for this site does not ' +
// 					'allow access from the specified Origin.';
// 				return callback(new Error(msg), false);
// 			}
// 			return callback(null, true);
// 		},
// 	})
// );

// app.use(function (req, res, next) {
// 	res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
// 	res.header(
// 		'Access-Control-Allow-Headers',
// 		'Origin, X-Requested-With, Content-Type, Accept'
// 	);
// 	next();
// });

app.use('/api', router);
app.use(errorHandler);

app.listen(port, () => console.log(`app is up and running on port ${port}`));

module.exports = app;
