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
        if (message.includes('hi') || message.includes('hello') || message.includes('hey')) {
        // Bot: Hello. How are you.
            Slack.postMessageToChannel(channelName, ':wave: Hello. How are you? :wave:');
<<<<<<< HEAD
        // User: Good./Great./Awesome./Amazing./Excellent.  
        } else if (message.includes('good') || message.includes('great') || 
           message.includes('awesome') || message.includes('amazing') || 
           message.includes('excellent')) {
        // Bot: What does j-U-D-G-E spell?  
           Slack.postMessageToChannel(channelName, 'What does J-U-D-G-E spell?');
=======
        } else {
            Slack.postMessageToChannel(channelName, 'I do not recognize this response.');
        }

        // User: Good./Great./Awesome./Amazing./Excellent.
        // Bot: What does j-U-D-G-E spell?
       if (message.includes('good') || message.includes('great') || 
           message.includes('awesome') || message.includes('amazing') || 
           message.includes('excellent') || message.includes('well')) {
            Slack.postMessageToChannel(channelName, 'What does J-U-D-G-E spell?');
        } else {
            Slack.postMessageToChannel(channelName, 'I do not recognize this responce.');
        }
 
>>>>>>> d3997136515e5693bd097c7e530990e945c0af68
        // User: Judge.
        } else if (message.includes('judge')) {
        // Bot: So, are you judging me?
            Slack.postMessageToChannel(channelName, 'So, are you judging me?');
        // User: (any positive answer that has "y")
        } else if (message.includes('y')) {
        // Bot: One of you said that you take bribes. I have might have $75 if my team wins in 1st place. :dollar: -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Ask me a few yes or no questions.');
            Slack.postMessageToChannel(channelName, ':dollar: One of you said that you take bribes. I have might have $75 if my team wins in 1st place. :dollar: -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Ask me a few yes or no questions.');
        } else {
<<<<<<< HEAD
        // Invalid command msg
=======
>>>>>>> d3997136515e5693bd097c7e530990e945c0af68
            Slack.postMessageToChannel(channelName, 'I do not recognize this responce.');
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
