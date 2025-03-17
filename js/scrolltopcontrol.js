// 获取元素
let obtn = document.getElementById('btn');
let isTop = true;
//滚动条滚动400px时触发
window.onscroll = function () {
    //在滚动了400px的时候增加判断
    let osTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (osTop <= 400) {
        obtn.style.display = 'none';
    } else {
        obtn.style.display = 'block';
    }
    isTop = false;
};
function scrollToTop() {
    //获取滚动条距离顶部的高度
    let topHeight = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    //减小速度
    let speed = topHeight / 10 > 100 ? topHeight / 10 : 100;
    scrollBy(0, -speed);
    // 模拟鼠标向上滚动事件
    scrolldelay = setTimeout('scrollToTop()', 50);
    // 清除滚动事件，避免无法向下移动
    if (topHeight === 0) {
        clearTimeout(scrolldelay);
        scrolldelay = null;
    }
}