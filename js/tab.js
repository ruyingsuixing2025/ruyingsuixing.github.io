// 获取元素
const tab_list = document.querySelector('.tab_list');
const lis = tab_list.querySelectorAll('li');
const opus_art = document.querySelectorAll('.opus_art');
// for循环绑定点击事件
for (let i = 0; i < lis.length; i++) {
    // 给li 设置索引号
    lis[i].setAttribute('index', i);
    lis[i].onclick = function () {
        // 1. 选项卡模块
        for (let i = 0; i < lis.length; i++) {
            lis[i].className = '';
        }
        this.className = 'opus_current';
        // 2. 内容模块
        let index = this.getAttribute('index');
        console.log(index);
        // 隐藏
        for (let i = 0; i < opus_art.length; i++) {
            opus_art[i].style.display = 'none';
        }
        // 显示
        opus_art[index].style.display = 'block';
    }
}