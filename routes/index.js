require('dotenv').load();
var express = require('express');
var router = express.Router();
var account = require('../local_modules/accounts');
var knex = require('knex')({
  client: 'pg',
  connection: process.env.DATABASE_REMOTE
});

/******
Checks a user's session, and returns an object with various session varriables such as username
******/
function getSession (req, res)
{
  var userObj = {};
  if(req.signedCookies.user_session) {
    knex('users').where('id', req.signedCookies.user_session.id).then(function(user){
      if(user) {
        userObj = req.signedCookies.user_session;
      }
    });
  }
  return req.signedCookies.user_session;
}

router.get('/example_query', function(req, res, next) {
  //example of querying Micah's database using knex
  var ketchupUsers = function() {
    return knex('users');
  };
  ketchupUsers().where({
    //what you would like to search for
  }).then(function(users) {
    //what to do on success
    res.send(users);
  }).catch(function(err) {
    //what to do on error
    console.log(err);
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  // landing page
  var userHold = 'account';
  var userSession = getSession(req,res);
  if(userSession)
  {
    userHold = userSession.username;
    res.redirect('/usrhome');
  }
  else{
    res.render('./', {
      linkHome: '/',
      linkApt: '/aptSch',
      linkPref: '/pref',
      linkLogout: '/logout',
      username: userHold
    });
  }
});

router.post('/', function(req, res, next) {
  // for login or registration
  var input = req.body.textarea;
});

router.get('/login', function(req, res, next) {
  // for login
  res.render('./login', {
    linkHome: '/',
    linkApt: '/aptSch',
    linkPref: '/pref',
    linkLogout: '/logout'
  });
});

router.post('/login', function(req, res, next) {
  // for login or registration page
  var userSubmission = req.body;
  knex('users').where({
    username: userSubmission.username
  }).then(function(user) {
    if (!user[0]) {
      res.send('invalid username or password');
    } else {
      if (account().compareCredentials(res, userSubmission.password, user[0].password)) {
        delete user[0].password;
        res.cookie('user_session', user[0], {signed: true});
        res.redirect('/users/usrhome/');
      } else {
        res.redirect('/login');
      }
    }
  }).catch(function(err) {
    console.log(err);
  });
});

router.get('/signup', function(req, res, next) {
  // for registration page
  res.render('./signup', {
    linkHome: '/',
    linkApt: '/aptSch',
    linkPref: '/pref',
    linkLogout: '/logout'
  });
});

router.post('/signup', function(req, res, next) {
  // for registration page
  var userSubmission = req.body;
  //console.log(userSubmission);
  knex('users').where({
    //what you would like to search for
  }).then(function(users) {
    //what to do on success
    var valid = account().isValidAccount(res, userSubmission, users);
    switch (valid) {
      case 0:
        res.redirect('/signup');
        //res.send('invalid password');
        break;
      case 1:
        res.redirect('/signup');
        //res.send('invalid username');
        break;
      case 2:
        knex.insert({
          username: userSubmission.username,
          password: account().hashPassword(userSubmission)
        }).into('users').then(function(success) {
          console.log(success);
          res.redirect('/login');
        }, function(err) {
          console.log(err);
          res.end(err);
        });
        break;
      default:
    }
  }).catch(function(err) {
    //what to do on error
    console.log(err);
  });
});

router.get('/logout', function(req, res){
  res.clearCookie('user_session');
  res.redirect('/');
});

router.get('/usrhome', function(req, res, next) {
  // home page after login in/registration
  var userSession = getSession(req,res);
  if(userSession)
  {
    res.redirect('/users/usrhome');
    res.end();
  }
  else{
    res.render('./usrhome', {
      linkHome: '/usrhome',
      linkApt: '/aptSch',
      linkPref: '/pref',
      linkLogout: '/logout',
      yourApts: '',
      invApts: '',
      username: 'account'
    });
  }
});

router.get('/aptSch', function(req, res, next) {
  // appoint set up
  var userHold = 'account';
  var userSession = getSession(req,res);
  if(userSession)
  {
    userHold = userSession.username;
  }
  res.render('./aptSch', {
    linkHome: '/usrhome',
    linkApt: '/aptSch',
    linkPref: '/pref',
    linkLogout: '/logout',
    username: userHold
  });
});

router.post('/aptSch', function(req, res, next) {
  // appoint set up
  var userSubmission = req.body;
  var userID;
  var userSession = getSession(req,res);
  if(userSession)
  {
    userID = userSession.id;
  }
  else {
    userID = 1;
  }
  var invite_id = 2;
  knex('users').where({
    username: userSubmission.mtgInvite
  }).then(function(user) {
    if (!user[0]) {
      res.send("Username Does Not Exist");
      //res.redirect('/aptSch');
      res.end();
    } else {
      invite_id = user[0].id;

  knex('appointments').insert({
      creator_id: userID,
      invite_id: invite_id,
      address: userSubmission.mtgAddress,
      loc_lat: userSubmission.loc_lat,
      loc_lng: userSubmission.loc_lng,
      start_datetime: userSubmission.mtgDate,
      duration: userSubmission.mtgDuration,
      description: userSubmission.mtgDesc,
      creator_confirm: 1,
      invite_confirm: 0
      // location_id:
    }).into('appointments').then(function(success) {
      // res.send('success');
      console.log("success");
      res.redirect('/usrhome');
      res.end();
    }).catch(function(err) {
      res.redirect('/usrhome');
      res.end();
      console.error(err);
    });
  }
}).catch(function(err) {
  console.log(err);
});
});

router.get('/pref', function(req, res, next) {
  // preferences set up
  res.render('./index', {
    linkHome: '/',
    linkApt: '/',
    linkPref: '/',
    linkLogout: '/logout',
    username:" "
  });
});


module.exports = router;
