const User = require('../models/user');



exports.registerUser = async(req,res)=>{
    try {

        let usersDataWithSameUsername = await User.findOne({ registeredmail : req.body.username});

        if(usersDataWithSameUsername && usersDataWithSameUsername.length > 0){
            res.status(500).json({ error : "Username entered was taken, please proceed with another" });
            return;
        }

        let newUser = new User();
        user.firstname = req.body.firstname && req.body.firstname || null;
        user.lastname = req.body.lastname && req.body.lastname || null;
        user.registeredmail = req.body.registeredmail && req.body.registeredmail || null;
        user.password = req.body.pass && req.body.pass || null;
        user.isactiveuser = true;
        
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


exports.getUser = async (req,res)=>{

    try {

        let email = req.body.email && req.body.email || null; 
        let password = req.body.password && req.body.password || null; 

        if(!email || !password){
            res.status(500).json({ error: "Invalid data" });
            return;
        }

        let userData = await User.find({
            registeredmail  : email,
            password : password
        });

        if(userData && userData.length > 0){
            res.send('200').json({user : userData && userData[0] && userData[0] })
            return;
        }else{
            res.send('500').json({error : "Invalid user data"})
            return;
        }
        
    } catch (err) {
        res.send('500').json({error : err})
        return;
    }
}