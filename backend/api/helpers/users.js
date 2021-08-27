const mongoose = require("mongoose");
const User = require("../../models/users");

addUser = (req, res) => {
    const payload = req.body;
User.findOne({ email: payload.email }, (err, User) => {
    if(User){
        res.send({message: 'User already registered ddd'})
    }else {
        Users.create(payload).then(createdRecord => {
            console.log(payload)
            return res.status(200).send({
                status: 200,
                msg: "ok",
                data: createdRecord,
            });
        }).catch(e => {
            res.status(400).send({
                status: 400, 
                msg: "error",
                data: e,
            });
        });
    }
    
});

};



login = (req, res) => {
    const payload = req.body;
User.findOne({ email: payload.email }, (err, User) => {
    if(User){
        if(payload.password ===  User.password){
            res.send({message: 'login secessfully',user:User})
        }else {
            res.send({message: 'password not match'})
        }
        
    }else {
        res.send({message: 'User not registered'})
    }
    
});
};



getUsers = (req, res) => {
    User.find().then(records => {
        return res.status(200).send({
            status: 200,
            msg: "ok",
            data: records,
        });
    })
}


module.exports = { addUser,getUsers, login };
 