'use strict';
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

        Slack.postMessageToChannel(channelName, "How are you");
        Slack.postMessageToChannel(channelName, "How are you?");
        Slack.postMessageToChannel(channelName, "What is your name?");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
