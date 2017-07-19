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

        // User: Hi./Hello./Hey.
        // Bot: Hello. How are you.
        if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
            Slack.postMessageToChannel(channelName, ':wave: Hello. How are you? :wave:');
        } else {
            Slack.postMessageToChannel(channelName, 'I do not recognize this responce.')
        }

        // User: Good./Great./Awesome./Amazing./Excellent.
        // Bot: What does j-U-D-G-E spell?
       if (message.includes('good') || message.includes('great') || 
           message.includes('awesome') || message.includes('amazing') || 
           message.includes('excellent') || message.includes('well')) {
            Slack.postMessageToChannel(channelName, 'What does J-U-D-G-E spell?');
        } else {
            Slack.postMessageToChannel(channelName, 'I do not recognize this responce.')
        }
 
        // User: Judge.
        // Bot: So, are you judging me?
        if (message.includes('judge')) {
            Slack.postMessageToChannel(channelName, 'So, are you judging me?');
        } else {
            Slack.postMessageToChannel(channelName, 'I do not recognize this responce.')
        }

        if (message.includes('y')) {
            Slack.postMessageToChannel(channelName, ':dollar: One of you said that you take bribes. I have might have $75 if my team wins in 1st place. :dollar: -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Ask me a few yes or no questions.');
         }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
