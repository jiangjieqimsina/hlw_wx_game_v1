var __extends=this&&this.__extends||function(){var n=function(t,e){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))t[i]=e[i]};return n(t,e)};return function(t,e){if(typeof e!=="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}();var View=laya.ui.View;var Dialog=laya.ui.Dialog;var ui;(function(i){var t=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.createChildren=function(){t.prototype.createChildren.call(this);this.createView(i.PaiHangItemViewUI.uiView)};e.uiView={type:"View",props:{width:400,height:150},child:[{type:"Image",props:{y:24,width:100,var:"img",height:100}},{type:"Label",props:{y:73,x:288,width:80,var:"rank",text:"label",height:12,fontSize:32,color:"#ffffff",align:"center"}},{type:"Label",props:{y:73,x:113,width:186,var:"playerName",text:"label",height:12,fontSize:32,color:"#ffffff",align:"center"}}]};return e}(View);i.PaiHangItemViewUI=t})(ui||(ui={}));(function(i){var t=function(t){__extends(e,t);function e(){return t.call(this)||this}e.prototype.createChildren=function(){View.regComponent("ui.PaiHangItemViewUI",i.PaiHangItemViewUI);t.prototype.createChildren.call(this);this.createView(i.PaiHangVIewUI.uiView)};e.uiView={type:"View",props:{width:400,height:200},child:[{type:"List",props:{width:400,var:"showlist",vScrollBarSkin:" ",height:200},child:[{type:"PaiHangItemView",props:{renderType:"render",runtime:"ui.PaiHangItemViewUI"}}]}]};return e}(View);i.PaiHangVIewUI=t})(ui||(ui={}));var __extends=this&&this.__extends||function(){var n=function(t,e){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))t[i]=e[i]};return n(t,e)};return function(t,e){if(typeof e!=="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");n(t,e);function i(){this.constructor=t}t.prototype=e===null?Object.create(e):(i.prototype=e.prototype,new i)}}();var sub;(function(t){var n=window["wx"];var e=function(){function t(){this.isInit=false;var a=this;n.onMessage(function(t){var e=t["type"];console.log("type:"+e);switch(e){case 1:if(!a.rankView){a.rankView=new r}Laya.stage.addChild(a.rankView);break;case 0:if(!a.rankView){a.rankView=new r}a.rankView.removeSelf();break;case-1:if(!a.isInit){Laya.MiniAdpter.init(true,true);Laya.init(t["data"].width,t["data"].height);Laya.stage.bgColor=null;a.isInit=true}var i=t["data"].matrix;var n=new Laya.Matrix;n.a=i.a;n.b=i.b;n.c=i.c;n.d=i.d;Laya.stage._canvasTransform=n;console.log("初始开放域舞台!!!!");break}})}return t}();var r=function(t){__extends(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}e.prototype.initialize=function(){this.showlist.itemRender=ui.PaiHangItemViewUI;this.showlist.renderHandler=new Laya.Handler(this,this.onRenderHandler);this.on(Laya.Event.DISPLAY,this,this.onDisplay);this.on(Laya.Event.UNDISPLAY,this,this.onUnDisplay);this.graphics.drawRect(0,0,this.width,this.height,null,"#ff0000",1)};e.prototype.onDisplay=function(){this.x=(Laya.stage.width-this.width)/2;this.y=(Laya.stage.height-this.height)/2;console.log("HlwRankView!!!");var i=this;n.getFriendCloudStorage({keyList:["score"],success:function(t){console.log(t);var e=[];if(t.data&&t.data.length>0){e=t.data}i.showlist.array=e}})};e.prototype.onUnDisplay=function(){};e.prototype.onRenderHandler=function(t,e){t.hitArea=new Laya.Rectangle(0,0,t.width,t.height);var i=t.dataSource;t.img.skin=i.avatarUrl;t.playerName.text=i.nickname};return e}(ui.PaiHangVIewUI);new e})(sub||(sub={}));