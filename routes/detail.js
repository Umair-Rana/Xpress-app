var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('detail', {user_name: 'Dawood'});
});

module.exports = router;