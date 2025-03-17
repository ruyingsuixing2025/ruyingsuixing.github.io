// 获取元素
let photo = document.getElementById("photo");
let figcaption = document.getElementById("figcaption");
let galleryList1 = document.querySelector(".gallery1 ul")
let galleryList2 = document.querySelector(".gallery2 ul")
let galleryList3 = document.querySelector(".gallery3 ul")
let galleryList4 = document.querySelector(".gallery4 ul")
let galleryList5 = document.querySelector(".gallery5 ul")
let galleryList6 = document.querySelector(".gallery6 ul")
let mask = document.querySelector(".mask");
let listImg = document.querySelectorAll(".gallery ul li img");
// 图片的长度
let len = listImg.length;
// 获取当前的图片
let curImg = 0;
//对缩略图列表进行事件绑定
galleryList1.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target);
    // if (target.nodeName !== "IMG") {
    //     return;
    // }
    mask.style.display = "block";
    scrollTo(0, 0);
    photo.src = target.getAttribute("src");
    figcaption.innerHTML = target.getAttribute("title");
    for (let i = 0; i < len; i++) {
        if (listImg[i].src === photo.src) {
            curImg = i;
        }
    }
}, false);
galleryList2.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target);
    // if (target.nodeName !== "IMG") {
    //     return;
    // }
    mask.style.display = "block";
    scrollTo(0, 0);
    photo.src = target.getAttribute("src");
    figcaption.innerHTML = target.getAttribute("title");
    for (let i = 0; i < len; i++) {
        if (listImg[i].src === photo.src) {
            curImg = i;
        }
    }
}, false);
galleryList3.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target);
    // if (target.nodeName !== "IMG") {
    //     return;
    // }
    mask.style.display = "block";
    scrollTo(0, 0);
    photo.src = target.getAttribute("src");
    figcaption.innerHTML = target.getAttribute("title");
    for (let i = 0; i < len; i++) {
        if (listImg[i].src === photo.src) {
            curImg = i;
        }
    }
}, false);
galleryList4.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target);
    // if (target.nodeName !== "IMG") {
    //     return;
    // }
    mask.style.display = "block";
    scrollTo(0, 0);
    photo.src = target.getAttribute("src");
    figcaption.innerHTML = target.getAttribute("title");
    for (let i = 0; i < len; i++) {
        if (listImg[i].src === photo.src) {
            curImg = i;
        }
    }
}, false);
galleryList5.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target);
    // if (target.nodeName !== "IMG") {
    //     return;
    // }
    mask.style.display = "block";
    scrollTo(0, 0);
    photo.src = target.getAttribute("src");
    figcaption.innerHTML = target.getAttribute("title");
    for (let i = 0; i < len; i++) {
        if (listImg[i].src === photo.src) {
            curImg = i;
        }
    }
}, false);
galleryList6.addEventListener("click", function (e) {
    let target = e.target;
    console.log(target);
    // if (target.nodeName !== "IMG") {
    //     return;
    // }
    mask.style.display = "block";
    scrollTo(0, 0);
    photo.src = target.getAttribute("src");
    figcaption.innerHTML = target.getAttribute("title");
    for (let i = 0; i < len; i++) {
        if (listImg[i].src === photo.src) {
            curImg = i;
        }
    }
}, false);

//对覆盖层的关闭按钮绑定事件
let btnClose = document.getElementsByClassName("mask-close")[0];
btnClose.addEventListener("click", close, false);

document.addEventListener("keydown", jumpPage, false);

//对上一页按钮绑定事件
let btnPrev = document.getElementsByClassName("mask-prev")[0];
btnPrev.addEventListener("click", prev, false);
//对下一页按钮绑定事件
let btnNext = document.getElementsByClassName("mask-next")[0];
btnNext.addEventListener("click", next, false);

function close() {
    mask.style.display = "none";
}

function prev() {
    if (curImg <= 0) {
        curImg = len;
    }
    curImg--;
    changPhoto();

}

function next() {
    if (curImg + 1 >= len) {
        curImg = -1;
    }
    curImg++;
    changPhoto();
}

function changPhoto() {
    photo.src = listImg[curImg].src;
    photo.setAttribute("title", listImg[curImg].title);
    figcaption.innerHTML = photo.getAttribute("title");
}

function jumpPage(event) {
    // 光标左键
    if (event.keyCode == 39) {
        next();
    }
    // 光标右键
    if (event.keyCode == 37) {
        prev();
    }
    // Esc键
    if (event.keyCode == 27) {
        close();
    }
} 