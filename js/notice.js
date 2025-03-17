let currentNoticeId = 0;
//获取公告项容器
const notice = document.querySelector("#notice");
//获取所有公告项
const lists = document.querySelectorAll('.notice li')
noticeAutoPlay('next');
let timer = setInterval(function () { noticeAutoPlay('next') }, 3000);
//给公告项绑定鼠标移入事件，事件发生时暂停公告项滚动                
notice.addEventListener("mouseover", function () {
    clearInterval(timer);
});
//给公告项绑定鼠标移出事件，事件发生时恢复公告项滚动
notice.addEventListener("mouseout", function () {
    timer = setInterval(function () { noticeAutoPlay('next') }, 3000);
});
// 手动滚动公告项
document.querySelector("#nav-arrows-left").addEventListener("click", function () {
    noticeAutoPlay('prev');
});

document.querySelector("#nav-arrows-right").addEventListener("click", function () {
    noticeAutoPlay('next');
});

//自动滚动函数
function noticeAutoPlay(pos) {
    if (pos == "next") {
        if (lists.length > currentNoticeId) {
            currentNoticeId++;
        } else {
            currentNoticeId = 1;
        }
    }
    else {
        if (currentNoticeId - 2 == -1) {
            //可以直接写作 if (currentNoticeId == 1) {
            currentNoticeId = lists.length;
        } else {
            currentNoticeId--;
        }
    }
    for (let i = 0; i < lists.length; i++) {
        //隐藏所有公告项
        lists[i].style.display = "none";
    }
    lists[currentNoticeId - 1].style.display = "block";
}