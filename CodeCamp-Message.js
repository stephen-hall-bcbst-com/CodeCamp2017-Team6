'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        message = message.toLowerCase();

        if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
            Slack.postMessageToChannel(channelName, 'Hello. How are you?');
        }

       if (message.includes('good') || message.includes('great') || 
           message.includes('awesome') || message.includes('amazing') || 
           message.includes('excellent') message.includes('well')
            Slack.postMessageToChannel(channelName, 'What does J-U-D-G-E spell?');
        }
 
        if (message.includes('judge')) {
            Slack.postMessageToChannel(channelName, 'So, are you judging me?');
        }

        if (message.includes('y')) {
            Slack.postMessageToChannel(channelName, 'One of you said that you take bribes. I have might have $75 if my team wins in 1st place. -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Ask me a few yes or no questions.');
         }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
