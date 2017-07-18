'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 30,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, 'What are you waiting for?');
        Slack.postMessageToChannel(channel, 'Can I get uhh.. Boneless Biscuit?');
        Slack.postMessageToChannel(channel, 'Talk to me!');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
