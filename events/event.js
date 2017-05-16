var http = require('http');
//alert(0);
/*创建服务器*/
/*
http.createServer(function(request, response){
	//发送HTTP头部
	//HTTP 状态： 200 : OK
	//内容： text/plain
	response.writeHead(200, {'Content-Type' : 'text/plain'})

	//发送响应数据 “Hello World”
	response.end('Hello World/n')
}).listen(8100);
*/
var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type' : 'text/plain'});
	response.end('Hello World')
});
server.listen(8100, function(){
	console.log('good');
});
// /*调用events模块，获取events.EventEmitter对象*/
// var EventEmitter = require('events').EventEmitter;
// //创建EventEmitter对象
// var ee = new EventEmitter();

// /*
// EventEmitter.on(event, listener)为事件注册一个监听
// 参数1：event   字符串，事件名
// 参数2：回掉函数
// */
// ee.on('some_events',function(foo, bar){
// 	console.log('第一个监听事件，参数foo='+foo+',bar'+bar);
// });

// console.log('第一轮');
// ee.emit('some_events', 'Wilson', 'Zhong');

// console.log('第二轮');
// ee.emit('some_events', 'Wilson', 'Z')
var events = require('events');
var ee = new events.EventEmitter();

ee.on('oneEvent', function(foo, bar){
	console.log('监听事件foo='+foo+',bar='+bar)
});

ee.emit('oneEvent', '一', '发射');
var ee1 = ee.emit('oneEvent', '二', '发射');
var ee2 = ee.emit('twoEvent', '三', '发射');
console.log(ee1);
console.log(ee2+'/n');

ee.once('once',function(foo, bar){
	console.log(foo+'==='+bar);
});
 var ee3 = ee.emit('once','han','yin');
 console.log(ee3);
 var ee5 = ee.emit('once', 'han', 'zhang');
  console.log(ee5);

var  fun1 = function(foo, bar){
	console.log('1foo='+foo+',bar='+bar)
}
var  fun2 = function(foo, bar){
	console.log('2foo='+foo+',bar='+bar)
}
ee.on('remove', fun1);
ee.on('remove', fun2);
// //去除事件 函数名字要统一去除，触发事件要写在去除后面才生效
// ee.removeListener('remove', fun1);

//ee.removeAllListeners('remove');//也必须写在触发器前面才能生效
var remove = ee.emit('remove', 'han', 'zhang');
/*
  EventEmitter.listeners(event)  //返回指定事件的监听数组
  参数1：event 	字符串，事件名
*/
var listenersEventsArr = ee.listeners('remove');

console.log(listenersEventsArr.length);

for(var i = listenersEventsArr.length - 1; i >= 0; i--){
	console.log(listenersEventsArr[i]);
}


ee.setMaxListeners(6);
for(i=0; i<10; i++){
	ee.on('moreEvent', function(){
		console.log('第'+(i+1)+'个监听');
	})
}//提示(node:16480) Warning: Possible EventEmitter memory leak detected. 7 moreEvent li
//steners added. Use emitter.setMaxListeners() to increase limit
