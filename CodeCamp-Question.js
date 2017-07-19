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

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
