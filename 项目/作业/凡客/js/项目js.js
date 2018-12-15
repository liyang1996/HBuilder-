window.onload = function() {
	var topNav = document.getElementById("top_nav");
	var navLeft = document.getElementById("nav_left");
	var navMore = document.getElementById("nav_more");
	var moreDiv = document.getElementById("more_div");
	var navMoreDivs = navMore.getElementsByTagName("div");
	var logoImg = document.getElementById("logoImg");
	var login = document.getElementById("login");
	var main = document.getElementById("main");
	var navPulls = document.getElementsByClassName("nav_pull");
	var seckillHour = document.getElementById("seckill_hour");
	var seckillMinute = document.getElementById("seckill_minute");
	var seckillSecond = document.getElementById("seckill_second");
	var seckillGoods = document.getElementById("seckill_goods");
	var shoppingCart = document.getElementById("shopping_cart");
	var shoppingDiv = document.getElementById("shopping_div");

	//下拉导航栏
	var navArr = navJson;
	//console.log(navArr);
	//	console.log(navPulls.length);
	for(var i in navArr) {
		//		console.log(navArr[i]);
		var divBox = document.createElement("div");
		divBox.className = "navBox";
		var redDiv = document.createElement("div");
		redDiv.style.width = navPulls[i].offsetWidth + "px";
		redDiv.style.height = 5 + "px";
		redDiv.style.backgroundColor = "rgb(" + 167 + "," + 9 + "," + 26 + ")";
		divBox.appendChild(redDiv);
		for(var j in navArr[i]) {
			var newDiv = document.createElement("div");
			newDiv.className = "pullDiv";
			newDiv.innerHTML = navArr[i][j];
			newDiv.style.width = navPulls[i].offsetWidth + "px"
			//			newDiv.style.borderLeft = "1px solid WhiteSmoke"
			//			newDiv.style.borderRight = "1px solid WhiteSmoke"
			if(j == 0) {
				newDiv.style.paddingTop = "15px"
			}
			if(j == navArr[i].length - 1) {
				newDiv.style.paddingBottom = "15px"
				//				newDiv.style.borderBottom = "1px solid WhiteSmoke";
			}
			divBox.appendChild(newDiv);
			divBox.style.zIndex = 100;
			//			divBox.style.top = navPulls[i].offsetTop + navPulls[i].clientHeight + 10 + "px";
			//			divBox.style.left = navPulls[i].offsetLeft + "px";
			divBox.style.marginTop = 10 + "px";
			navPulls[i].appendChild(divBox);
		}
	}
	var divBoxs = document.getElementsByClassName("navBox");
	for(var i = 0; i < navPulls.length; i++) {
		var flag;
		navPulls[i].index = i;
		navPulls[i].onmouseover = function() {
			var h = 0;
			for(var j = 0; j < divBoxs[this.index].children.length; j++) {
				h = h + divBoxs[this.index].children[j].offsetHeight;
			}
			easeMove(divBoxs[this.index], {
				"height": h
			}, 10, 20);
		}

		navPulls[i].onmouseout = function() {

			easeMove(divBoxs[this.index], {
				"height": 0
			}, 10, 20);

		}
	}

	for(var i = 0; i < divBoxs.length; i++) {
		divBoxs[i].index = i;
		divBoxs[i].onmouseover = function() {
			var h = 0;
			for(var j = 0; j < divBoxs[this.index].children.length; j++) {
				h = h + divBoxs[this.index].children[j].clientHeight;
			}
			easeMove(divBoxs[this.index], {
				"height": h
			}, 10, 20);
		}

		divBoxs[i].onmouseout = function() {

			easeMove(divBoxs[this.index], {
				"height": 0
			}, 10, 20);
		}
	}

	var timer = null;
	// 导航栏...弹出更多
	navMore.onmouseover = function() {
		clearTimeout(timer);
		moreDiv.style.display = "block";
		moreDiv.style.left = navMore.offsetLeft - (moreDiv.clientWidth - navMore.clientWidth) / 2 + "px";
		//		console.log(navMore.offsetLeft)
	}
	navMore.onmouseout = function() {
		moreDivHidden();

	}
	moreDiv.onmouseover = function() {
		clearTimeout(timer);
	}
	moreDiv.onmouseout = function() {
		moreDivHidden();

	}
	// 弹出框隐藏
	function moreDivHidden() {
		// 延时消失
		timer = setTimeout(function() {
			moreDiv.style.display = "none";
		}, 500);
	}

	//	function setPosition(){
	//		var scrollT=document.cookie;
	//		// 更多弹窗显示位置
	//		moreDiv.style.top = scrollT + 62 + "px";
	//		// 购物车按钮位置
	//		shoppingCart.style.top = scrollT + login.offsetTop + "px"
	//		// 购物车弹窗
	//		shoppingDiv.style.top = scrollT + shoppingCart.offsetHeight + login.offsetTop - 1 + "px";
	//		console.log(document.cookie);
	//	}

	// 页面滚动时响应
	window.onscroll = function() {
		//页面滚动距离（滚动到窗口上面的高度)
		// window.pageYOffset : safari获取页面滚动距离
		var scrollT = document.documentElement.scrollTop || window.pageYOffset;
		//		document.cookie = "scrollT="+scrollT;
		// 更多弹窗显示位置
		//		moreDiv.style.top = scrollT + 62 + "px";
		// 购物车按钮位置
		//		shoppingCart.style.top = scrollT + login.offsetTop + "px"
		// 购物车弹窗
		//		shoppingDiv.style.top = scrollT + shoppingCart.offsetHeight + login.offsetTop - 1 + "px";

		//				console.log("页面滚动的距离：" + scrollT);
		if(scrollT >= 150) {
			topNav.style.backgroundColor = "white";
			logoImg.src = "http://huaban.com/img/logo.svg";
			//			console.log()
			for(var i = 0; i < navLeft.children.length; i++) {
				navLeft.children[i].style.color = "black";
				navLeft.children[1].style.color = "rgb(" + 217 + "," + 31 + "," + 27 + ")";
				navLeft.children[5].children[0].style.backgroundColor = "lightgray"
				//				console.log(navLeft.children[4].children.length);
				for(var j = 0; j < navLeft.children[4].children.length; j++) {
					navLeft.children[4].children[j].style.backgroundColor = "darkgray";
				}
				login.style.backgroundColor = "rgb(" + 232 + "," + 233 + "," + 232 + ")";
				login.style.color = "black";
				login.style.borderColor = "rgb(" + 232 + "," + 233 + "," + 232 + ")";
			}

		} else {
			topNav.style.backgroundColor = "transparent";
			logoImg.src = "http://huaban.com/img/logo_wt.svg";
			for(var i = 0; i < navLeft.children.length; i++) {
				navLeft.children[i].style.color = "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0.8 + ")";
				for(var j = 0; j < navLeft.children[4].children.length; j++) {
					navLeft.children[4].children[j].style.backgroundColor = "rgba(" + 255 + "," + 255 + "," + 255 + "," + 0.8 + ")";
				}
				login.style.backgroundColor = "transparent";
				login.style.color = "white";
				login.style.borderColor = "white";
			}
		}

	}
	// 轮播图
	var swiper = new Swiper('.swiper-container', {
		// 无限轮播
		loop: true,
		// spaceBetween: 30,
		centeredSlides: true,
		effect: 'fade',

		// 自动播放
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		// 轮播小圆点
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		// 左右按钮
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	// 秒杀活动倒计时
	countDown(18204);
	// 倒计时
	function countDown(times) {
		var timer = null;
		timer = setInterval(function() {
			var day = 0,
				hour = 0,
				minute = 0,
				second = 0; //时间默认值
			if(times > 0) {
				day = Math.floor(times / (60 * 60 * 24));
				hour = Math.floor(times / (60 * 60)) - (day * 24);
				minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
				second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
			}
			if(day <= 9) day = '0' + day;
			if(hour <= 9) hour = '0' + hour;
			if(minute <= 9) minute = '0' + minute;
			if(second <= 9) second = '0' + second;

			seckillHour.innerHTML = hour;
			seckillMinute.innerHTML = minute;
			seckillSecond.innerHTML = second;

			//
			//			console.log(day + "天:" + hour + "小时：" + minute + "分钟：" + second + "秒");
			times--;
		}, 1000);
		if(times <= 0) {
			clearInterval(timer);
		}
	}
	// 秒杀活动布局动态添加
	for(var i in secKillJson) {
		//		console.log(secKillJson[i]);
		var goodsDiv = document.createElement("div");
		goodsDiv.className = "seckill_goodsdiv";
		var goodsImg = document.createElement("img");
		goodsImg.className = "seckill_goodspic";
		goodsImg.src = secKillJson[i]["goods_pic"];
		var goodsName = document.createElement("p");
		goodsName.className = "seckill_goodsname";
		goodsName.innerHTML = secKillJson[i]["goods_name"];
		goodsDiv.appendChild(goodsImg);
		goodsDiv.appendChild(goodsName);

		//		goodsDiv.appendChild(originalPrice);
		var bottomDiv = document.createElement("div");
		bottomDiv.className = "seckill_bottom_div";
		var originalPrice = document.createElement("p");
		originalPrice.className = "seckill_original_price";
		originalPrice.innerHTML = "¥ " + secKillJson[i]["price_list"]["original_price"];
		var discountPrice = document.createElement("span");
		discountPrice.innerHTML = "¥ " + secKillJson[i]["price_list"]["discount_price"];
		discountPrice.className = "seckill_discount_price";
		var rechargePrice = document.createElement("span");
		rechargePrice.innerHTML = "充值后 " + "<span>" + secKillJson[i]["price_list"]["recharge_price"] + "</span>" + "元";
		rechargePrice.className = "seckill_recharge_price";
		bottomDiv.appendChild(originalPrice);
		bottomDiv.appendChild(discountPrice);
		bottomDiv.appendChild(rechargePrice);
		goodsDiv.appendChild(bottomDiv);
		seckillGoods.appendChild(goodsDiv);
	}
	// 添加购物车方法
	// 存购物车数组
	var shoppingCarArr = [];
	for(var i = 0; i < seckillGoods.children.length; i++) {
		console.log(seckillGoods)
		seckillGoods.children[i].index = i;
		seckillGoods.children[i].onclick = function() {
			// 存每一条信息的json
			var sigleArr = {};
			var flag = true;
			//			console.log(this.index);
			sigleArr["goods_name"] = secKillJson[this.index]["goods_name"];
			sigleArr["goods_pic"] = secKillJson[this.index]["goods_pic"];
			sigleArr["discount_price"] = secKillJson[this.index]["price_list"]["discount_price"];
			sigleArr["goods_code"] = secKillJson[this.index]["goods_code"]; +
			swal({
				title: '确定添加此商品到购物车？',
				type: 'warning',
				showCancelButton: true,
				confirmButtonText: '确定',
				cancelButtonText: '取消',

			}).then(function(isConfirm) {
				//				console.log(isConfirm);
				if(isConfirm.value === true) {
					// 第一次添加商品时
					if(shoppingCarArr.length == 0) {
						sigleArr["goods_count"] = 1;
						shoppingCarArr.push(sigleArr);

					} else {
						for(var j = 0; j < shoppingCarArr.length; j++) {
							//							console.log(shoppingCarArr[j]["goods_code"].toString());
							//							console.log(sigleArr["goods_code"].toString());
							// 通过商品唯一编号，判断列表中是否有相同商品，有相同商品只增加数量，没有的话添加新商品到数组中
							if(shoppingCarArr[j]["goods_code"].toString().indexOf(sigleArr["goods_code"].toString()) != -1) {
								shoppingCarArr[j]["goods_count"] = shoppingCarArr[j]["goods_count"] + 1;
								flag = false;
								break;
								//								shoppingCarArr.push(sigleArr);
							}

						}
						if(flag) {
							sigleArr["goods_count"] = 1;
							shoppingCarArr.push(sigleArr);
						}
					}

					//					console.log(shoppingCarArr);
					showShoppingCar(shoppingCarArr);
					swal(
						'商品已成功添加到购物车',
						'',
						'success'
					)
				}

			})
		}
	}
	var shoppingCart = document.getElementById("shopping_cart");
	var goodsList = document.getElementById("shopping_goods_list");
	var goodsTotalPrice = document.getElementById("goods_total_price");
	var shoppingButton = document.getElementById("shopping_button");
	var shoppingContent = document.getElementById("shopping_content");
	var shoppingText = document.getElementById("shopping_text");
	// 搭建购物车
	function showShoppingCar(shoppingCarArr) {
		goodsList.innerHTML = "";
		var totalCount = 0;
		var totalPrice = 0;
		for(var i = 0; i < shoppingCarArr.length; i++) {
			totalCount = totalCount + shoppingCarArr[i]["goods_count"];
			totalPrice = totalPrice + shoppingCarArr[i]["discount_price"] * shoppingCarArr[i]["goods_count"];

			var shoppingGoods = document.createElement("div");
			shoppingGoods.className = "shopping_goods";
			// 记住当前商品的下标
			shoppingGoods.index = i;
			// 记住当前商品数量
			shoppingGoods.count = shoppingCarArr[i]["goods_count"];
			// 记住当前商品价格
			shoppingGoods.price = shoppingCarArr[i]["discount_price"] * shoppingCarArr[i]["goods_count"];

			var goodsImg = document.createElement("img");
			goodsImg.className = "shopping_goods_img"
			goodsImg.src = shoppingCarArr[i]["goods_pic"];
			shoppingGoods.appendChild(goodsImg);

			var goodsInfor = document.createElement("div");
			goodsInfor.className = "shopping_goods_infor";
			//			<div class="shopping_goods_name"></div>
			//							<div class="shopping_goods_price"></div>

			var goodsName = document.createElement("div");
			goodsName.className = "shopping_goods_name";
			goodsName.innerHTML = shoppingCarArr[i]["goods_name"];

			var goodsPrice = document.createElement("div");
			goodsPrice.className = "shopping_goods_price";
			goodsPrice.innerHTML = "¥" + shoppingCarArr[i]["discount_price"].toFixed(2) + "x" + shoppingCarArr[i]["goods_count"];

			var goodsDel = document.createElement("span");
			goodsDel.className = "shopping_goods_del";
			goodsDel.innerHTML = "删除";
			goodsInfor.appendChild(goodsName);
			goodsInfor.appendChild(goodsPrice);
			shoppingGoods.appendChild(goodsDel);
			shoppingGoods.appendChild(goodsInfor);
			goodsList.appendChild(shoppingGoods);
		}
		shoppingCart.innerHTML = "购物车(" + totalCount + ")";
		// 记住购物车总数量
		shoppingCart.totalCount = totalCount;
		goodsTotalPrice.innerHTML = "¥" + totalPrice;
		// 记住购物车总价格
		goodsTotalPrice.totalPrice = totalPrice;
		shoppingButton.innerHTML = "查看购物车(" + totalCount + ")";
	}
	// 购物车弹窗消失显示
	shoppingCart.onmouseover = function() {
		showShoppingDiv();
	}
	shoppingCart.onmouseout = function() {
		hiddenShoppingDiv();
	}
	shoppingDiv.onmouseover = function() {
		showShoppingDiv();
	}
	shoppingDiv.onmouseout = function() {
		hiddenShoppingDiv();
	}

	function showShoppingDiv() {
		shoppingDiv.style.display = "block";
		shoppingCart.style.backgroundColor = "white";
		shoppingCart.style.color = "rgb(" + 217 + "," + 31 + "," + 27 + ")";
		showGoodsList(shoppingCarArr);
	}

	function hiddenShoppingDiv() {
		shoppingDiv.style.display = "none";
		shoppingCart.style.backgroundColor = "rgb(" + 228 + "," + 41 + "," + 61 + ")";
		shoppingCart.style.color = "white";
	}

	function showGoodsList(shoppingCarArr) {
		if(shoppingCarArr.length == 0) {
			shoppingText.innerHTML = "您的购物车没有任何商品";
			shoppingContent.style.display = "none"

		} else {
			shoppingText.innerHTML = "最近加入的商品：";
			shoppingContent.style.display = "block"
		}
	}
	// 删除购物车商品
	var shoppingGoods = document.getElementsByClassName("shopping_goods");
	shoppingDiv.onclick = function(ev) {
		var ev = ev || window.event;
		var target = ev.target || ev.srcElement;
		if(target.className == "shopping_goods_del") {
			//			console.log(target.parentNode);
			// 删除所选商品视图
			target.parentNode.remove();
			//			console.log(target.parentNode.index);
			// 更改购物车总数量
			shoppingCart.totalCount = shoppingCart.totalCount - target.parentNode.count;
			shoppingCart.innerHTML = "购物车(" + shoppingCart.totalCount + ")";
			shoppingButton.innerHTML = "查看购物车(" + shoppingCart.totalCount + ")";
			// 更改购物车总价格
			goodsTotalPrice.totalPrice = goodsTotalPrice.totalPrice - target.parentNode.price;
			goodsTotalPrice.innerHTML = "¥" + goodsTotalPrice.totalPrice;		
            // 删除数组中所对应商品json
			shoppingCarArr.splice(target.parentNode.index, 1);
			//			console.log(shoppingCarArr.length);
			if(shoppingCart.totalCount == 0) {
				shoppingCarArr = [];
				showGoodsList(shoppingCarArr);
				hiddenShoppingDiv();
			}

		}
	}

	// 为你推荐
	var recommendInfor = document.getElementById("recommend_infor");
	for(var i in recommendJson) {
		//		console.log(recommendJson[i]);
		//		console.log(recommendJson[i]["title_b"])
		var sigleDiv = document.createElement("div");
		sigleDiv.className = "recommend_infor_sigle";
		var recommendImg = document.createElement("img");
		recommendImg.className = "recommend_infor_img";
		if(recommendJson[i]["img"] != "") {
			recommendImg.src = recommendJson[i]["img"];
			sigleDiv.appendChild(recommendImg);
		}

		var inforRight = document.createElement("div");
		inforRight.className = "recommend_infor_right";
		// 有上下文字介绍
		if(recommendJson[i]["title_t"] != "" && recommendJson[i]["title_b"] != "") {
			var recommendInforTop = document.createElement("div");
			recommendInforTop.className = "recommend_infor_top";
			var topSquare = document.createElement("div");
			topSquare.className = "recommend_infor_top_square";
			//			console.log(recommendInfor.clientHeight);
			topSquare.style.top = ((236 * 0.49) / 2 - 17 / 2) + "px"
			inforRight.appendChild(topSquare);
			//			recommendInforTop.style.float = "left";
			var newDiv = document.createElement("div");
			var inforTitle = document.createElement("p");
			inforTitle.className = "recommend_infor_title";
			inforTitle.innerHTML = recommendJson[i]["title_t"];
			var inforText = document.createElement("span");
			inforText.className = "recommend_infor_text";
			inforText.innerHTML = recommendJson[i]["content_t"];
			newDiv.appendChild(inforTitle);
			newDiv.appendChild(inforText);
			recommendInforTop.appendChild(newDiv);
			inforRight.appendChild(recommendInforTop);
			sigleDiv.appendChild(inforRight);

			var recommendInforBottom = document.createElement("div");
			recommendInforBottom.className = "recommend_infor_bottom";
			var bootomSquare = document.createElement("div");
			bootomSquare.className = "recommend_infor_bottom_square";
			bootomSquare.style.top = ((236 * 0.49 + (236 * 0.49) / 2) - 17 / 2) + "px"
			inforRight.appendChild(bootomSquare);
			//			recommendInforTop.style.float = "left";
			var newDivt = document.createElement("div");
			var bottomInner = document.createElement("div");
			bottomInner.className = "recommend_infor_bottom_inner";
			var inforTitlet = document.createElement("p");
			inforTitlet.className = "recommend_infor_title_r";
			inforTitlet.innerHTML = recommendJson[i]["title_b"];
			bottomInner.appendChild(inforTitlet);
			var inforTextt = document.createElement("span");
			inforTextt.className = "recommend_infor_text_r";
			inforTextt.innerHTML = recommendJson[i]["content_b"];
			newDivt.appendChild(bottomInner);
			newDivt.appendChild(inforTextt);
			recommendInforBottom.appendChild(newDivt);

			inforRight.appendChild(recommendInforTop);
			inforRight.appendChild(recommendInforBottom);

		} else if(recommendJson[i]["title_t"] != "" && recommendJson[i]["title_b"] == "") {
			var recommendInforTop = document.createElement("div");
			recommendInforTop.className = "recommend_infor_top";
			recommendInforTop.style.height = "100%"
			var topSquare = document.createElement("div");
			topSquare.className = "recommend_infor_top_square";
			topSquare.style.top = ((236 * 0.49) / 2 - 17 / 2) + "px"
			inforRight.appendChild(topSquare);
			//			recommendInforTop.style.float = "left";
			var newDiv = document.createElement("div");
			var inforTitle = document.createElement("p");
			inforTitle.className = "recommend_infor_title";
			inforTitle.innerHTML = recommendJson[i]["title_t"];
			var inforText = document.createElement("span");
			inforText.className = "recommend_infor_text";
			inforText.innerHTML = recommendJson[i]["content_t"];
			newDiv.appendChild(inforTitle);
			newDiv.appendChild(inforText);
			recommendInforTop.appendChild(newDiv);
			inforRight.appendChild(recommendInforTop);
			sigleDiv.appendChild(inforRight);
			inforRight.appendChild(recommendInforTop);
		} else if(recommendJson[i]["title_t"] == "" && recommendJson[i]["title_b"] != "") {
			//			var recommendInforTop = document.createElement("div");
			//			recommendInforTop.style.height = "50%"
			//			inforRight.appendChild(recommendInforTop);

			var recommendInforBottom = document.createElement("div");
			recommendInforBottom.className = "recommend_infor_bottom";
			recommendInforBottom.style.height = "100%"
			var bootomSquare = document.createElement("div");
			bootomSquare.className = "recommend_infor_bottom_square";
			bootomSquare.style.top = ((236 * 0.49 + (236 * 0.49) / 2) - 17 / 2) + "px"
			inforRight.appendChild(bootomSquare);
			//			recommendInforTop.style.float = "left";
			var newDivt = document.createElement("div");
			var bottomInner = document.createElement("div");
			bottomInner.className = "recommend_infor_bottom_inner";
			var inforTitlet = document.createElement("p");
			inforTitlet.className = "recommend_infor_title_r";
			inforTitlet.innerHTML = recommendJson[i]["title_b"];
			bottomInner.appendChild(inforTitlet);
			var inforTextt = document.createElement("span");
			inforTextt.className = "recommend_infor_text_r";
			inforTextt.innerHTML = recommendJson[i]["content_b"];
			newDivt.appendChild(bottomInner);
			newDivt.appendChild(inforTextt);
			recommendInforBottom.appendChild(newDivt);
			inforRight.appendChild(recommendInforBottom);
			recommendInforBottom.style.display = "flex";
			newDivt.style.alignSelf = "flex-end"
			newDivt.style.width = "100%"
			sigleDiv.appendChild(inforRight);
		}
		recommendInfor.appendChild(sigleDiv);
	}

	// 回到顶部
	var goTop = document.getElementById("go_top");
	var topTimer = null;
	goTop.onclick = function() {
		cancelAnimationFrame(topTimer);
		topTimer = requestAnimationFrame(function fn() {
			var oTop = document.body.scrollTop || document.documentElement.scrollTop;
			if(oTop > 0) {
				document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
				topTimer = requestAnimationFrame(fn);
			} else {
				cancelAnimationFrame(topTimer);
			}
		});
	}
	// 广告弹窗
	var adWindow = document.getElementById("ad");
	var adCloseBtn = document.getElementById("ad_close");
	setadWHeight();

	function setadWHeight() {
		// 获取整个网页高度
		if(document.body.scrollHeight == 2257) {
			// 第一次获取高度有问题
			adWindow.style.height = 2475 + "px";
		} else {
			adWindow.style.height = document.body.scrollHeight + "px";
		}

		//		console.log(document.body.scrollHeight);
	}
	// 关闭广告窗
	adCloseBtn.onclick = function() {
		adWindow.style.display = "none";
	}
	// 自动关闭广告窗
	var adTimer = setInterval(function() {
		adWindow.style.display = "none";
	}, 5000);

}