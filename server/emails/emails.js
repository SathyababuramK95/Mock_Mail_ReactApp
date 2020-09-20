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