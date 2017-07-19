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
 

         var replies = [
            "Hello?", 
            "I'm so lonely...", 
            "Talk to me!"];

        var response = helper.phraseAtRandom(replies);

        message = message.toLowerCase();

        if (message.includes('')) {
            Slack.postMessageToChannel(channelName, 'Hello. How are you?');
 }

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
