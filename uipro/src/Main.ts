namespace wxmi {
    let wx:IWeiXin = window["wx"];
    interface IWeiXin{
        postMessage(obj);
        getGameServerManager();
    }
    /**
     * 微信主域用于绘制sharedCanvas
     */
    export class DrawSprite extends Laya.Sprite {
        constructor() {
            super();
            let sharedCanvas = Laya.Browser.window.sharedCanvas;
            // let hc=sharedCanvas;
            if (sharedCanvas) {
                if (!sharedCanvas._addReference) {
                    //laya.core.js 14372 _addReference接口未定义
                    sharedCanvas._addReference = function () {
                    }
                }
                // this.pos(0, 0);
                var texture: Laya.Texture = new Laya.Texture(sharedCanvas);
                texture.bitmap.alwaysChange = true;//小程序使用，非常费，这个参数可以根据自己的需求适当调整，如果内容不变可以不用设置成true
                this.graphics.drawTexture(texture, 0, 0, texture.width, texture.height);
            }
        }
    }
    /**
     * 微信游戏服务器管理器
     */
    class WxGameServerManager {

        constructor() {

            const m = wx.getGameServerManager()
            m.login().then(() => {
                // console.warn('游戏服务登录成功');
                m.startStateService({
                    userState: 'start',
                    success: () => {
                        // console.log('开启状态管理服务成功');
                        wx.postMessage({type:3});
                    },
                    fail: res => {
                        console.error('开启状态管理服务失败', res)
                    }
                })
            }).catch(err => {
                console.warn('游戏服务登录失败', err);
            })
        }

        public openWxSever(){

        }
    }
    class Main{
        private drawSprite:DrawSprite;
        private isOpen:boolean = false;
        /**
         * 主域初始化,打开界面
         */
        public open(_cls:string):void{
            this.initStage();
            wx.postMessage({type:1,cls:_cls});
            if(!this.drawSprite){
                this.drawSprite = new DrawSprite();
            }
            Laya.stage.addChild(this.drawSprite);
        }

        /**
         * 初始化开放域舞台
         */
        public initStage():void{
            if(!this.isOpen){
                let sharedCanvas=Laya.Browser.window.sharedCanvas;
                sharedCanvas.width = Laya.stage.width;
                sharedCanvas.height = Laya.stage.height;
                wx.postMessage({ type: -1, data: { width: Laya.stage.width, height: Laya.stage.height, matrix: Laya.stage._canvasTransform } });
                    // this.isInit = true;
                this.isOpen = true;    
            }
        }

        /**
         * 清空sharedCanvas
         */
        public clear():void{
            this.isOpen = false;
            let sharedCanvas=Laya.Browser.window.sharedCanvas;
            sharedCanvas.width = 1;
            sharedCanvas.height = 1;
            wx.postMessage({type:0});
            if(this.drawSprite){
                this.drawSprite.removeSelf();
            }
        }
    }

    class MaskClickView extends Laya.Sprite{
        private closeBtn:Laya.Sprite = new Laya.Sprite();
        
        constructor(){
            super();
            this.graphics.drawRect(0,0,Laya.stage.width,Laya.stage.height,"#00ff00");
            this.addChild(this.closeBtn);
        }

        private onClose():void{
            this.closeBtn.off(Laya.Event.CLICK,this,this.onClose);
            this.removeSelf();
            main.clear();
        }

        public setCloseBtn(x,y,w,h):void{
            this.hitArea = new Laya.Rectangle(0,0,Laya.stage.width,Laya.stage.height);
            this.closeBtn.x = x;
            this.closeBtn.y = y;
            this.closeBtn.graphics.drawRect(0,0,w,h,"#ff0000");
            this.closeBtn.hitArea = new Laya.Rectangle(0,0,w,h);
            this.closeBtn.on(Laya.Event.CLICK,this,this.onClose);
        }
    }

    let maskClick = new MaskClickView();    
    let main = new Main();
    
    //微信游戏服务器
    // new WxGameServerManager();

    ////////////////////////////////////////////////////////
    window["tr_openSub"]=function(x,y,w,h,ui){
        maskClick.setCloseBtn(x,y,w,h);//设置关闭按钮的位置和宽高
        Laya.stage.addChild(maskClick);
        main.open(ui);
    }
/*
    Laya.stage.on(Laya.Event.MOUSE_UP,window,(e)=>{
        // window["tr_openSub"](50,50,100,100,"sub.HlwRankView");

        window["tr_openSub"](50,50,100,100,"sub.MyTestView");


        // let str:string = "data:image/png;base64,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";
        // let img:Laya.Image = new Laya.Image();
        // img.skin = str;
        // Laya.stage.addChild(img);

        


        // Laya.loader.load("https://test1.webgame.zhaouc.com/djs_hulu/assets/base/res/static/btn_guanbi.png",new Laya.Handler(window,(e)=>{
        //     let res = Laya.loader.getRes("https://test1.webgame.zhaouc.com/djs_hulu/assets/base/res/static/btn_guanbi.png");
        //     window["tr_openSub"](50,50,100,100,"sub.MyTestView");
        //     wx.postMessage({type:2,texture:res});
        // }));

        //window["tr_openSub"](50,50,100,100,"sub.MyTestView");
        
        // main.initStage();
        // let str:string = "data:image/png;base64,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";
        // wx.postMessage({type:2,texture:str});
        
    });
*/
    
}



