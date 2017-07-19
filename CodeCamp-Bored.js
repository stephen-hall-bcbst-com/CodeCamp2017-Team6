'use strict';

var helper = require('./Helpers.js');

module.exports = {
    settings: {
        enabled: true,
        timeoutInSeconds: 30,
    },

    /**
     * @param {string} channel
     * @param {Object} Slack
     */
    bored: function(channel, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        //Randomizer ------,
        //                \|/
        var replies = [
            "Hello?", 
            "I'm so lonely...", 
            "Talk to me!"];

        var response = helper.phraseAtRandom(replies);

        Slack.postMessageToChannel(channel, response);

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
