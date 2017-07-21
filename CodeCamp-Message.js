'use strict';

module.exports = {
    /**
     * @param {string} message
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************


        // this makes user message lowercase
        message = message.toLowerCase();

var memory = require('./codeCamp-memory.js');
        if (memory.Brain.lastQuestion == "name") {
        // saves name into memory
            memory.Brain.name = message;
            memory.Brain.lastQuestion = '';
        // Bot: Hello. How are you, (name)?
        // "+ memory.name" inserts the name into the question.
            Slack.postMessageToChannel(channelName, ':wave: Hello. How are you, '+ memory.Brain.name + '? :wave:');
        // User: Good./Great./Awesome./Amazing./Excellent.  
        } else if (message.includes('good') || message.includes('great') || 
           message.includes('awesome') || message.includes('amazing') || 
           message.includes('excellent')) {
        // Bot: What is your favorite color?
            Slack.postMessageToChannel(channelName, 'What is your favorite color?');
        // records color in memory
            memory.Brain.lastQuestion = 'color';
        } else if (memory.Brain.lastQuestion == "color") {           
            if (message.includes('red') || message.includes('orange') || message.includes('yellow')
            || message.includes('green') || message.includes('blue') || message.includes('indigo')
            || message.includes('violet') || message.includes('purple') || message.includes('pink')
            || message.includes('black') || message.includes('white') || message.includes('grey')
            || message.includes('gray') || message.includes('brown') || message.includes('gold')
            || message.includes('silver') || message.includes('navy') || message.includes('maroon')) {
              memory.Brain.color = message;
         // Bot: What does j-U-D-G-E spell?
        Slack.postMessageToChannel(channelName, 'What does J-U-D-G-E spell, '+ memory.Brain.name);
    }
          
        if (message.includes('judge')) {
        // Bot: So, are you judging me?
            Slack.postMessageToChannel(channelName, 'So, are you judging me, '+ memory.Brain.name + '?');
        // User: (any positive answer that has "y")
        } if (message.includes('ye')) {
        // Bot: One of you said that you take bribes. I have might have $75 if my team wins in 1st place. :dollar: -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Ask me a few yes or no questions.');
            Slack.postMessageToChannel(channelName, ':dollar: One of you said that you take bribes. I have might have $75 if my team wins in 1st place. :dollar: -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.- Ask me a few yes or no questions.');
        }
        } else {
        // Invalid command msg
            Slack.postMessageToChannel(channelName, 'invld cmmd, '+ memory.Brain.name + '.');
        }
        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
