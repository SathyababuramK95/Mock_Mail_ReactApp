const Email = require('../models/email');


exports.getinboxmailsforuser = async(req,res)=>{

    try {
        let userName = req.body.username && req.body.username || null;
    
        if(!userName){
            res.status(500).json({ error : "invalidData" });
            return;
        }

        let userEmail = Email.find({
            touser : userName,
            isactive : true
        })

        if(userEmail && userEmail.length > 0){
            res.status(200).json({ userEmails : userEmail });
            return;
        }else{
            res.status(200).json({ userEmails : [] });
            return;
        }
    } catch (err) {
        res.status(500).json({ error : err });
        return;
    }
}

exports.updatemail = (req,res)=>{
    const emailUid = req.body.emailuid && req.body.emailuid || null;

    if(!req.body.emailuid){
        res.json({status: 500, error: "Invalid Data"});
        return;
    }

    let  = {};

    if(req.body.markasstarred){
        updateObject.isstarred = true
    }
    if(req.body.markasimportant){
        updateObject.isimportant = true
    }
    if(req.body.markasviewed){
        updateObject.isviewed = true
    }
    if(req.body.markasdeleted){
        upupdateObjectdateObject.isactive = false
    }

    Email.findByIdAndUpdate(emailUid,updateObject,(err,data)=>{
        if(err){
            res.json({status: 500, error: "Error while updating the mail"});
            return;
        }else{
            res.json({status: 200, data: {}});
            return;
        }
    })
}