var User = require('../models/user');
var Auth = require('../../config/middlewares/authorization.js');

module.exports = function(app, passport){
  app.get('/directory', Auth.isAuthenticated , function(req, res){
    User.find({},{}, function (err, users){
      // Console statments are your best friends :D
      console.log('users:---->', users);
      
      //This is not necessary as mongoose returns an array
      //of objects containing all users ... not sure if that's
      //what you want but it works.
      var userMap = [];
      users.forEach(function(user) {
        console.log('user in forEach:--->', user)
        userMap[user.email] = user;
      });
      console.log('users!!! ----->',users);
      
      ////////////////////////////////////////////////////////
      /*
      * This is your big error.
      * From layout.jade, you are rendering with a variable
      * of user and you were displaying this in the top bar
      * layout.jade at line 53 ;)
      */
      //var user = {firstName: req.user.firstName };

      // Now just add it to the object passed to jade engine
      res.render('directory', { 'userMap' : users, 'user':user });
    });
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
