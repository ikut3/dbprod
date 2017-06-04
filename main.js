var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://peaceful_swanson/dev';
var str = "";

app.route('/').get(function(req, res)

    {
        MongoClient.connect(url, function(err, db) {
            var cursor = db.collection('users').find();
            //noinspection JSDeprecatedSymbols
            cursor.each(function(err, item) {

                if (item != null) {
                    str = str + "    username  " + item.username + "</br>";
                }
            });
            res.send(str);
            db.close();
        });
    });

var server = app.listen(3015, function() {});
