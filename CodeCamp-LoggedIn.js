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
        Slack.postMessageToChannel(channel, 'Example: Hello.');
        Slack.postMessageToChannel(channel, "Start chatting with Boneless Biscuit Bot :smile: ");
        Slack.postMessageToChannel(channel, "What is your name?");
        
// Whan name is sent, this records it into the memory

var memory = require('./codeCamp-memory.js');
memory.lastQuestion = "name";

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
