const bcrypt = require('bcrypt');
let SALT_WORK_FACTOR = 10;
var Promise = require('bluebird');


const getHash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(password, salt, function(err, hash) {
                if (!err) resolve(hash);
                else reject(err)
            });
        });
    });
}


const comparePassword = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function(err, res) {
            if (res) resolve(true);
            else resolve(false);
        });
    });
}

module.exports = {
    getHash,
    comparePassword
};