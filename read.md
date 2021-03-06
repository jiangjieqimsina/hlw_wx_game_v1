# 说明
Main.ts主域启动入口  
> 主域的逻辑全在Main.ts接口内，所以的游戏域的扩展都可以在Main.ts实现

Sub.ts开放域启动入口

# 添加需要的模块路径
 
> 所有子域代码的路径,和游戏域是分离的,下列配置相当于将sub/HlwRankView.js合并到sub.js模块中.

文件module.json配置 
```
{
    "path":[
        "sub/HlwRankView"
    ]
}
```


# tr_wx_openSub  
说明:游戏域(主域)来调用子域打开一个界面,或者清空子域画布。

* 打开界面
```
//在容器app.AppContainer.zhezhaoLayer添加组件sub.HlwRankView(); "data"为扩展数据
var pos = this.panelgonggao.parent.localToGlobal(new Laya.Point(this.panelgonggao.x,this.panelgonggao.y));
var obj = {
    x:pos.x,
    y:pos.y,
    ui:"sub.HlwRankView",
    data:"This is My Data",
    parent:app.AppContainer.zhezhaoLayer
}
window["tr_wx_openSub"](obj);
```
在sub.HlwRankView.ts使用扩展数据
```
...
private onDisplay(): void {
    this.callLater(this.onMyCallter);
}
private onMyCallter(): void {
    console.log('this is dataSource:[' + this.dataSource + "]");
}
```
<!-- 
`tr_wx_openSub(ui="",pos_x=0,pos_y,uiScale=1.0,close_x=0,close_y=0,close_w=0,close_h=0)`
```
//打开一个开放域的界面到开发域舞台坐标0,0,关闭按钮的坐标为50,50,在舞台中的位置为100,100,界面缩放为1.2比率。  
window["tr_wx_openSub"]("sub.HlwRankView",0,0,1.2,50,50,100,100);

//打开界面,坐标设置在舞台10,10位置,关闭按钮不设置坐标的和宽高时候,默认没有关闭区域,可以通过window["tr_wx_openSub"]("clearCanvas")关闭。  
window["tr_wx_openSub"]("sub.HlwRankView",10,10);
// 

``` -->
* 清空画布和舞台  
*在使用完界面之后,移除界面的时候使用。* 
```
window["tr_wx_openSub"]("clearCanvas");
```  
    
# tr_wx_ui
显示(隐藏)在开放域舞台  
`window["tr_wx_ui"]("sub.HlwRankView",true);`  
`window["tr_wx_ui"]("sub.HlwRankView",false);`

# tr_wx_game_share
开放域中的游戏定制分享接口
```
window['tr_wx_game_share'](openid);
```

# 注意事项
* 1.`开放域是不可以加载远程资源的`,子域可以调用主域中的asset文件中的资源,  文件结构`asset/Loading.png`  

* 2.开放数据域不能调用网络、存储、文件等 API

示例代码:
```
namespace sub
{
    export class MyTestView extends Laya.Image{
        constructor(){
            super();
            this.skin = "assets/Loading.png";
        }
    }
    ...
}
```

* 3.异常`TypeError: wx.getFileSystemManager is not a function`说明开发域中未开放此接口
```
VM1332 WAGame.js:2 TypeError: wx.getFileSystemManager is not a function
    at Function.<anonymous> (laya.wxmini.min.js:313)
    at Function.get (laya.core.min.js:194)
    at Function.i.readFile (laya.wxmini.min.js:137)
    at e.load (laya.wxmini.min.js:542)
    at e.n._doLoad (laya.core.min.js:5702)
    at e.n._next (laya.core.min.js:5683)
    at e.n.load (laya.core.min.js:5662)
    at e.<anonymous> (laya.ui.min.js:1214)
    at new e (subout.js:1)
    at e.show (subout.js:1)(env: Windows,mg,1.05.2202234; lib: 2.23.1)
```
开放域中的代码
```
export class MyTestView extends Laya.Image{
    constructor(){
        super();
        // this.skin = "assets/Loading.png";
        let str:string = "data:image/png;base64,iVBORw0KGgo...";
        this.skin= str;
    }
}
```
`wx.getFileSystemManager接口文档`  
[https://developers.weixin.qq.com/minigame/dev/api/file/wx.getFileSystemManager.html]

# 好友列表相关
[https://developers.weixin.qq.com/minigame/dev/guide/open-ability/user-status.html#拉取在线好友列表]
