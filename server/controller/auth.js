import User from "../models/User";
import jwt from 'jsonwebtoken';



  export const register = async (req, res) => {
    console.log(req.body);
    const {name, email, password} = req.body;
    if(!name) return res.status(400).send('Name is Required')
    if(!password || password.lenght < 6) return res.status(400).send('Password is Required and 6 char Long')
    if(!email) return res.status(400).send('Email is Required')
    let userExist = await User.findOne ({email}).exec()
    if (userExist) return res.status(400).send('Email is taken')

    const user = new User(req.body)
    try {
      await user.save();
      console.log('User Created', user)
      return res.json ({ok:true});
    } catch (err) {
      console.log("Create User Failed", err);
      return res.status(400).send("Error Please Try Again");
    }
  };

 
  export const login = async (req,res) => {
    console.log(req,res);
    const{email, password} =req.body;
    if(!email) return res.status(400).send('Email is Required')
    if(!password) return res.status(400).send('Password is Required')

    try{
      let user = await User.findOne({email}).exec();
      console.log("User is available",user);
      if(!user) return res.status(400).send('User with this mail not found');

      user.comparePassword(password,(err,match) => {
        //console.log("Compare Password in Login err",err);
        if(!match || err) return res.status(400).send("Wrong Password");
        //console.log("Generate a Token Then Send to Client");
        let token = jwt.sign({_id : user.id}, process.env.JWS_SECRET,{
          expiresIn : "7d",
        });

        res.json({token , user : {
          _id : user.id,
          email : user.email,
          name : user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        }});
        console.log(token)
      });    
      
    } catch (err) {
      console.log("Login error",err);
      res.status(400).status("Signin Failed")
    }
  }