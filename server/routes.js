module.exports = function(router) {
    var User = require('./user/user');
    var Emails = require('./emails/emails');

    


    //User
    router.post('/user/registeruser', User.registerUser);
    router.post('/user/getuser', User.getUser);


    //Emails
    router.post('/email/getinboxmailsforuser', Emails.getinboxmailsforuser);
    router.post('/email/updatemail', Emails.updatemail);


}