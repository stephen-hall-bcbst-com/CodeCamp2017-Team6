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
};
