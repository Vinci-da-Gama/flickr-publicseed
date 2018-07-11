module.exports = function(req , res , next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Content-Length, X-Requested-With, x-access-token, x-device-longitude,x-device-latitude, x-version');

    if('OPTIONS' == req.method){
        res.sendStatus(200).end();
    }
    else{
        next();
    }
};