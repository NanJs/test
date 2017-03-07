var odiv=document.getElementById('banner-lb');
var oul=document.getElementById('banner-lb').getElementsByTagName('ul')[0];
var oli=document.getElementById('banner-lb').getElementsByTagName('li');

var btn_l=document.getElementById('btn-l');
var btn_r=document.getElementById('btn-r');


//声明一个变量，控制播放速度
var speed=1;
var num=null;

function left(){
	num=1;
}

function right(){
	num=-1;
}	

//复制一份
oul.innerHTML += oul.innerHTML;
//计算ul的宽度  用一个Li的宽度乘以li的个数
oul.style.width=(oli[0].offsetWidth*oli.length+140)+'px';
function move(){
	if(num==1){
		oul.style.left=oul.offsetLeft-speed+'px';
	}else if(num==-1){
		oul.style.left=oul.offsetLeft+speed+'px';
	}else{
		oul.style.left=oul.offsetLeft-speed+'px';
	}

	//判断
//	if(oul.offsetLeft<-oul.offsetWidth){
//		oul.style.left=0+'px';
//	}
	//向左右移动的判断
	if(oul.offsetLeft>0){
		oul.style.left=-oul.offsetWidth/2+'px';
	}else if(oul.offsetLeft<-oul.offsetWidth/2){
		oul.style.left=0+'px'
 	}
}
var timer=setInterval(move,1000/30);
odiv.onmouseover=function(){
	clearInterval(timer);
}
odiv.onmouseout=function(){
	timer=setInterval(move,1000/30);
}