(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{287:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h5",{attrs:{id:"javascript进阶知识-05"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript进阶知识-05","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript进阶知识-05")]),t._v(" "),s("p",[t._v("JavaScript进阶知识")]),t._v(" "),s("h1",{attrs:{id:"_05-面向对象继承-笔记"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_05-面向对象继承-笔记","aria-hidden":"true"}},[t._v("#")]),t._v(" 05-面向对象继承-笔记")]),t._v(" "),s("h2",{attrs:{id:"一-高阶函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-高阶函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 一.高阶函数")]),t._v(" "),s("h3",{attrs:{id:"_1-1-函数作为函数参数【重要】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-函数作为函数参数【重要】","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.1 函数作为函数参数【重要】")]),t._v(" "),s("p",[t._v("回调函数")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("参数")]),t._v(" "),s("ul",[s("li",[t._v("形参：函数定义时，小括号中的标识符")]),t._v(" "),s("li",[t._v("实参：函数调用时，小括号中实际的数据")]),t._v(" "),s("li",[t._v("关系：实参代表的实际数据传递给函数内部的形参使用。")]),t._v(" "),s("li",[t._v("应用场景：当外部向函数内部传入数据时。")])])]),t._v(" "),s("li",[s("p",[t._v("现象：把一个函数B当做实参，传递给另一个函数的A的形参，并在函数A内部调用")])]),t._v(" "),s("li",[s("p",[t._v("代码：")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义函数A")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// v是形参")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("v")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-函数作为函数的返回值【理解】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-函数作为函数的返回值【理解】","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.2 函数作为函数的返回值【理解】")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("关键字：return 数据;")])]),t._v(" "),s("li",[s("p",[t._v("应用：函数内部要把结果暴露给外部时使用返回值")])]),t._v(" "),s("li",[s("p",[t._v("代码：")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 【返回值是函数时】")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我是内部的的函数'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用函数")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" r "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("r")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])])])])]),t._v(" "),s("h3",{attrs:{id:"_1-3-案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.3 案例")]),t._v(" "),s("ol",[s("li",[t._v("模拟动画完成后-对之前的动画封装升级")])]),t._v(" "),s("h2",{attrs:{id:"二-闭包【理解】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-闭包【理解】","aria-hidden":"true"}},[t._v("#")]),t._v(" 二.闭包【理解】")]),t._v(" "),s("h3",{attrs:{id:"_2-1-为什么要学习闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-为什么要学习闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.1 为什么要学习闭包")]),t._v(" "),s("ul",[s("li",[t._v("变量的生命周期：什么时候在内存中被释放")]),t._v(" "),s("li",[t._v("全局变量的生命周期：程序关闭。")]),t._v(" "),s("li",[t._v("局部变量的生命周期：函数执行结束后。")]),t._v(" "),s("li",[t._v("作用域：\n"),s("ul",[s("li",[t._v("内层 可以 访问 外层，反之不行")]),t._v(" "),s("li",[t._v("目的延长局部变量的生命周期")]),t._v(" "),s("li",[t._v("使用闭包。")]),t._v(" "),s("li",[t._v("GC（Garbage Collection）垃圾回收机制\n"),s("ul",[s("li",[t._v("回收没有用的数据。")]),t._v(" "),s("li",[t._v("有用的数据：被全局中操作的变量。")])])])])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-什么是闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-什么是闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.2 什么是闭包")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("MDN：闭包是函数和声明该函数的词法环境的组合。")])]),t._v(" "),s("li",[s("p",[t._v("百度百科：")]),t._v(" "),s("blockquote",[s("p",[t._v("​\t闭包就是能够读取其他函数内部变量的函数。例如在javascript中，只有函数内部的子函数才能读取"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%B1%80%E9%83%A8%E5%8F%98%E9%87%8F/9844788",target:"_blank",rel:"noopener noreferrer"}},[t._v("局部变量"),s("OutboundLink")],1),t._v("，所以闭包可以理解成“定义在一个"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%87%BD%E6%95%B0/301912",target:"_blank",rel:"noopener noreferrer"}},[t._v("函数"),s("OutboundLink")],1),t._v("内部的函数“。在本质上，闭包是将函数内部和函数外部连接起来的==桥梁==。")])])]),t._v(" "),s("li",[s("p",[t._v("自己总结：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("闭包：桥梁（卧底）")])]),t._v(" "),s("li",[s("p",[t._v("代码：")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 生活：藏在别墅中的三儿，被外部的朝阳群众操作了。")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bieShu")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'三儿'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 局部变量")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("guanJia")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 操作了外部的局部变量")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" guanJia"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回了子函数的地址")]),t._v("\n\n\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" cyqz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bieShu")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接收了子函数的地址")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cyqz")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br")])])])])])])]),t._v(" "),s("h3",{attrs:{id:"_2-3-闭包的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-闭包的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.3 闭包的作用")]),t._v(" "),s("ul",[s("li",[t._v("延长局部变量的生命周期")]),t._v(" "),s("li",[t._v("维护私有变量-局部变量的安全")])]),t._v(" "),s("h3",{attrs:{id:"_2-4-如何检测一个程序是否存在闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-如何检测一个程序是否存在闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.4 如何检测一个程序是否存在闭包")]),t._v(" "),s("p",[t._v("​    // 如何检测一个程序中是否有闭包？")]),t._v(" "),s("p",[t._v("​    // 1. 外层函数  和  子函数")]),t._v(" "),s("p",[t._v("​    // 2. 外层函数必须有局部变量")]),t._v(" "),s("p",[t._v("​    // 3. 子函数要操作外层函数的局部变量")]),t._v(" "),s("p",[t._v("​    // 4. 让子函数和外部产生关联。 // 关联不一定是返回函数  // 事件")]),t._v(" "),s("h3",{attrs:{id:"_2-5-案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.5 案例")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("简单的银行管理操作（存钱、取钱、查钱）")])]),t._v(" "),s("li",[s("p",[t._v("闭包经典案例，在页面上有一组元素（如按钮），点击哪个元素就显示哪个元素的索引")])]),t._v(" "),s("li",[s("p",[t._v("看下列代码，说出最终执行结果，并解释是否存在闭包")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The Window"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" object "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\nname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getNameFunc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n   console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNameFunc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])])]),t._v(" "),s("li",[s("p",[t._v("看下列代码，说出最终执行结果，并解释是否存在闭包")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The Window"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("　　\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" object "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("　　　　\nname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My Object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getNameFunc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" that "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("that"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getNameFunc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])])])]),t._v(" "),s("h2",{attrs:{id:"三-递归【了解】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-递归【了解】","aria-hidden":"true"}},[t._v("#")]),t._v(" 三.递归【了解】")]),t._v(" "),s("h3",{attrs:{id:"_3-1-什么是递归"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-什么是递归","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.1 什么是递归")]),t._v(" "),s("p",[t._v("递归：函数调用自身的编程技巧。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("官方概念")]),t._v(" "),s("blockquote",[s("p",[t._v("​\t"),s("strong",[t._v("程序调用自身的编程技巧称为递归（ recursion）")]),t._v("。递归做为一种"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E7%AE%97%E6%B3%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("算法"),s("OutboundLink")],1),t._v("在"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1%E8%AF%AD%E8%A8%80",target:"_blank",rel:"noopener noreferrer"}},[t._v("程序设计语言"),s("OutboundLink")],1),t._v("中广泛应用。 一个过程或"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[t._v("函数"),s("OutboundLink")],1),t._v("在其定义或说明中有直接或间接调用自身的一种方法，它通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解，递归策略只需少量的程序就可描述出解题过程所需要的多次重复计算，"),s("strong",[t._v("大大地减少了程序的代码量")]),t._v(" 。递归的能力在于用有限的"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E8%AF%AD%E5%8F%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("语句"),s("OutboundLink")],1),t._v("来定义对象的"),s("a",{attrs:{href:"https://baike.baidu.com/item/%E6%97%A0%E9%99%90%E9%9B%86%E5%90%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("无限集合"),s("OutboundLink")],1),t._v("。一般来说，递归需要有=="),s("strong",[t._v("边界条件")]),t._v("== 、=="),s("strong",[t._v("递归前进段")]),t._v("== 和=="),s("strong",[t._v("递归返回段")]),t._v("== 。当边界条件不满足时，递归前进；当边界条件满足时，递归返回。")])])]),t._v(" "),s("li",[s("p",[t._v("趣味理解递归")]),t._v(" "),s("blockquote",[s("p",[t._v("天下有奇族人姓计，长生不老。一日其孙问其父：吾之18代祖名何？")]),t._v(" "),s("p",[t._v("其父不明，父问其父")]),t._v(" "),s("p",[t._v("其父不明，父问其父")]),t._v(" "),s("p",[t._v("其父不明，父问其父")]),t._v(" "),s("p",[t._v("其父不明，父问其父")]),t._v(" "),s("p",[t._v("...")]),t._v(" "),s("p",[t._v("晌后，其18代祖回其子：你猜")]),t._v(" "),s("p",[t._v("然其回其子：你猜")]),t._v(" "),s("p",[t._v("然其回其子：你猜")]),t._v(" "),s("p",[t._v("然其回其子：你猜")]),t._v(" "),s("p",[t._v("然其回其子：你猜")]),t._v(" "),s("p",[t._v("...")]),t._v(" "),s("p",[t._v("终，计姓末代孙知其18代祖名“你猜”")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-2-递归的三个阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-递归的三个阶段","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.2 递归的三个阶段")]),t._v(" "),s("ul",[s("li",[t._v("递归前进段")]),t._v(" "),s("li",[t._v("递归边界条件")]),t._v(" "),s("li",[t._v("递归返回段")])]),t._v(" "),s("p",[t._v("如：一组有规律的年龄10 、12、14、16、18、20、22、24......，求第n个人的年龄")]),t._v(" "),s("h3",{attrs:{id:"_3-3-递归的作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-递归的作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.3 递归的作用")]),t._v(" "),s("p",[t._v("​\t减少代码量")]),t._v(" "),s("h3",{attrs:{id:"_3-4-案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.4 案例")]),t._v(" "),s("ol",[s("li",[t._v("一组有规律的年龄10 、12、14、16、18、20、22、24......，求第n个人的年龄")]),t._v(" "),s("li",[t._v("一组有规律的数字1、1、2、3、5、8、13....，求第n个数字")])])])},[],!1,null,null,null);a.default=r.exports}}]);