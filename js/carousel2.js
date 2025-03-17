window.addEventListener('load', function () {
    // 1. 获取元素
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var focus = document.querySelector('.focus');
    var focusWidth = focus.offsetWidth;

    // 2. 鼠标经过focus 就显示隐藏左右按钮
    focus.addEventListener('mouseenter', function () {
        prev.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function () {
        prev.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function () {
            // 手动调用点击事件
            next.click();
        }, 3000);
    });
    // 3. 动态生成小圆圈 有几张图片就生成几个小圆圈
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        li.setAttribute('index', i);
        ol.appendChild(li);
        // 4. 绑定点击事件
        li.addEventListener('click', function () {
            for (var i = 0; i < ol.children.length; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            // 5. 点击小圆圈,移动图片
            var index = this.getAttribute('index');
            console.log(focusWidth);
            console.log(index);
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        })
    }
    ol.children[0].className = 'current';
    // 6. 克隆第一张图片(li)放到ul 最后面
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7. 点击右侧按钮,图片滚动一张
    var num = 0;
    var circle = 0;
    var flag = true;
    next.addEventListener('click', function () {
        if (flag) {
            flag = false; // 关闭节流阀
            if (num == 4) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function () {
                flag = true;// 打开节流阀
            });
            // 8. 点击右侧按钮,小圆圈一起变化
            circle++;
            if (circle == 4) {
                circle = 0;
            }
            // 调用函数
            circleChange();
        }
    });
    // 9. 左侧按钮做法
    prev.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = 4;
                ul.style.left = (-num * focusWidth) + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function () {
                flag = true;
            });
            circle--;
            if (circle < 0) {
                circle = 3;
            }
            // 调用函数
            circleChange();
        }
    });
    function circleChange() {
        // 先清除其余小圆圈的current类名
        for (var i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        }
        // 留下当前小圆圈的current类名
        ol.children[circle].className = 'current';
    }
    //  10. 自动播放轮播图
    var timer = setInterval(function () {
        // 手动调用点击事件
        next.click();
    }, 3000);
})