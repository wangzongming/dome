
var main=document.getElementById("main");
var str="";

ajax("get","http://127.0.0.1:8096/chuanke/js/head.json?t="+Math.random(),true,function(data){
    var datas=JSON.parse(data);
    str+='<div class="head_nav">';//头部第一个导航条
        str+='<div class="nav_t">';//nav
            str+='<div class="t_logo">';//头部导航条logo
                str+='<img src="'+datas.t_nav.t_logo+'" alt="logo"/>'
            str+='</div>';//头部导航条logo over
            str+='<div class="down">';//下载传课和购物车
                str+='<ul>';
                    str+='<li>';
                        str+='<span class="iconfont">'+datas.t_nav.t_down[0].icon+'</span>';
                        str+=datas.t_nav.t_down[0].text;
                        str+='<div class="nav_t_down_menu">';//第一个导航条的下拉菜单
                            str+='<div class="down_l">';
                                str+='<img src=" '+datas.t_nav.t_down[2].down_menu[0].image +' " alt=""/>';
                                str+='<p>'+datas.t_nav.t_down[2].down_menu[0].desc+'</p>'
                            str+='</div>';
                            str+='<div class="down_r">';
                                str+='<h3>';
                                    str+=datas.t_nav.t_down[2].down_menu[1].title;
                                str+='</h3>';
                                str+='<p class="down_r">';
                                    str+=datas.t_nav.t_down[2].down_menu[1].list1;
                                str+='</p>';    
                                 str+='<p class="down_r blue">';
                                    str+=datas.t_nav.t_down[2].down_menu[1].list2;
                                str+='</p>';
                            str+='</div>';
                        str+='</div>';//第一个导航条的下拉菜单over
                    str+='</li>';
                    str+='<li>'
                         str+='<span class="iconfont">'+datas.t_nav.t_down[1].icon+'</span>';
                         str+=datas.t_nav.t_down[1].text;
                    str+='</li>';
                str+='</ul>';
            str+='</div>';//下载传课和购物车over
            str+='<div class="search">';//搜索
                str+='<span class="search_btn">';
                    str+='<span class="nav_school iconfont1">';
                        str+=datas.t_nav.t_search. class[0];
                    str+='</span>';
                    str+='<span class="nav_school hide  iconfont1">';
                        str+=datas.t_nav.t_search.class[1];
                    str+='</span>';
                str+='</span>';
                str+='<input type="text" placeholder="请输入关键词、学校名等..."/>';
                str+='<span class="search_icon iconfont">';
                 //这是一个背景图
                str+='</span>';
            str+='</div>';//搜索over
            str+='<ul class="land">';//登录
                str+='<li class="land_btn">';
                    str+=datas.t_nav.t_land[0];
                str+='</li>';
                str+='<li class="zhuche_btn">';
                    str+=datas.t_nav.t_land[1];
                str+='</li>';
            str+='</ul>';//登录over
        str+='</div>'//nav
    str+='</div>';//头部第一个导航条 over
    str+='<div class="banner">';//轮播
        str+='<ul>';
            for(var i=0;i<datas.t_banner.length;i++){
                str+='<li class="banner_li">';
                    str+='<img src=" '+datas.t_banner[i]+' " alt=""/>'
                str+='</li>';
            }
        str+='</ul>';
        str+='<ul class="banner_list">';
            for(var i=0;i<datas.t_banner.length;i++){
                 str+='<li>';
                   //这里是轮播图的    小圆点
                str+='</li>';
            }
        str+='</ul>'
    str+='</div>';//轮播over
    str+='<div class="nav2">';//头部第二个导航条
        str+='<div class="nav_content">';
            str+='<ul>';
                for(var i=0;i<datas.t_nav2.length;i++){
                    str+='<li>';
                        str+=datas.t_nav2[i].title;
                        str+='<ul class="nav2_down_menu" id="nav_2_downmenu">';
                            for(var j=0;j<datas.t_nav2[i].class.length;j++){
                                str+='<li class="li">';
                                    str+=datas.t_nav2[i].class[j];
                                str+='</li>';
                            }
                        str+='</ul>';
                    str+='</li>';
                };
            str+='</ul>';
        str+='</div>';
    str+='</div>';//头部第二个导航条over

//选项卡数据开始
    ajax("get","http://127.0.0.1:8096/chuanke/js/xuanxiangka.json?"+Math.random(),true,function(data){
        var xxk=JSON.parse(data);
        str+='<div class="xxk">';//轮播下面的选项卡开始

            str+='<div class="xxk_l">';//选项卡部分的左边
                str+='<div class="xxk_l_l">';
                    str+='<ul>';
                        for(var x=0;x<xxk.length;x++){
                            str+='<li class="xxk_l_l_li">';//
                                str+=xxk[x].model;

                                    // str+='<div id="xxk_l_r">';
                                        // str+=x;
                                    // str+='<ul>';
                        //             for(var i=0;i<xxk.length;i++){//左边 分类 
                        //                     str+='<li class="xxk_l_r_li">';
                        //                     str+='<div class="tuijian">';
                        //                         str+='<h6>';
                        //                             str+=xxk[i].tuijian.title;
                        //                         str+='</h6>';
                        //                         str+='<span class="tuijian_desc">';
                        //                             str+=xxk[i].tuijian.desc;
                        //                         str+='</span>';
                        //                     str+='</div>';
                        //                     for(var j=0;j<xxk[i].cModel.length;j++){//选项卡内容
                        //                             str+='<p class="xxk_l_r_t">';//标题
                        //                                 str+=xxk[i].cModel[j].title;
                        //                                 str+='</p>';//标题
                        //                                     str+='<div class="xxk_l_r_c">';
                        //                                         for(var k=0;k<xxk[i].cModel[j].child.length;k++){ //name
                        //                                             str+='<span class="xxk_l_r_c_p">'
                        //                                                 str+=xxk[i].cModel[j].child[k].name;
                        //                                             str+='</span>'//name
                        //                                         };//name
                        //                                     str+='</div>';
                        //                     }//选项卡内容
                        //             str+='</li>';//左边 分类 
                        //             };
                        //         str+='</ul>';
                                // str+='</div>';
                            str+='</li>';
                        };
                    str+='</ul>';
                str+='</div>';

                
                str+='<div class="xxk_l_r">';
                    str+='<ul>';
                         for(var i=0;i<xxk.length;i++){//左边 分类 
                                str+='<li class="xxk_l_r_li">';
                                str+='<div class="tuijian">';
                                    str+='<h6>';
                                        str+=xxk[i].tuijian.title;
                                    str+='</h6>';
                                    str+='<span class="tuijian_desc">';
                                         str+=xxk[i].tuijian.desc;
                                    str+='</span>';
                                str+='</div>';

                                for(var j=0;j<xxk[i].cModel.length;j++){//选项卡内容
                                        str+='<p class="xxk_l_r_t">';//标题
                                            str+=xxk[i].cModel[j].title;
                                            str+='</p>';//标题
                                                str+='<div class="xxk_l_r_c">';
                                                    for(var k=0;k<xxk[i].cModel[j].child.length;k++){ //name
                                                        str+='<span class="xxk_l_r_c_p">'
                                                            str+=xxk[i].cModel[j].child[k].name;
                                                        str+='</span>'//name
                                                    };//name
                                                str+='</div>';
                                }//选项卡内容

                                str+='</li>';//左边 分类 
                        };
                    str+='</ul>';
                str+='</div>';
            str+='</div>';//选项卡部分的左边over
              


            str+='<div class="xxk_r">';//选项卡右边部分
                str+='<ul>';//选项卡右边部分
                        str+='<li class="xxk_r_li_one">';
                            str+='<img src=" '+datas.t_shouye_l[0].one+' " alt=""/>'
                        str+='</li>';
                        str+='<li class="xxk_r_li_two">'; //选项卡右边第二块图片
                            str+='<ul>';
                                str+='<li>';
                                    str+='<img src=" '+datas.t_shouye_l[1].two+' " alt=""/>';
                                str+='</li>';
                                str+='<li>';
                                    for(var j=0;j<datas.t_shouye_l[2].three.length;j++){  //选项卡右边第二块图片的两种小图
                                          str+='<img src=" '+datas.t_shouye_l[2].three[j]+' " alt=""/>';
                                    };
                                str+='</li>';
                            str+='</ul>';
                        str+='</li>'; //选项卡右边第二块图片over
                        str+='<li class="xxk_faxian">';
                            str+='<h4 class="xxk_faxian_t">';
                                str+=datas.t_shouye_r.title;
                            str+='</h4>';
                            str+='<ul>';
                                for(var j=0;j<datas.t_shouye_r.list.length;j++){
                                    str+='<li class="faxian_li">';
                                        str+='<img src=" '+datas.t_shouye_r.list[j].image+' " alt=""/>';
                                        str+='<div class="faxian_li_r">';
                                            str+='<h4>';
                                                str+=datas.t_shouye_r.list[j].title;
                                            str+='</h4>'
                                            str+=datas.t_shouye_r.list[j].desc;
                                        str+='</div>';
                                    str+='</li>';
                                }
                            str+='</ul>';
                        str+='</li>';
                str+='</ul>';//选项卡右边部分容器over
            str+='</div>';//选项卡部分的右边over
        str+='</div>';//轮播下面的选项卡over

//页面主要内容开始
    ajax("get","http://127.0.0.1:8096/chuanke/js/z0.json?t"+Math.random(),true,function(data){
        var like=JSON.parse(data);
        // console.log(like)
        str+='<div class="content">';//主体start

            str+='<div class="content_l">';//内容左边

                for(var i=0;i<like.length;i++){ //猜你喜欢和精品课程
                    str+='<div class="content_l_list">';
                        str+='<h4>';
                            str+=like[i].title;
                        str+='<span class="iconfont1 more">';//更多
                                str+=like[i].more;
                        str+='</span>';//更多over
                        str+='</h4>';

                        str+='<ul class="like_ul">';
                            for(var j=0;j<like[i].child.length;j++){
                                str+='<li class="like_li">';
                                    str+='<div class="like_img">';
                                        str+='<img src=" '+like[i].child[j].img+' " alt=""/>';
                                    str+='</div>';
                                    str+='<p class="like_list_name">';
                                        str+=like[i].child[j].name;
                                    str+='</p>';
                                    str+='<p class="like_list_t">';
                                        str+='<span class="price">';//价格
                                             str+=like[i].child[j].price;
                                        str+='</span>';//价格
                                        str+='<span class="person iconfont">';
                                            str+=like[i].child[j].tb;
                                            str+='<span class="blue">';
                                                str+=like[i].child[j].num;
                                            str+='</span>';
                                              str+=like[i].child[j].ks;
                                        str+='</span>';
                                    str+='</p>';
                                    // str+=like[i].child[j].img;
                                str+='</li>';
                            }
                        str+='</ul>';
                    str+='</div>';
                }; //猜你喜欢和精品课程over

    //免费好课start
        ajax("get","http://127.0.0.1:8096/chuanke/js/z01.json?t"+Math.random(),true,function(data){
            var mf=JSON.parse(data);
            // console.log(mf)
            str+='<div class="mianfei">';
                str+='<h4>';
                    str+=mf.title;
                     str+='<span class="iconfont1 more">';//更多
                                str+=mf.more;
                    str+='</span>';//更多over
                str+='</h4>';
                str+='<ul>';
                    for(var i=0;i<mf.child.length;i++){
                        str+='<li class="mianfei_li">';
                            str+='<div class="mianfei_img">';
                                str+='<img src=" '+mf.child[i].img+' " alt=""/>'
                            str+='</div>';
                            str+='<p class="mianfei_name">';
                                str+=mf.child[i].name;
                            str+='</p>';
                        str+='</li>';
                    }
                str+='</ul>';
            str+='</div>';//免费好课
        //中间四个大内容开始
     ajax("get","http://127.0.0.1:8096/chuanke/js/z1.json?t"+Math.random(),true,function(data){
        var z1=JSON.parse(data);
        // console.log(z1)
        str+='<div class="z1">';//z1 四个块的父元素
            for(var i=0;i<z1.length;i++){
                str+='<ul>';//四个块
                    str+='<p>';//标题栏开始
                        str+='<span class="title">';
                             str+=z1[i].title;//标题
                        str+='</span>';
                        str+='<span class="atitle">';
                            for(var j=0;j<z1[i].atitle.length;j++){
                                str+='<span>';
                                    str+=z1[i].atitle[j];
                                str+='</span>';
                            };
                        str+='</span>';
                        str+='<span class="more iconfont1">';//更多
                            str+=z1[i].more;
                        str+='</span>';//更多
                    str+='</p>';//标题栏over
                    str+='<ul class="z1_li">';//内容
                        for(var j=0;j<z1[i].child.length;j++){
                            str+='<li class="z1_li_c">';//每个小块
                                str+='<span class="z1_img">';//图片
                                    str+='<img src=" '+z1[i].child[j].img+' " alt=""/>';
                                str+='</span>';//图片over
                                str+='<span class="z1_desc">';
                                    str+='<span class="z1_li_t">'
                                        str+=z1[i].child[j].tit;
                                    str+='</span>';
                                    str+='<span class="z1_li_m iconfont">';//中间的一些
                                        for(var k=0;k<z1[i].child[j].con.length;k++){
                                            str+='<span class="z1_tb">';
                                               str+=z1[i].child[j].con[k].tb;
                                            str+='</span>';
                                            str+='<span class="z1_num">';
                                                str+=z1[i].child[j].con[k].num;
                                            str+='</span>';
                                            str+='<span class="z1_ks">';
                                                str+=z1[i].child[j].con[k].ks;
                                            str+='</span>';
                                        }
                                    str+='</span>';//中间的一些
                                    str+='<span class="z1_li_b">';//底部价格
                                        str+=z1[i].child[j].price;  //价格
                                    str+='</span>';//底部价格
                                str+='</span>';
                            str+='</li>';//每个小块over
                        }
                    str+='</ul>'//内容over
                str+='</ul>';//四个块
            };
        str+='</div>';//z1 四个块的父元素over

        str+='</div>';//内容左边over
        //页面右边的数据
    ajax("get","http://127.0.0.1:8096/chuanke/js/zr1.json?t"+Math.random(),true,function(data){
        var zr1=JSON.parse(data);
        str+='<div class="content_r">';//内容右边
            for(var i=0;i<zr1.img.length;i++){
                str+='<div class="c_img">';
                     str+='<img src=" '+zr1.img[i]+' " alt=""/>';
                str+='</div>';
            };
            str+='<div class="zhiboke">';//最近直播课
                str+='<h4 class="title">';//标题
                    str+='<span class="h4">';
                      str+=zr1.title;
                    str+='</span>'
                    str+='<span class="more iconfont">';
                        str+=zr1.more;
                    str+='</sapn>';
                str+='</h4>';//标题over
                str+='<div class="zhiboke_con">';//主要内容
                    for(var i=0;i<zr1.child.length;i++){
                        str+='<ul class="zhiboke_con_ing">';
                            str+='<p class="ing">';//小标题
                                str+='<span class="yuandian">';//小圆点
                                str+='</span>';//小圆点over
                                str+='<span class="tit">';
                                    str+='<span class="sjx">';//小三角
                                    str+='</span>';
                                    str+=zr1.child[i].tit;
                                str+='</span>';
                            str+="</p>";//小标题over
                            for(var j=0;j<zr1.child[i].achild.length;j++){//详细列表
                                str+='<li class="zhiboke_li">';
                                    str+='<span class="time">';
                                        str+=zr1.child[i].achild[j].time;
                                    str+='</span>';
                                    str+='<span class="zhiboke_kc">';
                                        str+=zr1.child[i].achild[j].con;
                                    str+='</span>';
                                str+='</li>';
                            }//详细列表over
                        str+='</ul>';
                    }
                str+='</div>';//主要内容over
            str+='</div>';//最近直播课over
           
                 ajax("get","http://127.0.0.1:8096/chuanke/js/zr2.json?t"+Math.random(),true,function(data){
                        var zr2=JSON.parse(data);
                         str+='<div class="scholl">';//热门学校
                            str+='<p class="title">';
                                for(var i=0;i<zr2.length;i++){
                                    str+='<span class="title_t">';
                                        str+=zr2[i].title;
                                    str+='</span>';
                                };
                            str+='</p>';
                            str+='<div class="scholl_con">';//主要内容
                                for(var i=0;i<zr2.length;i++){
                                    str+='<ul class="crad">';
                                        for(var j=0;j<zr2[i].child.length;j++){
                                            str+='<li class="crad_li">';
                                                str+='<img src=" '+zr2[i].child[j].img+' " alt=""/>';
                                                str+='<span class="scholl_t">';
                                                    str+=zr2[i].child[j].name;
                                                str+='</span>';
                                            str+='</li>';
                                        };
                                    str+='<p class="more">';
                                        str+=zr2[i].more;
                                    str+='</p>';
                                    str+='</ul>';
                                };
                            str+='</div>';//主要内容
                                
                        str+='</div>';//热门学校over
                        //最新合作伙伴
                    ajax("get","http://127.0.0.1:8096/chuanke/js/zr3.json?t"+Math.random(),true,function(data){
                        var zr3=JSON.parse(data);
                        str+='<div class="hezuo">';
                            str+='<p class="title">';//标题
                                str+='<span>';
                                  str+=zr3.title;
                                str+='</span>';
                            str+='</p>';//标题over
                            str+='<ul class="hezuo_ul">';
                                for(var i=0;i<zr3.child.length;i++){
                                    str+='<li class="hezuo_li">';
                                        str+='<img src=" '+zr3.child[i].img+' " alt=""/>';
                                        str+='<p class="hezuo_con">';
                                             str+=zr3.child[i].con;
                                        str+='</p>';
                                    str+='</li>';
                                };
                            str+='</ul>';
                        str+='</div>'; //最新合作伙伴over

                        // 明星讲师json
                         ajax("get","http://127.0.0.1:8096/chuanke/js/zr4.json?t"+Math.random(),true,function(data){
                            var zr4=JSON.parse(data);
                            // alert(data);
                            str+='<div class="jiangshi">';//明星讲师
                                str+='<p class="title">';
                                    str+='<span class="tit">';//标题
                                       str+=zr4.title;
                                    str+='</span>';//标题over
                                str+='</p>';
                                str+='<ul class="jiangshi_con">';
                                    for(var i=0;i<zr4.child.length;i++){
                                        str+='<li class="jiangshi_li">';
                                            str+='<img src=" '+zr4.child[i].img+' " alt=""/>';
                                            str+='<span class="jiangshi_r">';
                                                str+='<p class="jiangshi_name">';
                                                    str+=zr4.child[i].name;
                                                str+='</p>';
                                                str+='<p class="jiangshi_jieshao">';
                                                    str+=zr4.child[i].con;
                                                str+='</p>'
                                            str+='</span>';
                                           
                                        str+='</li>';
                                    };
                                str+='</ul>';
                            str+='</div>';//明星讲师over

                            str+='</div>';//内容右边over
                             str+='</div>';//主体over

                             //footer start
                            //最受关注的学校json
                            ajax("get","http://127.0.0.1:8096/chuanke/js/z2.json?t"+Math.random(),true,function(data){
                                // alert(data);
                                var z2=JSON.parse(data);
                                str+='<div class="guanzhu">'; //最受关注的学校
                                    str+='<p class="title">';//标题
                                        str+='<span class="tit">';
                                            str+=z2.title;
                                        str+='</span>';
                                    str+='</p>';//标题
                                    str+='<ul class="guanzhu_ul">';
                                        for(var i=0;i<z2.child.length;i++){
                                            str+='<li class="guanzhu_li">';
                                                str+='<img src=" '+z2.child[i].lg+' " alt=""/>';
                                                str+='<p class="guanzhu_txt">';
                                                    str+=z2.child[i].txt;
                                                str+='</p>';
                                            str+='</li>';
                                        };
                                    str+='</ul>';
                                str+='</div>'; //最受关注的学校over
                        //知心帮助json
                    ajax("get","http://127.0.0.1:8096/chuanke/js/z3.json?t"+Math.random(),true,function(data){
                        var z3=JSON.parse(data);
                        str+='<div class="help">';//知心帮助
                                for(var i=0;i<z3.length;i++){
                                    str+='<ul class="help_ul">';//每个列
                                        str+='<h3>';
                                            str+=z3[i].tit;
                                        str+='</h3>';
                                        for(var j=0;j<z3[i].arr.length;j++){
                                            str+='<li class="help_li">';
                                                str+=z3[i].arr[j];
                                            str+='</li>';
                                        }
                                    str+='</ul>';//每个列over
                                };
                        str+='</div>';//知心帮助over

                        //最后一个
                         ajax("get","http://127.0.0.1:8096/chuanke/js/z4.json?t"+Math.random(),true,function(data){
                            var z4=JSON.parse(data);
                            // alert(data);
                            //footer
                            str+='<div class="footer">';

                                str+='<div class="href">';//友情链接
                                 str+='<p class="href_title">';
                                    str+=z4.title;
                                  str+='</p>';
                                    for(var i=0;i<z4.arr.length;i++){
                                        str+='<span class="href_span">';
                                            str+=z4.arr[i];
                                        str+='</span>';
                                    };
                                str+='</div>';//友情链接over
                                str+='<div class="about">';
                                    for(var i=0;i<z4.con.length;i++){
                                        str+='<span class="about_con">';
                                            str+=z4.con[i];
                                        str+='</span>';
                                    }
                                str+='</div>';
                                str+='<div class="bottom">';
                                    for(var i=0;i<z4.btm.length;i++){
                                        str+='<span class="bottom_con">';
                                            str+=z4.btm[i];
                                        str+='</span>';
                                    }
                                str+='</div>';
                            str+='</div>';
                            //footerover                            


                    // --------------------------
                        main.innerHTML=str;
                        headstyle();// 哭....   这个函数包括了头部两个导航条和一个轮播加上
                        xxkfn();      //选项卡
                        price();
                        scholl();
                        hezuo();
                    }); //页面右边的数据over
                    // -------------------------------------


                         }); //最后一个json over
                        // alert(data)
                    

                    }); //知心帮助json over

               
                            });//最受关注的学校json over
                                 //footer over

                  });  // 明星讲师json over




                 }); //最新合作伙伴json over
                        

                 });//热门学校over
               
        

     }); //中间四个大内容over
        


        });//免费好课over


        
    

    });
//页面主要内容over


});//选项卡json over



//合作伙伴
function hezuo(){
    $(".hezuo").css("margin-top",($(".crad_li").length/2)*68)
}

// alert($("#xxk_l_r").length)


//热门学校
function scholl(){
    $(".title_t").each(function(index,ele){
        $(this).click(function(){
            $(".title_t").css("border","none");
            $(".crad").css("display","none");
            $(this).css("border-bottom","2px solid #1CB177");
            $(".crad").eq(index).css("display","block");
        });
    })
};




//选项卡js
function xxkfn(){
    $(".xxk_l_l .xxk_l_l_li").each(function(index,ele){
        $(".xxk_l_l .xxk_l_l_li").eq(index).mouseover(function(){
            // $(this).css()
            $(".xxk .xxk_l_r ul li").css("display","none");
            $(".xxk .xxk_l_r ul li").eq(index).css("display","block");
        });
    });
};

function headstyle(){
  // 第一个导航栏的下拉菜单
    $(".down_r").eq(1).css({"background":"#1CB177"});

    $(".nav_school").eq(1).css({"display":"none"});
    $(".nav_school").each(function(index,ele){
        var a=true;
        $(".nav_school").click(function(){
            if(a){
                $(".nav_school").eq(1).css("display","block");
                
                // $(".nav_school").eq(0).text("课程");
                a=false;
            }else{
                $(".nav_school").eq(1).css("display","none");
                a=true;
            };
        });
    });

     var b=true;
     $(".nav_school").eq(1).css({"background":"white"});
     $(".nav_school").eq(1).mouseover(function(){
         $(".nav_school").css({"background":"white"});
         $(this).css({"background":"#F0F0F0"});
     });
     $(".nav_school").eq(1).mouseout(function(){
         $(".nav_school").css({"background":"#F0F0F0"});
         $(this).css({"background":"white"});
     });
     $(".nav_school").eq(1).click(function(){
         if(b){
            $(".nav_school").eq(1).html(datas.t_nav.t_search.class[0]);
            $(".nav_school").eq(0).html(datas.t_nav.t_search.class[1]);
            b=false;
         }else{
            $(".nav_school").eq(1).html(datas.t_nav.t_search.class[1]);
            $(".nav_school").eq(0).html(datas.t_nav.t_search.class[0]);
            b=true;
         };
        
        $(".search_btn").mouseout(function(){
            $(".search_btn").eq(1).hide();
        });
     });//nav菜单栏over

     //轮播图
        $(".banner_list li:first").addClass("list_blue");//设置第一个小圆点颜色
        var i=0,m=1;
        var t;
        clearInterval(t);
        banner()
        function banner(){//轮播图函数
                    t=setInterval(function(){
                    $(".banner_li").fadeOut();
                    $(".banner_li").eq(i).fadeIn(500);
                    $(".banner_list li").removeClass("list_blue");
                    $(".banner_list li").eq(m).addClass("list_blue");
                    i++,m++;
                    if(m>=$(".banner_li").length){
                        m=0;
                    }
                    if(i>=$(".banner_li").length){
                        i=0;
                    }
                },2000);
        }//轮播图函数over
        $(".banner").hover(function(){
            clearInterval(t);
        },function(){
             banner()
        });
        //小圆点
          $(".banner_list li").each(function(index,ele){//小圆点样式
              $(this).click(function(){
                  var me=$(this);
                   $(".banner_list li").removeClass("list_blue");
                   $(".banner_list li").eq(index).addClass("list_blue");
                   m=index;
                  $(".banner_li").fadeOut();
                 $(".banner_li").eq(index-1).fadeIn(500);
                //   alert(index)
              })
          });//小圆点样式over

    //轮播图over

    var st=datas.t_nav2[datas.t_nav2.length-1].image;
    $(".nav_content li").eq(1).css({"background":"#F0F0F0","color":"#40BB8A"});
     $(".nav_content li:last").css({"background-image":"url("+st+")","background-position":"25px 145px","background-repeat":"repeat-y"});

}// head style function

function price(){
    var reg=/￥/g;
    // $(".price").each(function(index,ele){
    //      var price=$(".price").eq(index).text();
    //     if(reg.test(price)){
    //         reg.test($(".price").eq(index).addClass("price_red"))
    //     }else{
    //         console.log(111)
    //     };
    // });
};

});//第一个数据也就是头部 over





