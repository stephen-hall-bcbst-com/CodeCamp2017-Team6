'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    asked_for_help: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
 
        message = message.toLowerCase();

<<<<<<< HEAD
        Slack.postMessageToChannel(channelName, 'Heard your cry for help.');
        Slack.postMessageToChannel(channelName, 'Need my assistance?');

=======
        if (message.includes('')) {
            Slack.postMessageToChannel(channelName, 'Hello. How are you?');
        }
>>>>>>> 0a94084653d923ded1530e10a8b49515fd6af592
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
