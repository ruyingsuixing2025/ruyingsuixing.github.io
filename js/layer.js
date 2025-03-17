const btn = document.getElementsByTagName("button")[0];
const layer = document.getElementById("layer");
const as = layer.getElementsByTagName("a");
const close = layer.querySelector(".layer-close");

//给弹层按钮绑定鼠标单击事击，单击弹出消息框，可以替换成btn.onclick = function () { }的写法
btn.addEventListener("click", function () {
    //通过设置消息框容器的display属性为block来显示消息框
    layer.style.display = "block";
})
//单击取消按钮关闭消息框
as[0].addEventListener("click", function () {
    //通过设置消息框容器的display属性为none来隐藏消息框
    layer.style.display = "none";
})
//单击立即开通按钮关闭消息框
as[1].addEventListener("click", function () {
    //通过设置消息框容器的display属性为none来隐藏消息框
    layer.style.display = "none";
})
close.addEventListener("click", function () {
    //通过设置消息框容器的display属性为none来隐藏消息框
    layer.style.display = "none";
})