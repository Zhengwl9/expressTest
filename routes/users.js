var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send({users:['ggg']});
});

module.exports = router;
