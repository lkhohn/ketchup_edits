// Usage: var statics = require('./statics.js');
//        var db = statics.db;
//        var dbAddress = db.address;
//        var dbPort = db.port;

//        var api = statics.googleMaps.apiKey;
//        etc...

var statics = {
    db:
    {
      name: 'ketchup',
      address: 'gschool.ddns.net',
      port: '2200',
      username: 'gschool',
      password: 'gschool123'
    },
    yelp:
    {
      consumerKey: '_267HSTfgbXNNSW6ZD9-SA',
      consumerSecret: 'vIZvlhwAcfyrjmdrVm0RF-KyUt8',
      token: '7SeJZvzVX9Xtbl20aIMtsRubJmNcpH-V',
      tokenSecret: 'WtIL-hHJNZxGSHVfxnKt6GKV39g'
    },
    googleMaps:
    {
      apiKey: 'AIzaSyBV27rjUQoC_np17lGCrD4hmuIpA0ne4pg'
    }
};


module.exports = statics;
