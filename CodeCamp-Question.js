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

// Time and Date

if (question.includes('What time is it?')) {
    Slack.postMessageToChannel(channelName, Date());
    return;
}

// 8 Ball

var replies = [
            ":8ball: The answer is: no. :8ball:", 
            ":8ball: The answer is: I have no clue. :8ball:", 
            ":8ball: The answer is: possibly. :8ball:",
            ":8ball: The answer is: yes. :8ball:",
            ":8ball: The answer is: concentrate and ask later. :8ball:",
            ":8ball: The answer is: most likely. :8ball:",
            ":8ball: The answer is: forget it. :8ball:",
            ":8ball: The answer is: I dont know. :8ball:",
            ];

        var response = helper.phraseAtRandom(replies);

        if (question.includes('Is') || question.includes('Am') || question.includes('Are')) {
            Slack.postMessageToChannel(channelName, response);
        } else {
            Slack.postMessageToChannel(channelName, 'This is not a yes or no question.');
        }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
