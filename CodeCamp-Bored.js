'use strict';

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 20,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channel, 'Talk to me. Give me the juicy stuff.');
        Slack.postMessageToChannel(channel, 'What are you waiting for?');
        Slack.postMessageToChannel(channel, 'Can I get uhh.. Boneless Biscuit?');
        Slack.postMessageToChannel(channel, 'Talk to me!');
        Slack.postMessageToChannel(channel, 'I am bored to death');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
