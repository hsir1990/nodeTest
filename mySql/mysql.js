var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type':'text/plain'});
	response.end('Hello World');
}).listen(8100,function(){
	console.log('good')
})
/*
var mysql = require('mysql');  //调用MaSql模块

//创建一个connection
var connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'root',
	port : '3306'
});
//创建一个connection
connection.connect(function(err){
	if(err){
		console.log('[query] - ' + err);
	return;
	}
		console.log('[connection connect] succeed!1');
});
//执行SQL语句
connection.query('SELECT 1 + 1 AS solution', function(err, rows, field){
	if(err){
		console.log('[query] - :' + err);
	return;
	}
	console.log('The solution is: ', rows[0].solution);
});
//关闭connection
connection.end(function(err){
	if(err){
		return;
	}
		console.log('[connection end] succeed!');
})


var mysql = require('mysql');

var connection = mysql.createConnection({
	host : '127.0.0.1',
	port : '3306',
	user : 'root',
	password : 'root',
});
connection.connect(function(err){
	if(err){
		console.log('[query] - :' +err);
		return;
	}
		console.log('[connection connect] succeed!');
});


connection.query('SELECT + 1 AS solution', function(err, rows, fields){
	if(err){
		console.log('[query] - :' + err);
		return;
	}
	console.log('The solution is: ', rows[0].solution);
});


connection.end(function(err){
	if(err){
		return;
	}
		console.log('[connection end] cucceed!');
});

//插入数据
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '127.0.0.1',
	port : '3306',
	user : 'root',
	password : 'root',
	database : 'han'
});
connection.connect(function(err){
	if(err){
		console.log('connect : '+err);
		return;
	}
	console.log('connect succeed!');
});
var userAddSql = 'INSERT INTO song(id, user, password, email) VALUES(0,?,?,?)';
var userAddSql_Params = ['张彭阳', '30', '123', '7715'];
connection.query(userAddSql, userAddSql_Params, function(err, result){
	if(err){
		console.log('[INSERT ERROR] - ', err.message);
		return;
	}
	console.log('----------------------insert----------------------------');
	console.log('INSERT ID:', result);
	console.log('----------------------------------------------------------------')
});
connection.end();
//数据全部修改
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '127.0.0.1',
	port : '3306',
	user : 'root',
	password : 'root',
	database : 'han'
});
connection.connect(function(err){
	if(err){
		console.log('connect : '+err);
		return;
	}
	console.log('connect succeed!');
});
// var userAddSql = 'INSERT INTO song(id, user, password, email) VALUES(0,?,?,?)';
// var userAddSql_Params = ['张彭阳', '30', '123', '7715'];
var userModSql = 'UPDATE song SET user = ?, password = ?  WHERE id';
var userModSql_Params = ['yan', '123', 1];
connection.query(userModSql, userModSql_Params, function(err, result){
	if(err){
		console.log('[INSERT ERROR] - ', err.message);
		return;
	}
	console.log('----------------------insert----------------------------');
	console.log('update affectedRows:', result.affectedRows);
	console.log('----------------------------------------------------------------')
});
connection.end();
//查看数据
var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '127.0.0.1',
	port : '3306',
	user : 'root',
	password : 'root',
	database : 'han'
});
connection.connect(function(err){
	if(err){
		console.log('connect : '+err);
		return;
	}
	console.log('connect succeed!');
});
// var userAddSql = 'INSERT INTO song(id, user, password, email) VALUES(0,?,?,?)';
// var userAddSql_Params = ['张彭阳', '30', '123', '7715'];
// var userModSql = 'UPDATE song SET user = ?, password = ?  WHERE id';
// var userModSql_Params = ['yan', '123', 1];
var userGetSql = 'SELECT * FROM song';
connection.query(userGetSql, function(err, result){
	if(err){
		console.log('[INSERT ERROR] - ', err.message);
		return;
	}
	console.log('----------------------insert----------------------------');
	console.log('select affectedRows:', result);
	console.log('----------------------------------------------------------------')
});
connection.end();

var mysql = require('mysql');
var connection = mysql.createConnection({
	host : '127.0.0.1',
	port : '3306',
	user : 'root',
	password : 'root',
	database : 'han'
});
connection.connect(function(err){
	if(err){
		console.log('connect : '+err);
		return;
	}
	console.log('connect succeed!');
});
// var userAddSql = 'INSERT INTO song(id, user, password, email) VALUES(0,?,?,?)';
// var userAddSql_Params = ['张彭阳', '30', '123', '7715'];
// var userModSql = 'UPDATE song SET user = ?, password = ?  WHERE id';
// var userModSql_Params = ['yan', '123', 1];
var userGetSql = 'SELECT * FROM song';
connection.query(userGetSql, function(err, result){
	if(err){
		console.log('[INSERT ERROR] - ', err.message);
		return;
	}
	console.log('----------------------insert----------------------------');
	console.log('select affectedRows:', result);
	console.log('----------------------------------------------------------------')
});
connection.end();
//创建连接池 
var mysql = require('mysql');

//创建连接池
var pool = mysql.createPool({
	host : '127.0.0.1',
	user : 'root',
	password : 'root'
});

//监听connection时间
pool.on('connection', function(connection){
	connection.query('SET SESSION auto_increment_increment = 1');
})

//直接使用
pool.query('ESLECT 1 + 1 AS solution', function(err, rows, fields){
	if(err) throw err;

	console.log('The solution is: ', rows[0].solution);
});
//共享
pool.getConnection(function(err, connection){

});

var mysql = require('mysql');

var pool = mysql.createPool({
	host : '127.0.0.1',
	user : 'root',
	port : '3306',
	password : 'root',
	database : 'han'
});
pool.getConnection(function(err, connection){
	connection.query('SELECT * FROM song', function(err, result){
		console.log('---------------1111111-----------------');
		console.log(result);
		connection.release();
	});
	console.log('--------------------------------------------------------')
	connection.query('SELECT * FROM song', function(err, result){
		console.log('---------------22222222-----------------');
		console.log(result);
		connection.release();
	})
})
var mysql = require('mysql');
var db_config = {
	host : '127.0.0.1',
	user : 'root',
	password : 'root',
	port : '3306',
	database : 'han'
};
var connection;

function handleDisconnect(){
	connection = mysql.createConnection(db_config);
	connection.connect(function(err){
		if(err) {
			console.log('进行断线重连：' + new Date());
			setTimeout(handleDisconnect, 2000); //2秒重连一次
			return;
		}
		console.log('连接成功');
	});

connection.on('error',function(err){
	console.log('db error', err);
	if(err.code === 'PROTOCOL_CONNECTION_LOST'){
		handleDisconnect();
	} else {
		throw err;
	}
});
}
handleDisconnect();


// var connection;
// function handleDisconnect() {
//   connection = mysql.createConnection(db_config);                                               
//   connection.connect(function(err) {              
//     if(err) {                                     
//       console.log("进行断线重连：" + new Date());
//       setTimeout(handleDisconnect, 2000);   //2秒重连一次
//       return;
//     }         
//      console.log("连接成功");  
//   });                                                                           
//   connection.on('error', function(err) {
//     console.log('db error', err);
//     if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
//       handleDisconnect();                         
//     } else {                                      
//       throw err;                                 
//     }
//   });
// }
// handleDisconnect();*/
//防止注入
var mysql = require('mysql');

var pool = mysql.createPool({
	host : '127.0.0.1',
	user : 'root',
	port : '3306',
	password : 'root',
	database : 'han'
});
pool.getConnection(function(err,connection){
    
    connection.query('SELECT * FROM song WHERE id = ' + '5 OR ID = 3',function(err,result){
        //console.log(err);
        console.log(result);
        connection.release();
    });

    connection.query('SELECT * FROM song WHERE id = ' + pool.escape('5 OR ID = 3') ,function(err,result){
        //console.log(err);
        console.log(result);
        connection.release();
    });
})
