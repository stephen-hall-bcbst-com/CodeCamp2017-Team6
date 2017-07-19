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

        Slack.postMessageToChannel(channel, "Please use complete sentences.");
        Slack.postMessageToChannel(channel, 'Example: Hello.');
        Slack.postMessageToChannel(channel, "Start chatting with Boneless Biscuit Bot :smile: ");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
