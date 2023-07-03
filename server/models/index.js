const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
const dotenv = require('dotenv')
dotenv.config({ path: 'server/.env' }) // Here you must take care to provide the correct path of the .env file
mongoose.connect("mongodb://localhost:27017/");

module.exports.User = require('./user');
module.exports.Poll = require('./poll');
