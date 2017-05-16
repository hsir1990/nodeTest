var mysql = require('mysql');
var DB_NAME = 'nodesample'
var pool = mysql.createPool({
  host : '127.0.0.1',
  port : '3306',
  user : 'root',
  password : 'root'
});

pool.on('connection', function(connect){
  connection.query('SET SESSION auto_increment_increment = 1');
});

function User(user){
  this.username = user.username;
  this.userpass = user.userpass;
}
//暴露对象引用
module.exports = User;
//数据池连接数据共享多个连接
pool.getConnection(function(err, connection){
    var useDbSql = 'USE' + DB_NAME;
    //使用库
    connection.query(useDbSql, function(){
      if(err){
        console.log('USE Error' + err.message);
        return;
      }
      console.log('USE succeed!');
    });
    //保存数据
    User.prototype.save = function save(callback){
        var user = {
            username : this.username,
            userpass : this.userpass
        };
        var insertUser_Sql = 'INSERT INTO userinfo(id, username, userpass) VALUES(0, ?, ?)';
        connection.query(insertUser_Sql, [user.username, user.userpass], function(err, result){
            if(err){
                console.log('insertUser_Sql Error！：' + err.message);
                return;
            }
            connection.release();
            console.log('invoked[save]');
            callback(err, result);
        });
    }
    //根据用户名字得到用户的数量
    User.getUserNumByName = function getUserNumByName(username, callback){
        var getUserNumByName_Sql = 'SELECT COUNT(1) AS num FROM userinfo WHERE username = ?';
        connection.query(getUserNumByName_Sql, [username], function(err, result){
            if(err){
              console.log('getUserNUmByName Error！：' + err.message);
              return; 
            }
            connection.release();
            console.log('invoked[getUserNumByName]');
            callback(err, result);
        })
    };
    //根据用户名得到用户信息
    User.getUserByUserName = function getUserByUserName(username, callback){
        if(err){
            console.log('getUserByUserName Error！：' + err.message);
            return;
        }
        connection.release();
        console.log('invoked[getUserByUserName]');
        callback(err, result);
    }


})