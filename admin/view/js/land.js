var app=angular.module("myapp",[]);
app.controller('ctrl',function($scope,$http){
  //点击发送函数开始
  $scope.change_u=function(username,password){
      if(username=='请填写账号' || username=='格式错误(格式：由15个以内的英文下划线数组组成)'){
          $scope.red={
              'color':'',
              'font-size':''
          }
          $scope.username='';
      }
  }
    $scope.change_p=function(username,password){
      if($scope.password=='请填写密码' || $scope.password=='格式错误(格式：由15个以内的英文下划线数组组成)'){
          $scope.password='';
          $scope.red_p={
              'color':'',
          }
      }
  }
  $scope.send=function(username,password){
      $scope.username=username;
      $scope.password=password;
    //   console.log(username,password)
      var reg_user=/^\w{4,15}$/;//账号正则 四到五个字符
      if($scope.username){//检测输入账号
        if($scope.password){//检测输入密码
            if(reg_user.test($scope.username)){//检测账号格式
                if(reg_user.test($scope.password)){//检测密码格式
                        // -------------------执行ajax
                                $http({//http
                                    "url":"http://localhost:2017",
                                    "method":"GET",
                                    "params":{'use':username,'pwd':password},
                                    "responseType":"json",
                                }).success(function(data){
                                    console.log(data)
                                    if(data){
                                        console.log('登录成功');
                                        $scope.ts="请稍等...";
                                        window.location.href="../view/center.html"
                                    }else{
                                        $scope.ts="用户名或者密码错误";
                                        console.log('登录失败')
                                    }
                                }).error(function(){
                                    console.log("提交数据失败")
                                });//http
                        // ---------------------------
                }else{//检测密码格式
                     $scope.red_p={ 'color':'red','font-size':'12px'}
                     $scope.password="格式错误(格式：由15个以内的英文下划线数组组成)"
                }//检测密码格式
            }else{//检测账号格式
                $scope.red={ 'color':'red','font-size':'12px'}
                $scope.username="格式错误(格式：由15个以内的英文下划线数组组成)"
            }//检测账号格式
        }else{//检测输入密码
            $scope.red_p={ 'color':'red','font-size':'12px'}
            $scope.password="请填写密码"
        }//检测输入密码
      }else{//检测输入账号
          $scope.red={ 'color':'red','font-size':'12px'}
          $scope.username="请填写账号"
      }//检测输入账号

  }//点击发送函数结束

});//controller控制器
 









