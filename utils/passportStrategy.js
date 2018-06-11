/*jshint esversion: 6 */

const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const User = require('./../model/user.js');

passport.use('user-bearer', new BearerStrategy(
    function(token, done) {
        User.findOne({ 'user_token': token }, function(err, user) {
            console.log("error passport " + err);
            console.log("user " + user);
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            return done(null, user, { scope: 'all' });
        });
    }
));


module.exports = passport;