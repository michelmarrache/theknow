var User = require('../models/user');
var Auth = require('../../config/middlewares/authorization.js');

module.exports = function(app, passport){
  app.get('/directory', Auth.isAuthenticated , function(req, res){
    /*User.find({},{}, function (err, users) {
      var userMap = {};
      users.forEach(function(user) {
        userMap[user.email] = user;
      })
      console.log(userMap);
    })*/
    res.render('directory', { user : req.user });
  });

  app.get('/edituser/:email', Auth.isAuthenticated , function(req, res){
    var email = req.params.email;
    User.findOne({email : email}, function (err, user) {
    res.render('edituser', { user : req.user });
    })
  });

  app.post('/updateuser', Auth.isAuthenticated , function(req, res){
    var email = req.body.email;
    console.log(email)

    for(var i in req.params){
      if(req.params[i] == 'undefined') req.params[i] = '';
    }

    var updateData = {
      firstName: req.body.firstname
      ,lastName: req.body.lastname
      ,position: req.body.position
      ,department: req.body.department
      ,extension: req.body.extension
    };

    User.update( {email: email}, updateData, function(err,affected){
      if(!err){
        console.log('affected rows: ', affected);
        res.redirect('/directory');
      } else {
        res.send(err);
      }
    });

  });

}