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

<<<<<<< HEAD
        Slack.postMessageToChannel(channel, 'Talk to me. Give me the juicy stuff.');
=======
        Slack.postMessageToChannel(channel, 'What are you waiting for?');
        Slack.postMessageToChannel(channel, 'Can I get uhh.. Boneless Biscuit?');
        Slack.postMessageToChannel(channel, 'Talk to me!');
>>>>>>> 935555e432a5d008eb7efa49a5bab5b53180d70d

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
