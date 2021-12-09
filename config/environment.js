const dbURI =
	process.env.MONGODB_URI || 'mongodb://localhost:27017/node_unilever';

const port = process.env.PORT || 4000;
const secret = process.env.SECRET || 'Tgs5aG_^GH@lKmnN';
module.exports = { port, dbURI, secret };
