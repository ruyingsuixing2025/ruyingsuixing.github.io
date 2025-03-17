//通过<img>标签获取所有图片对象
let imgs = document.querySelectorAll('.gallery-item img')
//利用for循环，对图片绑定鼠标事件mouseover和mouseout
for (let i = 0; i < imgs.length; i++) {
    imgs[i].onmouseover = function () {
        startMov(this, { width: 350, height: 290, top: -45, left: -125, opacity: 100 });
    }

    imgs[i].onmouseout = function () {
        startMov(this, { width: 300, height: 250, top: -6, left: 0, opacity: 100 });
    }
    //设置图像计时器为空值
    imgs[i].timer = null;
}
//定义startMov()函数，element为图片对象，styles为动画对象的样式属性
function startMov(element, styles) {
    clearInterval(element.timer); 	//执行动画之前清除动画
    //setInterval()函数以给定的时间间隔重复执行一个函数
    element.timer = setInterval(function () {
        //for in循环语句循环遍历对象的属性，attr为属性名
        for (let attr in styles) {
            let icur = 0;
            if (attr == 'opacity') {
                //round()把对象四舍五入为最接近的整数
                icur = Math.round(parseFloat(getStyle(element, attr)) * 100);
            } else {
                //parseInt()函数可解析一个字符串，并返回一个整数
                icur = parseInt(getStyle(element, attr));
                //这里用parseInt是为了去掉px，方便计算用的。比如用getStyle函数获取到元素宽为100px。那么parseInt（100px）=100，从而方便计算，你不可能用100px-1吧。
                // currentStyle和getComputedStyle返回的就是目标元素的属性值，attr这个形参就是属性的意思
            }
            // console.log ('icur'+icur);

            //设置运动速度
            let speed = 0;
            speed = (styles[attr] - icur) / 8;  //速度=(目标值-东西的宽度)/时间？？？
            // console.log ('speed'+speed);
            //ceil()，floor()分别为Math的上舍入和下舍入函数
            // 保证鼠标覆盖和鼠标移出这两个动作执行的速度一致
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (attr == 'opacity') {
                element.style.opacity = (icur + speed) / 100;
            } else {
                element.style[attr] = icur + speed + 'px';
            }
        }
    }, 30);
}
//获得元素样式专用封装函数，返回该属性的当前值
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr]; 		//仅限IE兼容
    } else {
        return getComputedStyle(obj, false)[attr]; 	//兼容FF
    }
}
