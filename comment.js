var http = require('http');
var querystring = require('querystring')
var postData = querystring.stringify({
	'content': '只是测试看一下',
	'mid': 8837
})

var options = {
	hostname : 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=dfbeb61d-fee5-42e5-b727-c43980fbe3e5; imooc_isnew_ct=1476429704; loginstate=1; apsid=JhMmNmOWFiMzU3MGM2OGM2OTA0MWYzMWZiMGU5MTIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjk5NTcwMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxNTczMzIwNzcyOEAxNjMuY29tAAAAAAAAAAAAAAAAADM0MDMwZjBiOGMwNTU5NjEzMDYxZGQ4MWMyMzU3OGM2j4UqWI%2BFKlg%3DOG; last_login_username=15733207728%40163.com; PHPSESSID=9rc46336rh7lo8g1g7qq4d5sp5; jwplayer.qualityLabel=é«æ¸; jwplayer.volume=20; imooc_isnew=2; cvde=582c11b10d410-12; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1479175851,1479175851,1479223496,1479283124; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1479286348',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.87 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req = http.request(options,function(res){
	console.log('Status:' + res.statusCode);
	console.log('headers:' + JSON.stringify(res.headers))
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk)
	})
	res.on('end',function(){
		console.log('评论完毕')
	})
})

req.on('error',function(e){
	console.log('Error:' + e.massage)
})
req.write(postData)
req.end()







