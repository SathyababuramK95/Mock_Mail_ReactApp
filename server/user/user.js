const User = require('../models/user');



exports.registerUser = async(req,res)=>{
    try {
        let usersDataWithSameUsername = await User.findOne({ registeredmail : req.body.username});

        if(usersDataWithSameUsername && usersDataWithSameUsername.length > 0){
            res.status(500).json({ error : "Username entered was taken, please proceed with another" });
            return;
        }

        let newUser = new User();
        newUser.firstname = req.body.firstname && req.body.firstname || null;
        newUser.lastname = req.body.lastname && req.body.lastname || null;
        newUser.registeredmail = req.body.username && req.body.username || null;
        newUser.password = req.body.password && req.body.password || null;
        newUser.isactiveuser = true;
        
        newUser.save((err,data)=>{
            if (err) {
                res.status(500).json({ error: err });
                return;
            } else {
                res.status(200).json({ user : data });
                return;
            }
        })
    } catch (err) {
        res.status(500).json({ error: err });
        return;
    }
}


exports.getUser = (req,res)=>{
   
    let email = req.body.email && req.body.email || null; 
    let password = req.body.password && req.body.password || null; 

    if(!email || !password){
        res.status(500).json({ error: "Invalid data" });
        return;
    }

    User.find({
        registeredmail  : email,
        password : password
    }).exec((err,userData)=>{
        if(err){
            res.json({status: 500, error: err});
            return;
        }else{
            res.json({status: 200, userData: userData && userData[0] && userData[0] || null});
            return;
        }
    })
}