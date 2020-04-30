var express = require('express');
var router = express.Router();
router.post('/signIn', function (req, res) {
    console.log(req.body);
    res.send({
        code:200,
        mes:'请求成功！',
        data:{
            username:req.body.username,
            auth:req.body.auth,
        }
    })
})

module.exports = router;
