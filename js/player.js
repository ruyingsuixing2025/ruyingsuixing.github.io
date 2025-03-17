// 获取元素
let play = document.getElementsByClassName("play")[0];
let range = document.getElementById("range");
let go = document.getElementsByClassName("go")[0];
let back = document.getElementsByClassName("back")[0];
let video = document.getElementsByTagName("video")[0];
let nowTime = document.getElementsByClassName("nowTime")[0];
let videoOut = document.getElementsByClassName("video")[0];
let allTime = document.getElementsByClassName("allTime")[0];
let allScreen = document.getElementsByClassName("allScreen")[0];
let progress = document.getElementsByClassName("progress")[0];
let progressInner = document.getElementsByClassName("progressInner")[0];
let circle = document.getElementsByClassName("circle")[0];
let mute = document.getElementsByClassName("mute")[0];
let volume = document.getElementsByClassName("volume")[0];
let timer;
let speed = 1000;
let oldSpeed;
let initVolume;
let nowVolume;
let progressWidth = window.getComputedStyle(progress).width;
let circleWidth = window.getComputedStyle(circle).width;
circle.onmousedown = function () {
    videoOut.onmousemove = function (e) {
        let offset = e.clientX - this.offsetLeft - progress.offsetLeft;
        if (offset <= 300 && offset >= 0) {
            video.currentTime = (offset / parseInt(progressWidth)) * video.duration;
            progressInner.style.width = offset + "px";
            circle.style.left = (offset - parseInt(circleWidth) / 2) + "px";
        }
    }
};
videoOut.onmouseup = function () {
    //若外层写成video.onmouseup事件，则在底部progress处无法触发。。因为progress将其挡住
    this.onmousemove = null;//清空事件内容
};
volume.onclick = function () {
    if (range.style.display == "block") {
        range.style.display = "none";
    } else {
        range.style.display = "block";
    }
};
range.onchange = function () {
    let rate = this.value / this.max;
    video.volume = initVolume * rate;
    nowVolume = initVolume * rate;
};
mute.onclick = function () {
    if (this.getAttribute("data-num") == "0") {
        video.muted = true;
        this.setAttribute("data-num", "1");
        range.value = 0;
        mute.style.background = "red"
    } else {
        video.muted = false;
        this.setAttribute("data-num", "0");
        range.value = nowVolume * range.max;
        mute.style.background = ""
    }
};
video.oncanplay = function () {
    allTime.innerHTML = setTime(this.duration);
    oldSpeed = this.playbackRate;
    initVolume = this.volume;
    nowVolume = initVolume;
};
// 设置总时间和当前时间
function setTime(time) {
    let str = "";
    var time = time;
    let hour = Math.floor((time / (60 * 60)) % (24));
    str += hour < 10 ? "0" + hour : hour;
    let minute = Math.floor((time / 60) % 60);
    str += minute < 10 ? ":0" + minute : ":" + minute;
    let second = Math.floor(time % 60);
    str += second < 10 ? ":0" + second : ":" + second;
    return str;
}
// 切换播放和暂停
play.onclick = function () {
    clearInterval(timer);
    if (this.innerHTML == "播放") {
        this.innerHTML = "暂停";
        video.play();
    } else {
        this.innerHTML = "播放";
        video.pause();
    }
    video.playbackRate = 1;
    range.value = initVolume * 100;
};
// 时间变化时调用
video.ontimeupdate = function () {
    if (video.currentTime <= 0) {
        clearInterval(timer)
    }
    let currentTime = Math.floor(this.currentTime);//将当前时间向下求整做到变化几次当前时间后才移动进度条长度
    let width = (currentTime / this.duration) * parseInt(progressWidth);
    progressInner.style.width = width + "px";
    circle.style.left = (width - parseInt(circleWidth) / 2) + "px";
    nowTime.innerHTML = setTime(currentTime);
    if (this.currentTime >= this.duration) {
        play.innerHTML = "播放";
        this.currentTime = 0;
    }
};
// 快进
go.onclick = function () {
    video.playbackRate = 3;
}
// 快退
back.onclick = function () {
    video.pause();
    play.innerHTML = "播放";
    timer = setInterval(function () {
        video.currentTime -= 2;
        console.log(video.currentTime)
    }, 500)
}
// 全屏
allScreen.onclick = function () {
    // 考虑兼容性
    if (video.requestFullscreen) {
        video.requestFullscreen()
    }
    if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen()
    }
    if (video.mozRequestFullscreen) {
        video.mozRequestFullscreen()
    }
    if (video.msRequestFullscreen) {
        video.msRequestFullscreen()
    }
    if (video.oRequestFullscreen) {
        video.oRequestFullscreen()
    }
}

// 点击进度条
progress.onclick = function (e) {
    let offset = e.clientX - progress.offsetLeft - videoOut.offsetLeft;
    let currentTime = (offset / parseInt(progressWidth)) * video.duration;
    video.currentTime = currentTime;
    let width = (currentTime / video.duration) * parseInt(progressWidth);
    progressInner.style.width = width + "px";
    circle.style.left = (width - parseInt(circleWidth) / 2) + "px";
    nowTime.innerHTML = setTime(currentTime);
}