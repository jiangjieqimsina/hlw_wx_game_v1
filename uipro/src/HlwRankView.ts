namespace sub{
    export class HlwRankView extends ui.PaiHangVIewUI{
        protected initialize(){
            this.showlist.itemRender = ui.PaiHangItemViewUI;
            this.showlist.renderHandler = new Laya.Handler(this,this.onRenderHandler);
            this.on(Laya.Event.DISPLAY,this,this.onDisplay);
            this.on(Laya.Event.UNDISPLAY,this,this.onUnDisplay);
            this.graphics.drawRect(0,0,this.width,this.height,"#ff0000");
        }

        private onDisplay():void{
            this.x = (Laya.stage.width - this.width)/2;
            this.y = (Laya.stage.height - this.height)/2;
        }

        private onUnDisplay():void{

        }

        private onRenderHandler(item:ui.PaiHangItemViewUI,index:number):void{
            
        }
    }
}