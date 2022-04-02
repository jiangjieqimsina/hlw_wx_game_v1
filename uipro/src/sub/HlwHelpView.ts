namespace sub
{
    /**
     * 助力list
     */
   export class HlwHelpView extends ui.HelpVIewUI{
        protected initialize(){

            this.showlist.itemRender = Laya.Image;
            this.showlist.renderHandler = new Laya.Handler(this,this.onRenderHandler);
            this.on(Laya.Event.DISPLAY,this,this.onDisplay);
            this.on(Laya.Event.UNDISPLAY,this,this.onUnDisplay);
            // this.graphics.drawRect(0,0,this.width,this.height,null,"#ff0000",1);
        }

        private onDisplay():void{
            this.x = (Laya.stage.width - this.width)/2;
            this.y = (Laya.stage.height - this.height)/2;
            // console.log("HlwRankView!!!");
            let _that = this;
            //获取好友列表数据
            wx.getFriendCloudStorage({
                keyList: ['help'],
                success: function (res) {
                    console.log(res);//拉取到数据
                    let __list = [];
                    if(res.data && res.data.length > 0){
                        // window["setAvater"](res.data[0].avatarUrl);
                        // rankView.draw(res.data[0].avatarUrl);
                        // rankView.clear();
                        // for(let i = 0;i < res.data.length;i++){
                        // 	rankView.draw(i,res.data[i].avatarUrl);
                        // }
                        __list = res.data;
                    }
                    // rankView.drawAll(__list);
                    _that.showlist.array = __list;
                }
            });
        }

        private onUnDisplay():void{
            // console.log("rank is onUnDisplay!");
        }

        private onRenderHandler(item:Laya.Image,index:number):void{
            console.log(item.dataSource);
            // item.skin = 
            // // console.log(item.dataSource);
            // item.hitArea = new Laya.Rectangle(0,0,item.width,item.height);
            // let _vo:IWeiXinFriendVO = item.dataSource;
            // item.img.skin = _vo.avatarUrl;
            // item.playerName.text = _vo.nickname;
        }
    }
}