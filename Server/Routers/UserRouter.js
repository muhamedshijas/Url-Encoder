import express from 'express'
import { checkUserLoggedIn, userLogin, userLogout, userOtpVerify, userSignup } from '../Controllers/userController.js'
const router=express.Router()


router.post('/signup',userSignup)
router.post('/verify',userOtpVerify)
router.get("/check",checkUserLoggedIn)
router.get('/logout',userLogout)
router.post('/login',userLogin)



export default router