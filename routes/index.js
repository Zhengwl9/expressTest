var express = require('express');
var router = express.Router();
router.get('/list', function (req, res) {
  res.send({
    code:200,
    mes:'请求成功！',
    data:["吃饭","上班"]
  })
})

module.exports = router;
