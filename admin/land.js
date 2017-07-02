var http=require("http");
var mysql=require("mysql");
var url=require("url");
//数据配置
var prot=2017;//监听端口
var origin=" http://127.0.0.1";//远程安全端口

var dataT="vip";//数据表
var durl='localhost';//数据库地址
var duse='root';//数据库用户名
var dpwd='xm124';//数据库密码
var dport=3306;//数据库端口
var ddatabase='le';//选择数据库

http.createServer((req,res)=>{
  if(req.url=="/favicon.ico"){
    return;
  }
   //创建数据库连接对象
  var connection=mysql.createConnection({
      host: durl,      
      user: duse,               
      password: dpwd,       
      database: ddatabase,  
      port: dport,                   
  });

 res.writeHead(200,{"Content-Type":"text/html;charset=UTF8;","Access-Control-Allow-Origin":origin});
// 判断是否post提交的数据 post调用注册函数  反之
if(req.method=='post' || req.method.toLowerCase()=='post'){
    var alldata="";
    req.addListener("data",(chunk)=>{
      alldata+=chunk;//固定公式
    });
    req.addListener("end",()=>{
      alldata.toString();
      var data=JSON.parse(alldata);//转成对象
      var use=data.use;//用户名
      var pwd=data.pwd;//密码
      var tel=data.tel;//电话
      zhuce(use,pwd,tel,connection,res);
      //res.write(alldata);//返回一个对象包含 用户名 密码 ....
      // res.end(alldata);
      return;
  });//数据接收完毕
}
if(req.method=='get' || req.method.toLowerCase()=='get'){
  var params=url.parse(req.url,true).query;
  var use=params.use;
  var pwd=params.pwd;
  // console.log(use)
  querySql(use,pwd,connection,res);
  return;
}
//  res.end();
}).listen(prot,"localhost",function(){
  console.log('\n ['+prot+"]端口开始监听....\n\n by:老王");
});//服务器监听over


//  注册函数封装
function zhuce(username,password,tel,connection,res){//注册函数
  connectdb(res,connection);//调用连接数据库
//操作数据库
// 执行判断是否有这个有账号存在
   var querysql='select * from vip where username=?';
   var params=[username];
   connection.query(querysql,params,function(err,rs){//判断账号是否存在
      if(err){
        console.log('查询数据错误：'+err);
        return;
      }
      if(rs.length != 0){
        console.log('  -->账号已被注册\n');
        res.write('false')
        res.end()
        closedb(connection);
        return;
      }else{
        console.log('  =>'+username+'可以注册\n');
        
        var addSql='insert into vip(username,password,tel) value( ? , ? , ?)';
        var params=[username,password,tel];
         connection.query(addSql,params,function(err,rs){//插入数据操作
            if(err){
              console.log("  插入数据失败："+err);
              return;
            }
            console.log("  =>注册信息入库成功：【"+username+"】账号注册成功\n");
            closedb(connection);
            res.end('true')
            return;
        });//插入数据操作over
      }//插入

// 执行判断是否有这个有账号存在over

})//判断账号是否存在
// closedb(connection);草草草 
return;
}//注册函数

//无论什么只要操作数据库就得调用这段了解数据库代码
function connectdb(connection){
  //创建数据库连接对象
  var connection=mysql.createConnection({
      host: durl,      
      user: duse,               
      password: dpwd,       
      database: ddatabase,  
      port: dport,                   
  });
  connection.connect((err)=>{//连接数据库
    if(err){
      console.log("连接数据库失败"+err);
      return;
    }
    console.log('-----------------------------------------------------');
    console.log("  =>连接数据库ok\n");
  })//连接数据库over
  // return connection;
}

function closedb(connection){
//关闭数据库
  connection.end((err)=>{
    if(err){
      console.log("  关闭数据库失败"+err.toString());
      return;
    }
    console.log("  =>数据库关闭ok");
    console.log('-----------------------------------------------------\n ');
  });
}
//数据库函数


//登录函数
function querySql(username,password,connection,res){
  connectdb(connection);
// --查询
  var querySql='select * from vip where username=? and  password=?';
  var params=[username,password];
  connection.query(querySql,params,function(err,rs){
    if(err){
      console.log("  -->查询语句出错"+err);
      return;
    }
    console.log('  =>查询数据ing...');

    if(rs==[] || rs=='' || rs==undefined || rs==null){
      console.log('  =>用户名或者密码错误：'+username+'登录失败\n');
      res.end('false');
      closedb(connection);
      return;
    }
    var queryN=rs[0].username;//查询得到的账号
    console.log('  =>查询数据完成.数据成立\n 用户：【'+queryN+'】登录成功\n');
    res.end('true');
    closedb(connection);
  })
}//登录函数over




