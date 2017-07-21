'use strict';

module.exports = {
    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    logged_in: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************
 
//       Instructions.---------,
//                            \|/

        Slack.postMessageToChannel(channel, "Please use complete sentences.");
        Slack.postMessageToChannel(channel, "QUESTIONS: What time is it? What do you know about me? (Questions must be asked AFTER telling me your favorite color.)");
        Slack.postMessageToChannel(channel, "What is your name?");
        Slack.postMessageToChannel(channel, "Start chatting with 8ball Bot :smile: ");
        
// Whan name is sent, this records it into the memory

var memory = require('./codeCamp-memory.js');
memory.Brain.lastQuestion = "name";

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
