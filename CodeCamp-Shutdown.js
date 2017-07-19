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

        Slack.postMessageToChannel(channelName, "I am going to sleep. You better be carefull when YOU go to sleep.");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
