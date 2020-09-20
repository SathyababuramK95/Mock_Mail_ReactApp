const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UserSchema = new Schema({

    firstname : {
        type :  String,
        required : true
    },
    lastname : {
        type :  String,
        required : true
    },
    registeredmail : {
        type :  String,
        required : true
    },
    password : {
        type :  String,
        required : true
    },
    isactiveuser : Boolean,
    phonenumber : {
        type : Number
    }
    

});


module.exports = mongoose.model('User', UserSchema);