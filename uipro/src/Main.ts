namespace wxmi {
    let wx:IWeiXin = window["wx"];
    interface IWeiXin{
        postMessage(obj);
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

    export class Main{
        private drawSprite:DrawSprite;
        private isOpen:boolean = false;
        /**
         * 主域初始化,打开界面
         */
        public open(_cls:string):void{
 
            if(!this.isOpen){
                let sharedCanvas=Laya.Browser.window.sharedCanvas;
                sharedCanvas.width = Laya.stage.width;
                sharedCanvas.height = Laya.stage.height;
                wx.postMessage({ type: -1, data: { width: Laya.stage.width, height: Laya.stage.height, matrix: Laya.stage._canvasTransform } });
                    // this.isInit = true;
                this.isOpen = true;    
            }
            wx.postMessage({type:1,cls:_cls});
            if(!this.drawSprite){
                this.drawSprite = new DrawSprite();
            }
            Laya.stage.addChild(this.drawSprite);
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

    window["tr_openSub"]=function(x,y,w,h,ui){
        maskClick.setCloseBtn(x,y,w,h);//设置关闭按钮的位置和宽高
        Laya.stage.addChild(maskClick);
        main.open(ui);
    }

    // Laya.stage.on(Laya.Event.MOUSE_UP,window,(e)=>{
    //     window["tr_openSub"](50,50,100,100,"sub.HlwRankView");
    // });

    
}



