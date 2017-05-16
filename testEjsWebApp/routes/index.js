var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//mock数据
router.get('/index', function(req, res, next) {
	res.render('index', {
		'title': '<h1>Expressh1</h1>',
		'users': [{username: 'hansong'},
				  {username: 'yinwei'},
				  {username: 'zhangpengyang'}]
	});
});

module.exports = router;
