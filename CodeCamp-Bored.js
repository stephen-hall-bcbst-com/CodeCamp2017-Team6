'use strict';

module.exports = {
    settings: {
        enabled: true,
         timeoutInSeconds: 5,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, 'can i get uhhhhh boneless pizza ');
   

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
