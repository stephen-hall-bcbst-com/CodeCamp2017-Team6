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
        Slack.postMessageToChannel(channel, "What is your name?");
<<<<<<< HEAD
        Slack.postMessageToChannel(channel, "Start chatting with Boneless Biscuit Bot :smile: ");
=======
        
// Whan name is sent, this records it into the memory

>>>>>>> a1d5d68d889d6973844ce4d65d6881d5c32b5d34
var memory = require('./codeCamp-memory.js');
memory.lastQuestion = "name";

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
