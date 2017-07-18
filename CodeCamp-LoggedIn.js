'use strict';

module.exports = {
    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    logged_in: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, "I'm back for you!");
        Slack.postMessageToChannel(channel, 'Welcome Back!');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
