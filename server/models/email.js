const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let EmailSchema = new Schema({

    fromuser : {
        type :  String,
        required : true
    },
    touser : {
        type :  String,
        required : true
    },
    subject : {
        type :  String,
        required : true
    },
    message : {
        type :  String,
        required : true
    },
    isactive : Boolean,
    isviewed : Boolean,
    isstarred : Boolean,
    isimportant : Boolean,
    emailsendat : Date,
    emailsentby : {
        type: Schema.ObjectId,
        required: true,
        reference: 'User'
    },
    emailreceivedat : Date
});


module.exports = mongoose.model('Email', EmailSchema);