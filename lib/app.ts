const express = require('express');
const http = require('http');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

/**
 * Create HTTP server.
 */
const httpServer = http.createServer(app);

/**
 * Configure Server
 */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(cors());

/**
 * Create MongoDB Connection
 */
mongoose.connect('mongodb://localhost/myevents', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

/**
 * Routes
 */
const indexRouter = require('./routes');
app.use('/', indexRouter);

/**
 * Get port from environment and store in Express.
 */

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create WebSocket Server.
 */

const io = require('socket.io')(httpServer);
require('./listeners');

/**
 * Listen on provided port, on all network interfaces.
 */
httpServer.listen(port);
console.log('Listening to port: ' + port);

export {app, io};
