const express = require('express')
const router = express.Router();

const { registerUser,
    verifyOtp,
    googleAuth,
    loginUser,      
    resendOtp,
    forgotPassword,  
    resetPassword,
    forgotPasswordOtp


} = require("../controllers/userControllers")

const {registerValidation,otpValidation,userLoginValidation} = require("../validations/userValidation"); 

router.post('/register',registerValidation,registerUser)
router.post('/register-otp',otpValidation,verifyOtp)
router.post('/resend-otp',resendOtp)
router.post('/google-auth', googleAuth)
router.post('/login',userLoginValidation,loginUser)
router.post ('/forgot-password',forgotPassword)
router.post('/forgot-otp', forgotPasswordOtp)
router.post('/reset-password', resetPassword)



module.exports = router





