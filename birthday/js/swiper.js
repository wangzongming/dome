  var mySwiper = new Swiper ('.swiper-container', {
	effect:"cube",
	cube: {
	  slideShadows: false,
	  shadow: false,
	},
	  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  },
  });
  //内容界面的高
$("#mui-content").css({
	height:$(document).height(),
})
 //每个界面的高
$(".swiper-slide").css({
	padding:0,
	margin:0,
	height:$(document).height(),
})

$("mui-title")

//音乐
var music=document.querySelector("#music");
var mp3=document.querySelector("#mp3");
var mclick=1;
music.onclick=function(){
    if(mclick==0){
          music.style.animationPlayState="running";
          music.style.color="#ccc";
          mclick=1;
          mp3.play();
    }else{
         music.style.animationPlayState="paused";
         music.style.color="#B0E0E6";
         mclick=0;
         mp3.pause();
    }
}
