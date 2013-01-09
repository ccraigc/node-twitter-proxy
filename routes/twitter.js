var twitter = require('ntwitter'),
    util = require('util')

function getTwitter() {
    return new twitter({
        consumer_key: 'ZZd1NQds3FNi83Df3K0fA',
        consumer_secret: 'rLTJLbpIGA2dR6R6Hsod027t7jOMrgvW474d4x55Zc',
        access_token_key: '100306546-OPrEPvY4667lkuDxyywx5LfxdCbemqpjzfzRq6JC',
        access_token_secret: 'SZEguTBB38mzRzRj2SYFbJDJoK5dpSKZ0FBxr0KW8'
    });
}

exports.statusShow = function(req, res, next) {
    
    var twitHandle = getTwitter();
    
    twitHandle.get('/statuses/show/'+req.params.id+'.json', {include_entities:true}, function(err, data) {
        if(err) return next(err);
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.send(data);
    });
    
}