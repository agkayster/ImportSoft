function errorHandler(err, req, res, next) {
	// receives any errors from previous middleware
	if (err.name === 'ValidationError') {
		// tidy up the mongoose error
		for (const key in err.errors) {
			err.errors[key] = err.errors[key].message;
		}
		// send just the validation errors (402 meaning unprocessible entity)
		return res.status(422).json({ errors: err.errors });
	}
	res.sendStatus(500); // send a response (internal server error)
	next(err); // sends the error to the terminal
}

module.exports = errorHandler;
