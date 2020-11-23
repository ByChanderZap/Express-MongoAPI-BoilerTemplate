require('dotenv').config();

const config = {
	dev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT || 3000,
	DB_CONNECTION: process.env.DB_CONNECTION
};

module.exports = { config };
