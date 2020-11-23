const express = require('express');
const app = express();
// require('./db');
const cors = require('cors');
const helmet = require('helmet');
const router = require('./api/routes/routes');
const {
    logErrors,
    errorHandler,
    wrapErrors
} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFound');

//  Server configs
const { config } = require('./config/index');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middlewares
app.use(cors());
app.use(helmet());
if (config.dev) {
    const morgan = require('morgan');
    app.use(morgan('dev'));
}

// Routes
router(app);

// Error 404
app.use(notFoundHandler);

// Errors middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);




app.listen(config.port, () => {
    console.log(`Listening on: http://localhost:${config.port}`);
})
