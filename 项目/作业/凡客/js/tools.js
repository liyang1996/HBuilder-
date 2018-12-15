/**
 * 获得元素最终 CSS 属性名
 * @param {Object} obj
 * @param {Object} attr
 */
function getStyle(obj, attr) {
	if(obj.currentStyle) {
		// 支持IE
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj)[attr];
	}
}
/*
 * 随机RGBA颜色
 */
function getRandomRGBA() {
	//随机颜色
	var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	var a = Math.random();
	return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}
/*
 * 随机RGB颜色
 */
function getRandomRGB() {
	//随机颜色
	var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);
	return "rgb(" + r + "," + g + "," + b + ")";
}
//随机生成十六进制颜色
function randomHexColor() {
	var hex = Math.floor(Math.random() * 16777216).toString(16); //生成ffffff以内16进制数
	while(hex.length < 6) { //while循环判断hex位数，少于6位前面加0凑够6位
		hex = '0' + hex;
	}
	return '#' + hex; //返回‘#'开头16进制颜色
}

/* 无论输入width,left,top,height,正负
 * 匀速运动都可以用这个函数
 */
//function startMove(obj, targertPos, speed, time, attr) {
//	// 通过属性名获得属性值
//	// 将getStyle(obj, attr)字符串，转成数值		
//	clearInterval(obj.timer);
//	obj.timer = setInterval(function() {
//		var attrValue = parseFloat(getStyle(obj, attr));
//		//					console.log(attrValue);
//		if(Math.abs(targertPos - attrValue) <= Math.abs(speed)) {
//			obj.style[attr] = targertPos + "px";
//			clearInterval(obj.timer);
//		} else {
//			obj.style[attr] = attrValue + speed + "px";
//		}
//		console.log(attrValue);
//	}, time);
//}
// 不重复随机数组
function noRepeat(max, min, n) {

	var arrE = [];
	while(arrE.length != n) {

		var num = Math.floor(Math.random() * (max - min + 1) + min);
		var result = true;
		for(var i = 0; i < arrE.length; i++) {
			if(arrE[i] == num) {
				result = false;
				break;
			}
		}
		if(result) {
			arrE[i] = num;
		}
	}
	return arrE;
}
/**
 * 匀速运动
 * @param {Object} obj
 * @param {Object} targetPos
 * @param {Object} speed
 * @param {Object} time
 * @param {Object} attr
 */
function startMove(obj, targetPos, speed, time, attr) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var isStop = true;
		var attrValue = getStyle(obj, attr);
		attrValue = attr == "opacity" ? attrValue * 100 : parseInt(attrValue);
		if(Math.abs(targetPos - attrValue) > Math.abs(speed)) {
			isStop = false;
			obj.style[attr] = attr == "opacity" ? (attrValue + speed) / 100 : (attrValue + speed + "px");
		}
		if(isStop) {
			obj.style[attr] = attr == "opacity" ? targetPos / 100 : (targetPos + "px");
			clearInterval(obj.timer);
		}
		console.log(getStyle(obj, attr));
	}, time);
}

/**
 * 缓冲运动
 * @param {Object} obj
 * @param {Object} attrJson
 * @param {Object} speedScale
 * @param {Object} time
 */
function easeMove(obj, attrJson, speedScale, time) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function() {
		var isStop = true;
		for(var attr in attrJson) {
			console.log("attr: " + attr + " isStop: " + isStop);
			var targetPos = attrJson[attr];
			var attrValue = attr != "opacity" ? parseFloat(getStyle(obj, attr)) : getStyle(obj, attr) * 100;
			var speed = (targetPos - attrValue) / speedScale;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
			if(attrValue != targetPos) {
				// 如果当前属性的值与目标值不相同，定时器不能清除
				isStop = false;
				obj.style[attr] = attr != "opacity" ? (attrValue + speed + "px") : (attrValue + speed) / 100;
			}
		}
		if(isStop) {
			clearInterval(obj.timer);
		}
		// console.log(getStyle(obj, attr));
		console.log("----------------");
	}, time);
}