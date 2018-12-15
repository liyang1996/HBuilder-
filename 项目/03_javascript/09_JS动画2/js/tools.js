//IE需要使用其他方式获取
/**
 * 获取CSS属性值
 * @param {Object} obj  标签对象
 * @param {Object} attr 属性名
 */
		function getStyle(obj,attr){
			if(obj.currentStyle){
					//支持IE
					return obj.currentStyle[attr];
				}else{
					return getComputedStyle(obj)[attr];
				}
			}
/**
 * 获取随机数
 * @param {Object} max 
 * @param {Object} min
 */
		function getNum(max,min){
			var num = Math.floor(Math.random() * (max - min + 1) + min);
		return num;
			}

/**
 * 获取随机颜色
 */
		function getRandomColor() {
				var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
				var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
				var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
		return "rgb(" + r + "," + g + "," + b + ")";
			}
/**
 * 匀速左右运动
 * @param {Object} obj    目标对象
 * @param {Object} targetPosition  目标位置
 * @param {Object} speed  移动速度
 * @param {Object} time		时间
 */
		function startMove(obj,targetPosition,speed,time){
			clearInterval(obj.timer)
			obj.timer = setInterval(function(){
			if(Math.abs(targetPosition-obj.offsetLeft)<=Math.abs(speed)){
				obj.style.left=targetPosition+"px";
				    clearInterval(obj.timer);
			}else{
				obj.style.left=obj.offsetLeft+speed+"px";
				}
				console.log("offset: "+ obj.offsetLeft);
				},time);
			}
/**
 * 匀速（上下左右）运动封装
 * @param {Object} obj
 * @param {Object} attr
 * @param {Object} targetPosition
 * @param {Object} speed
 * @param {Object} time
 */
			function uniformMove(obj,attr,targetPosition,speed,time){
				clearInterval(obj.timer)
				obj.timer = setInterval(function(){
					//通过属性名获得属性值
					//getStyle(obj,attr) 是字符串"~px"
					var attrvalue=parseInt(getStyle(obj,attr));
					//var attrvalue=parseInt(getComputedStyle(obj)[attr]);
					if(Math.abs(targetPosition-attrvalue)<=Math.abs(speed)){
						obj.style[attr]=targetPosition+"px";
						clearInterval(obj.timer);
					}else{
						obj.style[attr]=attrvalue+speed+"px";
					}
				console.log("offset: "+ attrvalue);
				},time);
			}
			
//缓冲（上下左右）运动封装
function easeMove(obj,attr,targetPos,speedScale,time){
				clearInterval(obj.timer)
				obj.timer = setInterval(function(){
					var attrValue = parseInt(getStyle(obj,attr));
					var speed = Math.abs(targetPos - attrValue)/speedScale
					speed = speed>0?Math.ceil(speed):Math.floor(speed);
					if(attrValue == targetPos){
					
						clearInterval(obj.timer);
					}else{
						obj.style[attr] = attrValue + speed + "px";
					}
					console.log(getStyle(obj,attr));
				},time)
			}

//透明度函数封装
function opacityMove(obj,attr,iTarget,speedScale,time){
				clearInterval(obj.timer)
				obj.timer=setInterval(function(){
					var attrValue=getStyle(obj,attr)*100;
					var speedEnd = (iTarget - attrValue) / speedScale;
					speedEnd=speedEnd>0?Math.ceil(speedEnd):Math.floor(speedEnd);
					//console.log("计算速度值:"+speedEnd);
					var isStop = true;
					if(iTarget!=attrValue){
						isStop=false;
						obj.style[attr]=(attrValue+speedEnd)/100;
					}if(isStop){
							clearInterval(obj.timer);		
						}
					console.log("attrValue:"+ obj.style[attr]);
				},time);
			}