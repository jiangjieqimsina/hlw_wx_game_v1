
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class HelpVIewUI extends View {
		public showlist:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":536,"height":104},"child":[{"type":"List","props":{"width":536,"var":"showlist","spaceX":4,"repeatX":5,"height":104,"hScrollBarSkin":" "}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HelpVIewUI.uiView);

        }

    }
}

module ui {
    export class PaiHangItemViewUI extends View {
		public img:Laya.Image;
		public rank:Laya.Label;
		public playerName:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":400,"height":150},"child":[{"type":"Image","props":{"y":24,"width":100,"var":"img","height":100}},{"type":"Label","props":{"y":73,"x":288,"width":80,"var":"rank","text":"label","height":12,"fontSize":32,"color":"#ffffff","align":"center"}},{"type":"Label","props":{"y":73,"x":113,"width":186,"var":"playerName","text":"label","height":12,"fontSize":32,"color":"#ffffff","align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.PaiHangItemViewUI.uiView);

        }

    }
}

module ui {
    export class PaiHangVIewUI extends View {
		public showlist:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":400,"height":200},"child":[{"type":"List","props":{"width":400,"var":"showlist","vScrollBarSkin":" ","height":200},"child":[{"type":"PaiHangItemView","props":{"renderType":"render","runtime":"ui.PaiHangItemViewUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.PaiHangItemViewUI",ui.PaiHangItemViewUI);

            super.createChildren();
            this.createView(ui.PaiHangVIewUI.uiView);

        }

    }
}
