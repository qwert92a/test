const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;

passport.use(new BasicStrategy(
    function (id, password, callback) {
        //디비에서 아이디와 비밀번호 정보를 query하여 비교.
        if(id === 'study' && password === '1234') {
             callback(null, id);
        } else {
            callback(null, false);
        }
    }
))

exports.isBasicAuthenticated = passport.authenticate('basic', {session: false});