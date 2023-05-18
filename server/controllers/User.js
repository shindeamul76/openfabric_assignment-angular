const User = require('../model/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

exports.Register = async (req, res) => {

    try {

        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC
                ).toString(),
        });

       

     

        const savedUser = await newUser.save();

        res.status(200).json({
            success: true,
            savedUser,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
}

exports.Login = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });

        if (!user) {
           return res.status(400).json({
                success: false,
                message:"Wrong credentials!"
            })
        }

        const accessToken = jwt.sign({
            id:user._id, 
            isAdmin:user.isAdmin,

        },
        process.env.JWT_SEC,
        {expiresIn:'3d'},
        )

        const hashPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );

        let originalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

        originalPassword = req.body.password;

        const {password, ...others} = user._doc;


        if (!password) {
          return  res.status(400).json({
                success: false,
                message:"Wrong credentials!"
            })
        }

        res.status(200).json({
            success: true,
            ...others,
            accessToken,
        })
        
    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        })
        
    }
}
