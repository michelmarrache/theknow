var User = require('../../app/models/user');

exports.isAuthenticated = function (req, res, next){
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        next();
    }else{
        res.redirect("login");
    }
}

exports.userExist = function(req, res, next) {
    User.count({
        email: req.body.email
    }, function (err, count) {
        console.log(err);
        if (count === 0) {
            console.log(err);
            next();
        } else {
            res.redirect("/");
        }
    });
}
