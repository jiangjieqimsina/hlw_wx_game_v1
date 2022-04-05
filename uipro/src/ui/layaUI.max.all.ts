
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class HelpItemVIewUI extends View {
		public img:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":100},"child":[{"type":"Image","props":{"width":100,"var":"img","height":100}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.HelpItemVIewUI.uiView);

        }

    }
}

module ui {
    export class HelpVIewUI extends View {
		public showlist:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":536,"height":104},"child":[{"type":"List","props":{"width":536,"var":"showlist","spaceX":5,"repeatX":5,"height":104,"hScrollBarSkin":" "},"child":[{"type":"HelpItemVIew","props":{"renderType":"render","runtime":"ui.HelpItemVIewUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.HelpItemVIewUI",ui.HelpItemVIewUI);

            super.createChildren();
            this.createView(ui.HelpVIewUI.uiView);

        }

    }
}

module ui {
    export class PaiHangItemViewUI extends View {
		public img:Laya.Image;
		public playerName:Laya.Label;
		public yaoqing:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":598,"height":120},"child":[{"type":"Image","props":{"y":10,"width":100,"var":"img","height":100}},{"type":"Label","props":{"y":42,"x":102,"width":362,"var":"playerName","text":"label","height":40,"fontSize":32,"color":"#ffffff","align":"left"}},{"type":"Image","props":{"y":38,"x":481,"width":100,"var":"yaoqing","height":50}}]};
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
		public yaoqing:Laya.Sprite;

        public static  uiView:any ={"type":"View","props":{"width":648,"height":1042},"child":[{"type":"List","props":{"y":25,"x":25,"width":598,"var":"showlist","vScrollBarSkin":" ","height":900},"child":[{"type":"PaiHangItemView","props":{"renderType":"render","runtime":"ui.PaiHangItemViewUI"}}]},{"type":"Sprite","props":{"y":945,"x":104,"width":164,"var":"yaoqing","height":57}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.PaiHangItemViewUI",ui.PaiHangItemViewUI);

            super.createChildren();
            this.createView(ui.PaiHangVIewUI.uiView);

        }

    }
}

module ui {
    export class PaiHangYaoQingViewUI extends View {
		public plist:Laya.List;

        public static  uiView:any ={"type":"View","props":{"width":598,"height":600},"child":[{"type":"List","props":{"width":598,"var":"plist","vScrollBarSkin":" ","height":600},"child":[{"type":"PaiHangItemView","props":{"renderType":"render","runtime":"ui.PaiHangItemViewUI"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.PaiHangItemViewUI",ui.PaiHangItemViewUI);

            super.createChildren();
            this.createView(ui.PaiHangYaoQingViewUI.uiView);

        }

    }
}
