'use strict';

var helper = require('./Helpers.js');
module.exports = {
    /**
     * @param {string} question
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    question_received: function(question, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

<<<<<<< HEAD
        Slack.postMessageToChannel(channelName, "How are you");
        Slack.postMessageToChannel(channelName, "How are you?");
        Slack.postMessageToChannel(channelName, "What is your name?");
=======
var replies = [
            "The answer is: no.", 
            "The answer is: I have no clue.", 
            "The answer is: possibly.",
            "The answer is: yes.",
            "The answer is: concentrate and ask later.",
            "The answer is: most likely.",
            "The answer is: forget it.",
            ];

        var response = helper.phraseAtRandom(replies);

        if (question.includes('Is') || question.includes('Am') || question.includes('Are')) {
            Slack.postMessageToChannel(channelName, response);
        }
>>>>>>> e90a8a18365b8613fe3b6bf7d29e858e221f8767

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
