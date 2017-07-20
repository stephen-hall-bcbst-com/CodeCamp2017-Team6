'use strict';

var helper = require('./Helpers.js');

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

        // variable responses when asked for help

         var replies = [
            "Would you like to ask a question to the magic 8 ball :8ball: ? If so, go right ahead!", 
            "How can I help you? Ask me anything! :8ball: ", 
            "Do you need a question answered? Ask me, don't be shy! :8ball: ",
            "Heard your cry for help! :8ball: ", 
            'Ask me what I know about you! example: "What do you know about me?',
            'Ask me what time it is! example: "What do you know about me? ',
            ];

        var response = helper.phraseAtRandom(replies);

        Slack.postMessageToChannel(channelName, response);

        message = message.toLowerCase();

        //    old code \/
        //    if (message.includes('')) {
        //    Slack.postMessageToChannel(channelName, 'Hello. How are you?');
        // }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
