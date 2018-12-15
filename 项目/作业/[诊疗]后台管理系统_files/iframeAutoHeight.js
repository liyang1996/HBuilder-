/**
 * iframe自适应高度解决
 * 依赖browser.js
 * @author:WangZhenFei
 * @since :2018-09-18 14:55:11
 */
window.setInterval(function reinitIframe(){

	var iframe = document.getElementById("bodyIframe");
	try{
		if(Browser.client.name == 'UCBrowser' || Browser.client.name == 'BaiduBrowser' || Browser.client.name == 'SougouBrowser'){
			iframe.height = iframe.contentWindow.document.documentElement.scrollHeight;
		} else {
			iframe.height = iframe.contentWindow.document.body.scrollHeight;
		}
	}catch (ex){
		console.warn("iframe自适应高度计算出错");
	}
}, 100);