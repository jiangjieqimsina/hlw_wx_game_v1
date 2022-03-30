

# 添加需要的模块路径
module.json  
```
{
    "path":[
        "sub/HlwRankView"
    ]
}
```

# 调用方法
tr_openSub(close_x,close_y,close_w,close_h,ui_str);
```
window["tr_openSub"](50,50,100,100,"sub.HlwRankView");
```

# 注意事项
1.子域可以调用主域中的asset文件中的资源  
如子域代码:
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