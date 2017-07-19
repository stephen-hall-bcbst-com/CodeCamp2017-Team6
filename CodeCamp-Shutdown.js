'use strict';
module.exports = {
    /**
     * @param {string} channelName
     * @param {string} userName
     * @param {Object} Slack
     */
    shutdown_received: function(channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

<<<<<<< HEAD
        Slack.postMessageToChannel(channelName, "I am going to sleep. you better be careful when YOU go to sleep.");
        Slack.postMessageToChannel(channelName, "Goodbye now!");
        Slack.postMessageToChannel(channelName, "Adios");
=======
        Slack.postMessageToChannel(channelName, "I am going to sleep. You better be carefull when YOU go to sleep.");
>>>>>>> 0a94084653d923ded1530e10a8b49515fd6af592

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
