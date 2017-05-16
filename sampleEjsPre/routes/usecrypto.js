var express = require('express');

var router = express.Router();

var crypto = require('crypto')

router.get('/', function(req, res){

	res.render('usecrypto', {title : '加密字符串示例'});
})
//对post进行加密
router.post('/', function(req, res){
	var userName = req.body.txtUserName;
	var userPwd = req.body.txtUserPwd;
	//生成口令的散列值
	var md5 = crypto.createHash('md5'); //crypto 模块功能是加密并生成各种散列
	var en_upwd = md5.update(userPwd).digest('hex');//其参数是编码方式，可以有 'hex'、'binary'或者'base64'

	console.log('加密后的密码：' + en_upwd);

	res.render('usecrypto', { title : '加密字符串示例！'})

})



// router.post('/',function(req, res){
//   var 
//   userName = req.body.txtUserName,
//   userPwd = req.body.txtUserPwd;

//   //生成口令的散列值
//   var md5 = crypto.createHash('md5');   //crypto模块功能是加密并生成各种散列
//   var en_upwd = md5.update(userPwd).digest('hex');

//   console.log('加密后的密码:'+en_upwd);
  
//   res.render('usecrypto', { title: '加密字符串示例' });
// });

module.exports = router;