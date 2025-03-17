// 点击× 关闭
// 获取元素
const btn = document.querySelector('.close-btn')
const box = document.querySelector('.chat')
// 绑定事件 处理程序
btn.onclick = function () {
    box.style.display = 'none';
}

window.addEventListener("scroll", fun)
function fun() {
    // 获取元素
    let dom = document.querySelector(".left")
    let rect = dom.getBoundingClientRect()
    let topclassBox = document.querySelector(".chat")
    if (rect.top < -270) {
        // 添加固定定位属性
        topclassBox.style.position = "fixed"
        topclassBox.style.top = 0
    }
    if (rect.top >= 0) {
        topclassBox.style.position = "relative"
        topclassBox.style.top = 0
    }
}