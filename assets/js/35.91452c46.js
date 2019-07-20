(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{279:function(s,e,a){"use strict";a.r(e);var n=a(0),t=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h5",{attrs:{id:"javascript-jquery-04"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript-jquery-04","aria-hidden":"true"}},[s._v("#")]),s._v(" JavaScript-jQuery-04")]),s._v(" "),a("p",[s._v("JavaScript-jQuery")]),s._v(" "),a("h2",{attrs:{id:"jquery-事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-事件","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("strong",[s._v("jQuery")]),s._v(" "),a("strong",[s._v("事件")])]),s._v(" "),a("p",[s._v("目标：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("能够说出4种常见的注册事件 \n\n能够说出 on 绑定事件的优势\n\n能够说出 jQuery 事件委派的优点以及方式\n\n能够说出绑定事件与解绑事件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"jquery事件注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery事件注册","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("strong",[s._v("jQuery")]),s._v("事件注册**")]),s._v(" "),a("blockquote",[a("p",[s._v("语法：element.事件(function(){})")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$(“div”).click(function(){  事件处理程序 }) \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("其他事件和原生基本一致。")]),s._v(" "),a("p",[s._v("比如mouseover、mouseout、blur、focus、change、keydown、keyup、resize、scroll 等")])]),s._v(" "),a("h3",{attrs:{id:"事件处理-on-绑定事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理-on-绑定事件","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("strong",[s._v("事件处理")]),s._v(" "),a("strong",[s._v("on()")]),s._v(" "),a("strong",[s._v("绑定事件")])]),s._v(" "),a("blockquote",[a("p",[s._v("on() 方法在匹配元素上绑定一个或多个事件的事件处理函数")])]),s._v(" "),a("blockquote",[a("p",[s._v("语法：element.on(events,[selector],fn)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('\\1. events:一个或多个用空格分隔的事件类型，如"click"或"keydown" 。\n\n\\2. selector: 元素的子元素选择器 。\n\n\\3. fn:回调函数 即绑定在元素身上的侦听函数。 \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("on() 方法优势1：")])]),s._v(" "),a("p",[s._v("1、可以绑定多个事件，多个处理事件处理程序。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" $(“div”).on({\n\n  mouseover: function(){}, \n\n  mouseout: function(){},\n\n  click: function(){}  \n\n});       \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("on() 方法优势2：")])]),s._v(" "),a("blockquote",[a("p",[s._v("可以事件委派操作。事件委派的定义就是，把原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$('ul').on('click', 'li', function() {\n\n​    alert('hello world!');\n\n}); \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("blockquote",[a("p",[s._v("在此之前有bind(), live()，delegate()等方法来处理事件绑定或者事件委派，最新版本的请用on替代他们。")])]),s._v(" "),a("p",[a("strong",[s._v("on() 方法优势3：")])]),s._v(" "),a("blockquote",[a("p",[s._v("动态创建的元素，click()没有办法绑定事件，on() 可以给动态生成的元素绑定事件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' $(“div").on("click",”p”, function(){\n\n​     alert("俺可以给动态生成的元素绑定事件")\n\n });\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"案例：发布微博案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#案例：发布微博案例","aria-hidden":"true"}},[s._v("#")]),s._v(" 案例：发布微博案例")]),s._v(" "),a("blockquote",[a("p",[s._v("①点击发布按钮， 动态创建一个小li，放入文本框的内容和删除按钮， 并且添加到ul 中。")]),s._v(" "),a("p",[s._v("②点击的删除按钮，可以删除当前的微博留言。")])]),s._v(" "),a("h3",{attrs:{id:"事件处理-off-解绑事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件处理-off-解绑事件","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("strong",[s._v("事件处理")]),s._v(" "),a("strong",[s._v("off()")]),s._v(" "),a("strong",[s._v("解绑事件")])]),s._v(" "),a("blockquote",[a("p",[s._v("off() 方法可以移除通过 on() 方法添加的事件处理程序。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$("p").off() // 解绑p元素所有事件处理程序\n\n$("p").off( "click")  // 解绑p元素上面的点击事件 后面的 foo 是侦听函数名\n\n$("ul").off("click", "li");   // 解绑事件委托\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("blockquote",[a("p",[s._v("如果有的事件只想触发一次， 可以使用 one()来绑定事件。")])]),s._v(" "),a("h3",{attrs:{id:"自动触发事件trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动触发事件trigger","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("strong",[s._v("自动触发事件trigger()")])]),s._v(" "),a("blockquote",[a("p",[s._v("有些事件希望自动触发, 比如轮播图自动播放功能跟点击右侧按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发")])]),s._v(" "),a("blockquote",[a("p",[s._v("element.click()  // 第一种简写形式")])]),s._v(" "),a("blockquote",[a("p",[s._v('element.trigger("type")//第二种自动触发模式')])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('$("p").on("click", function () {\n\n  alert("hi~");\n\n}); \n\n$("p").trigger("click"); // 此时自动触发点击事件，不需要鼠标点击\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("blockquote",[a("p",[s._v("element.triggerHandler(type)  // 第三种自动触发模式")])]),s._v(" "),a("blockquote",[a("p",[s._v("triggerHandler模式不会触发元素的默认行为，这是和前面两种的区别。")])]),s._v(" "),a("h2",{attrs:{id:"jquery事件对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery事件对象","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("strong",[s._v("jQuery")]),s._v("事件对象")]),s._v(" "),a("blockquote",[a("p",[s._v("事件被触发，就会有事件对象的产生。\n【event==》事件对象】")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("element.on(events,[selector],function(event){})       \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("阻止默认行为：event.preventDefault()   或者 return  false \n\n阻止冒泡： event.stopPropagation()      \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"jquery-其他方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-其他方法","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("strong",[s._v("jQuery")]),s._v(" "),a("strong",[s._v("其他方法")])]),s._v(" "),a("blockquote",[a("p",[s._v("jQuery 插件")])]),s._v(" "),a("h3",{attrs:{id:"jquery插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery插件","aria-hidden":"true"}},[s._v("#")]),s._v(" "),a("strong",[s._v("jQuery")]),s._v("插件**")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("jQuery 功能比较有限，想要更复杂的特效效果，可以借助于 jQuery 插件完成。 \n\n注意: 这些插件也是依赖于jQuery来完成的，所以必须要先引入jQuery文件，因此也称为 jQuery 插件。\n\n**jQuery** **插件常用的网站：**\n\n1.  jQuery 插件库  http://www.jq22.com/     \n\n2.  jQuery 之家   http://www.htmleaf.com/  \n\n**jQuery** **插件使用步骤：**\n\n1.  引入相关文件。（jQuery 文件 和 插件文件）[jQuery.js、JS文件]    \n\n2.  复制相关html、css、js (调用插件)。\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"图片懒加载或者（bootstrap插件）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片懒加载或者（bootstrap插件）","aria-hidden":"true"}},[s._v("#")]),s._v(" 图片懒加载或者（BOOTSTRAP插件）")]),s._v(" "),a("p",[s._v("（图片使用延迟加载在可提高网页下载速度。它也能帮助减轻服务器负载）")]),s._v(" "),a("p",[s._v("当我们页面滑动到可视区域，再显示图片。")]),s._v(" "),a("p",[s._v("我们使用jquery 插件库  EasyLazyload。 注意，此时的js引入文件和js调用必须写到 DOM元素（图片）最后面")]),s._v(" "),a("p",[s._v("注意：")]),s._v(" "),a("p",[s._v("​\t1、要引入JQuery")]),s._v(" "),a("p",[s._v("​\t2、插件JS【js引入文件和js调用必须写到 DOM元素（图片）最后面】")]),s._v(" "),a("p",[s._v("​\t3、将图片 src 替换为 data-lazy-src")]),s._v(" "),a("p",[s._v("​\t4、调用lazyLoadInit(）")]),s._v(" "),a("h3",{attrs:{id:"bootstrap插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap插件","aria-hidden":"true"}},[s._v("#")]),s._v(" BOOTSTRAP插件")]),s._v(" "),a("p",[s._v("​\t1、引入CSS、引入JQ、引入JS")]),s._v(" "),a("p",[s._v("​\t2、.container")]),s._v(" "),a("p",[s._v("​\t3、复制粘贴")]),s._v(" "),a("h3",{attrs:{id:"jquery多库共存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery多库共存","aria-hidden":"true"}},[s._v("#")]),s._v(" jQuery多库共存")]),s._v(" "),a("p",[s._v("jQuery使用$作为标示符，随着jQuery的流行,其他 js 库也会用这$作为标识符，\n这样一起使用会引起冲突。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("需要一个解决方案，让jQuery 和其他的js库不存在冲突，可以同时存在，这就叫做多库共存。\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("strong",[s._v("jQuery")]),s._v(" "),a("strong",[s._v("解决方案：")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("把里面的 $ 符号 统一改为 jQuery。 比如 jQuery(''div'')\n\njQuery 变量规定新的名称：$.noConflict()        var xx = $.noConflict();\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])},[],!1,null,null,null);e.default=t.exports}}]);