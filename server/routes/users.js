var express = require('express');
var router = express.Router();
var passport = require('passport');
var userController = require('./../controller/user.controller');

/* GET users listing. */
router.post('/signup',userController.addUser);
router.post('/login',userController.login);
router.post('/facebooklogin',userController.checkAvailability)
// router.post('/auth/facebook',userController.facebook);
// router.post('/auth/facebook', userController.passport.authenticate('facebook', {scope: ['email']}));
router.get('/get-single-user/:userId',userController.getSingleUser);
router.get('/get-all-user',userController.getAllUser);
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.delete('/delet-user/:userId',userController.deleteUserById)

module.exports = router;
