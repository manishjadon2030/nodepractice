const express = require('express')
const controller = require('../controllers/userController')
const router = express.Router()



router.get('/',(req,res)=>{
    controller.Home(req,res)
})
router.get('/about',(req,res)=>{
    controller.About(req,res)
})
router.get('/contact',(req,res)=>{
    controller.Contact(req,res)
})
router.get('/login',(req,res)=>{
    controller.login(req,res)
})
router.get('/signup',(req,res)=>{
    controller.signup(req,res)
})
router.get('*',(req,res)=>{
    controller.notfound(req,res)
})




module.exports = router