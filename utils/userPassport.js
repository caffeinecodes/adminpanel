const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const User = require('../model/users');

passport.use('admin-bearer', new BearerStrategy(
    function(token, done) {
        User.findOne({ 'admin_token': token }, function(err, user) {
            console.log('.........................qqqqqqqqqqq',user)
            console.log("error passport " + err);
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
        });
    }
));


module.exports = passport;