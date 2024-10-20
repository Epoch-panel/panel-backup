global.fs = require('fs');
global.db = require('../modules/db.js');
global.path = require('path');
global.encrypt = require('./encrypt.js')
global.app = require('../modules/server.js')();
global.core = require('./core.js')
global.WebSocket = require('ws')