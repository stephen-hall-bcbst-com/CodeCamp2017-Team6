'use strict';
module.exports = {
    /**
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    shutdown_received: function(channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

var memory = require('./codeCamp-memory.js');
        if (memory.lastQuestion == "name") {
            memory.name = message;
            memory.lastQuestion = '';

        Slack.postMessageToChannel(channelName, "I am going to sleep. You better be careful when YOU go to sleep.");
        Slack.postMessageToChannel(channelName, "Goodbye, "+ memory.name);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
