'use strict';

module.exports = {
    phraseAtRandom: function(array) {
        return array[Math.floor(Math.random() * array.length)];
    },

    numberBetweenXandY: function(x, y) {
        return (x+Math.round(Math.random() * (y-x)));
    },

    writeDataToFile: function(filename, data) {
        var fs = require('fs');
        fs.writeFileSync('./data/' + filename, data);
    },

    readDataFromFile: function(filename) {
        var fs = require('fs');
        var data = null;
        if (fs.existsSync('./data/' + filename)) {
            data = fs.readFileSync('./data/' + filename, 'utf8')
        }
        return data;
    },

    /**
     * searches an array for the given string value
     * and returns true if found (false if not)
     * 
     * @param {Array} array 
     * @param {string} value 
     * @return {boolean} true if found, false if not found
     */
    searchArray: function searchArray(array, value) {
        for (var x = 0; x < array.length; x++) {
            if (array[x] == value) {
                return true;
            }
        }
        
        return false;
    },

    /**
     * 
     * @param {string} text
     * @return {string} Returns the last word in a string
     */
    getLastWord: function getLastWord(text) {
        var lastSpace = text.lastIndexOf(' ');

        if (lastSpace == 0 || lastSpace >= text.length) {
            return '';
        }
        
        return text.substring(lastSpace);
    },
};
