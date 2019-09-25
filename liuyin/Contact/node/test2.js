'use strict';

var fs = require('fs');

fs.readFile('sample.jpg', function (err, data) {
    if (err) {

        console.log(err);
       //console.log(txt);
    } else {
        var txt=data.toString('utf-8');
        console.log(txt);
    }
});
