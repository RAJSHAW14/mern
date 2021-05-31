import User from "../models/User";


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