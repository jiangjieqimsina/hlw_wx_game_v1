var __extends=this&&this.__extends||function(){var n=function(t,e){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))t[i]=e[i]};return n(t,e)};return function(t,e){if(typeof e!=="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}();var View=laya.ui.View;var Dialog=laya.ui.Dialog;var ui;(function(i){var t=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.createChildren=function(){t.prototype.createChildren.call(this);this.createView(i.HelpItemVIewUI.uiView)};e.uiView={type:"View",props:{width:100,height:100},child:[{type:"Image",props:{width:100,var:"img",height:100}}]};return e}(View);i.HelpItemVIewUI=t})(ui||(ui={}));(function(i){var t=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.createChildren=function(){View.regComponent("ui.HelpItemVIewUI",i.HelpItemVIewUI);t.prototype.createChildren.call(this);this.createView(i.HelpVIewUI.uiView)};e.uiView={type:"View",props:{width:536,height:104},child:[{type:"List",props:{width:536,var:"showlist",spaceX:5,repeatX:5,height:104,hScrollBarSkin:" "},child:[{type:"HelpItemVIew",props:{renderType:"render",runtime:"ui.HelpItemVIewUI"}}]}]};return e}(View);i.HelpVIewUI=t})(ui||(ui={}));(function(i){var t=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.createChildren=function(){t.prototype.createChildren.call(this);this.createView(i.PaiHangItemViewUI.uiView)};e.uiView={type:"View",props:{width:598,height:120},child:[{type:"Image",props:{width:598,var:"bg",skin:"assets/bg_jiugong_04new.png",sizeGrid:"29,24,30,27",height:120}},{type:"Image",props:{y:15,x:116,width:90,var:"img",height:90}},{type:"Label",props:{y:28,x:235,width:200,var:"playerName",text:"label",height:22,fontSize:22,color:"#567474",align:"left"}},{type:"Image",props:{y:38,x:481,width:100,var:"yaoqing",height:50}},{type:"Label",props:{y:68,x:235,width:200,var:"plus",text:"label",height:22,fontSize:22,color:"#567474",align:"left"}},{type:"Image",props:{y:33,x:40,width:47,var:"paimingImg",height:53}},{type:"Label",props:{y:46,x:16,width:100,var:"rankLabel",text:"label",height:22,fontSize:28,color:"#567474",align:"center"}}]};return e}(View);i.PaiHangItemViewUI=t})(ui||(ui={}));(function(i){var t=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.createChildren=function(){View.regComponent("ui.PaiHangItemViewUI",i.PaiHangItemViewUI);t.prototype.createChildren.call(this);this.createView(i.PaiHangVIewUI.uiView)};e.uiView={type:"View",props:{width:648,height:1042},child:[{type:"List",props:{y:25,x:25,width:598,var:"showlist",vScrollBarSkin:" ",height:900},child:[{type:"PaiHangItemView",props:{renderType:"render",runtime:"ui.PaiHangItemViewUI"}}]},{type:"Sprite",props:{y:945,x:104,width:164,var:"yaoqing",height:57}}]};return e}(View);i.PaiHangVIewUI=t})(ui||(ui={}));(function(i){var t=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.createChildren=function(){View.regComponent("ui.PaiHangItemViewUI",i.PaiHangItemViewUI);t.prototype.createChildren.call(this);this.createView(i.PaiHangYaoQingViewUI.uiView)};e.uiView={type:"View",props:{width:598,height:600},child:[{type:"List",props:{width:598,var:"plist",vScrollBarSkin:" ",height:600},child:[{type:"PaiHangItemView",props:{renderType:"render",runtime:"ui.PaiHangItemViewUI"}}]}]};return e}(View);i.PaiHangYaoQingViewUI=t})(ui||(ui={}));(function(i){var t=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.createChildren=function(){t.prototype.createChildren.call(this);this.createView(i.YaoQingItemViewUI.uiView)};e.uiView={type:"View",props:{width:598,height:120},child:[{type:"Image",props:{width:598,var:"bg",skin:"assets/bg_jiugong_04new.png",sizeGrid:"29,24,30,27",height:120}},{type:"Image",props:{y:15,x:24,width:90,var:"img",height:90}},{type:"Label",props:{y:49,x:143,width:248,var:"playerName",text:"label",height:22,fontSize:22,color:"#567474",align:"left"}},{type:"Image",props:{y:35,x:401,width:164,var:"yaoqing",skin:"assets/btn.png",height:57}},{type:"Label",props:{y:52,x:401,width:164,var:"plus",text:"邀请",height:22,fontSize:26,color:"#d3762e",align:"center"}}]};return e}(View);i.YaoQingItemViewUI=t})(ui||(ui={}));var __extends=this&&this.__extends||function(){var n=function(t,e){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))t[i]=e[i]};return n(t,e)};return function(t,e){if(typeof e!=="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}();var sub;(function(n){var i=false;function e(t,e){if(t&&t.KVDataList){for(var i=0;i<t.KVDataList.length;i++){var n=t.KVDataList[i];if(n["key"]==e){return parseInt(n["value"])}}}return 0}function a(t){return e(t,"score")}function r(t,e){var i=a(t);var n=a(e);if(i>n){return-1}else if(i<n){return 1}return 0}var o=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.prototype.initialize=function(){t.prototype.initialize.call(this)};e.prototype.setData=function(t,e){this._vo=t;this.yaoqing.visible=false;this.hitArea=new Laya.Rectangle(0,0,this.width,this.height);var i=t;this.img.skin=i.avatarUrl;if(e<=2){this.rankLabel.text="";this.paimingImg.skin="assets/bg_paiming_".concat(e+1,".png")}else{this.rankLabel.text=(e+1).toString();this.paimingImg.skin=""}this.playerName.text=i.nickname;this.plus.text=a(this._vo).toString()};return e}(ui.PaiHangItemViewUI);var s=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.prototype.initialize=function(){t.prototype.initialize.call(this);this.hitArea=new Laya.Rectangle(0,0,this.width,this.height);this.yaoqing.hitArea=new Laya.Rectangle(0,0,this.yaoqing.width,this.yaoqing.height);this.yaoqing.on(Laya.Event.CLICK,this,this.onYaoQing)};e.prototype.onYaoQing=function(){n.wx.shareMessageToFriend({openId:this.curData.openid,title:"葫芦娃"})};e.prototype.setData=function(t){var e=t;this.curData=t;this.img.skin=e.avatarUrl;this.playerName.text=e.nickname};return e}(ui.YaoQingItemViewUI);var h=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.prototype.initialize=function(){t.prototype.initialize.call(this);this.plist.itemRender=s;this.plist.renderHandler=new Laya.Handler(this,this.onRenderHandler);this.on(Laya.Event.DISPLAY,this,this.onDisplay);this.graphics.drawRect(0,0,this.width,this.height,"#ffffff")};e.prototype.onRenderHandler=function(t){t.setData(t.dataSource)};e.prototype.onDisplay=function(){this.x=(Laya.stage.width-this.width)/2;this.y=(Laya.stage.height-this.height)/2;var i=this;i.plist.array=[];i.plist.scrollTo(0);n.wx.getPotentialFriendList({success:function(t){var e=t.list||[];i.plist.array=e}})};return e}(ui.PaiHangYaoQingViewUI);var t=function(e){__extends(t,e);function t(){var t=e!==null&&e.apply(this,arguments)||this;t.maskV=new Laya.Sprite;return t}t.prototype.initialize=function(){this.showlist.itemRender=o;this.showlist.renderHandler=new Laya.Handler(this,this.onRenderHandler);this.showlist.array=[];this.on(Laya.Event.DISPLAY,this,this.onDisplay);this.on(Laya.Event.UNDISPLAY,this,this.onUnDisplay);if(i){this.graphics.drawRect(0,0,this.width,this.height,null,"#ff0000",1);this.yaoqing.graphics.drawRect(0,0,this.yaoqing.width,this.yaoqing.height,"#ff0000")}this.yaoqing.hitArea=new Laya.Rectangle(0,0,this.yaoqing.width,this.yaoqing.height);this.yaoqing.on(Laya.Event.CLICK,this,this.onYaoQingHandler)};t.prototype.onMaskClick=function(){if(this.yaoqinView){this.yaoqinView.removeSelf()}this.maskV.removeSelf()};t.prototype.onYaoQingHandler=function(){this.maskV.hitArea=new Laya.Rectangle(0,0,Laya.stage.width,Laya.stage.height);this.maskV.on(Laya.Event.CLICK,this,this.onMaskClick);Laya.stage.addChild(this.maskV);if(!this.yaoqinView){this.yaoqinView=new h}Laya.stage.addChild(this.yaoqinView)};t.prototype.refreshFriend=function(){var i=this;n.wx.getFriendCloudStorage({keyList:["score"],success:function(t){console.log(t);var e=[];if(t.data&&t.data.length>0){e=t.data;e=e.sort(r)}i.showlist.array=e}})};t.prototype.onDisplay=function(){this.callLater(this.onMyCallter)};t.prototype.onMyCallter=function(){var t=this;this.refreshFriend()};t.prototype.onUnDisplay=function(){if(this.yaoqinView){this.yaoqinView.removeSelf()}};t.prototype.onRenderHandler=function(t,e){t.setData(t.dataSource,e)};return t}(ui.PaiHangVIewUI);n.HlwRankView=t})(sub||(sub={}));var __extends=this&&this.__extends||function(){var n=function(t,e){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))t[i]=e[i]};return n(t,e)};return function(t,e){if(typeof e!=="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}();var sub;(function(n){var t=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.prototype.initialize=function(){this.showlist.itemRender=ui.HelpItemVIewUI;this.showlist.renderHandler=new Laya.Handler(this,this.onRenderHandler);this.on(Laya.Event.DISPLAY,this,this.onDisplay);this.on(Laya.Event.UNDISPLAY,this,this.onUnDisplay)};e.prototype.onDisplay=function(){this.x=(Laya.stage.width-this.width)/2;this.y=(Laya.stage.height-this.height)/2;var i=this;n.wx.getFriendCloudStorage({keyList:["help"],success:function(t){console.log(t);var e=[];if(t.data&&t.data.length>0){e=t.data}i.showlist.array=e.reverse()}})};e.prototype.onUnDisplay=function(){};e.prototype.onRenderHandler=function(t,e){console.log(t.dataSource);t.img.skin=t.dataSource.avatarUrl};return e}(ui.HelpVIewUI);n.HlwHelpView=t})(sub||(sub={}));var sub;(function(c){c.wx=window["wx"];var t=function(){function t(){this.winKey={};var p=this;c.wx.onMessage(function(t){var e=t["type"];console.log((new Date).getTime()/1e3+"message:"+JSON.stringify(t));switch(e){case-1:Laya.MiniAdpter.init(true,true);Laya.init(t["data"].width,t["data"].height);Laya.stage.bgColor=null;var i=t["data"].matrix;var n=new Laya.Matrix;n.a=i.a;n.b=i.b;n.c=i.c;n.d=i.d;Laya.stage._canvasTransform=n;console.log("初始开放域舞台!!!!");break;case 0:for(var a in p.winKey){var r=p.winKey[a];r.removeSelf()}break;case 1:p.show(t);break;case 2:var o=t["texture"];console.log(o);var s=new Laya.Image;Laya.stage.addChild(s);break;case 3:var h;var l=c.wx.getGameServerManager();l.getFriendsStateData({success:function(t){h=t.list;console.log((new Date).getTime()/1e3+" ##获取好友列表",h)},fail:function(t){console.error("获取好友列表失败")}});break}})}t.prototype.show=function(t){var e=t.expandData;var i=e.ui.split(".")[1];var n;if(this.winKey[i]){n=this.winKey[i]}else{n=new c[i];this.winKey[i]=n}n.x=e.x;n.y=e.y;n.scaleX=n.scaleY=e.uiScale||1;n.dataSource=e.data;Laya.stage.addChild(n)};return t}();new t})(sub||(sub={}));