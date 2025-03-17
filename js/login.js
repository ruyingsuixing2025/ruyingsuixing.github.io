// 登录页面
// 验证邮箱
L_email.onchange = function () {
    // 获取邮箱表单的值
    let L_email = this.value;
    // 验证邮箱格式
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!reg.test(L_email)) {
        alert("邮箱格式不正确，请重新输入！");
        return false;
    }
}
// 验证密码
L_pwd.onchange = function () {
    // 获取密码表单的值
    let L_pwd = this.value;
    // 验证密码格式
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
    if (!reg.test(L_pwd)) {
        alert("密码长度要大于6位，由数字和字母组成,请重新输入！");
        return false;
    }
}

// 传递注册页面的本地存储
let email = localStorage.getItem("email");
let password = localStorage.getItem("password");
// 在控制台输出邮箱、密码
console.log("email:" + email);
console.log("pwd:" + password);

// 实现跳转
function jump1() {
    console.log(document.getElementById("L_email").value);
    console.log(+document.getElementById("L_pwd").value);
    // 获取元素
    let Email = document.getElementById("L_email");
    let Password = document.getElementById("L_pwd");
    // 判断邮箱密码是否正确
    if (email == document.getElementById("L_email").value && password == document.getElementById("L_pwd").value) {
        alert("登录成功，点击确定进入首页！");
        // 跳转至首页
        window.location.href = "../index.html";
    }
    // 判断邮箱或密码的值是否为空
    else if (Email.value == "" || Password.value == "") {
        alert("邮箱或密码不能为空！");
        return false;
    }
    else {
        alert("邮箱或密码错误！");
        return false;
    }
}
// 跳转至注册页面
function jump2() {
    window.location.href = "register.html";
}