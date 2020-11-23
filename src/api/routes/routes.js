const userRoutes = require('../components/users/network');

const routes = (app) => {
    app.use('/api/user', userRoutes);
}

module.exports = routes;