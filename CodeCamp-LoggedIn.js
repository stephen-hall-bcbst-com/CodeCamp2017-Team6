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
 
       Slack.postMessageToChannel(channel, ':+1: Say Hi, Hey, or Hello to start.    Please use complete sentences.    Example: Hello.    Say:  - Help. -  for help :+1:');
 
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
