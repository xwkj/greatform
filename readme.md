# greatForm插件
----
## 1.原因
众所周知表单中的很多元素很难被css所渲染控制。
> **input[type="radio"] 不受背景色 字体 边框等样式影响** <br>
> **input[type="checkbox"] 不受背景色 字体 边框等样式影响**

想做出这样的效果的自定义单选 复选框 [demo](http://www.bootcss.com/p/icheck/#demo) 利用传统的按钮是断然不能的。

可选方案:

1. div特效 直接利用诸如div标记实现仅仅是个特效而已
		
		源码制作过程中不用写input元素，利用div标记上添加事件修改样式的方式实现，
		提交数据用创建input[type="hidden"] 或者利用表单提交事件之前追加数据的
		方式。这种方式处理方便，但是提交数据的时候需要单独处理

2. input替换 

		源码制作过程中需要制作input标记 可以使用标记替换，

3. input隐藏

## 2.原理
* 该项目利用了检索替换原理

		<input type="checkbox" name="k" value="1"/>
		替换后
		
* 该项目目标是改善复选单选按钮的自定义表现
1.我这个项目目的是什么
  该比较丑陋checkbox
2.我这个项目文件组成
  greateForm.js主要文件
  demo.html 告诉如何使用
  注意:放到网页最后
## 2.组成

## 3.如何

## 4.作者
作者: [魏武](http://xwkj.org.cn)
