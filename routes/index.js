var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Validation Form', success: false, errors: req.session.errors });
  req.session.errors= null;
});

router.post('/submit', function(req, res, next) {
  //Check Validity.
  req.check('email', 'invalid email address').isEmail();
  req.check('password', 'invalid password').isLength({min:4}).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if(errors){
    req.session.errors = errors;
    req.session.success = false;
  }else{
    req.session.success = true;
  }
  res.redirect('/');
});

module.exports = router;
