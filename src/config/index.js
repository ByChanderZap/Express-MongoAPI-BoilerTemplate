require('dotenv').config();

const config = {
	dev: process.env.NODE_ENV !== 'production',
	port: process.env.PORT || 3000,
	DB_CONNECTION: process.env.DB_CONNECTION,
	jwt_secret: process.env.JWT_SECRET  || 'secret'
};

module.exports = { config };
