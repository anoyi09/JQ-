# JQ-图片放大插件
一款很酷的JQ图片放大插件，引入JQ，再引入插件就OK了。


# 使用方法：
<p>1、引入JQ，引入enlarge.js；</p>
<p>2、此对象方法是绑定到$.fn上的，jq的所有实例对象可以访问。</p>
接受对象参数，或是直接设置，如下：
```javascript
      	var x = $('#div1').enLarge();
	x.setEnlargePosition('right');
	x.setMultiple(1.2);
	$("#div2").enLarge({
		'enlargePosition': 'right',
		'multiple': 1.5
	});
 ```
 
 #效果图：

<img src="http://106.14.6.243/p3761601858/img1525750637.jpeg" alt="we you stroy" style="display: block;">
