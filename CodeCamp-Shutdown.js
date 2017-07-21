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

        Slack.postMessageToChannel(channelName, "I am going home.");
        Slack.postMessageToChannel(channelName, "Goodbye, "+ memory.Brain.name);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
