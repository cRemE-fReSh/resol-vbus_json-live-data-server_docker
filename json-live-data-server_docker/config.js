/*! resol-vbus | Copyright (c) 2013-2018, Daniel Wippermann | MIT license */
/*! json-live-data-server_env | Copyright (c) 2013-2018, Daniel Wippermann | MIT license */
'use strict';



const path = require('path');



const config = {

    /**
     * The port number for the HTTP server to listen to.
     * @type {Number}
     */
    httpPort: process.env.HTTPPORT,

    /**
     * The inteval in milliseconds between two writes of the logging file.
     * @type {Number}
     */
    loggingInterval: process.env.LOGGINGINTERVAL,

    /**
     * The filename of the logging file.
     * @type {String}
     */
    loggingFilename: path.resolve(__dirname, 'live-data.json'),

    /**
     * The name of the `Connection` subclass to use for connecting to the VBus.
     * @type {String}
     */
    connectionClassName: 'TcpConnection',

    connectionOptions: {
        /**
         * The host name / IP address of the VBus/LAN or Datalogger device.
         * @type {String}
         */
        host: process.env.VBUSIP, 

        /**
         * The password for the VBus/LAN or Datalogger device.
         * @type {String}
         */
        password: process.env.VBUSPASSWORD,
    },
};



module.exports = config;
