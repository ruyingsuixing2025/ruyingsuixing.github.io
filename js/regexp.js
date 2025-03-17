// 注册页面
// 验证邮箱表单
R_email.onchange = function () {
    // 获取邮箱值
    let R_email = this.value;
    // 设置邮箱格式
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (!reg.test(R_email)) {  // 用户输入不满足邮箱格式
        alert("邮箱格式不正确，请重新输入！");
        return false;
    }
}

// 验证用户名表单
R_user.onchange = function () {
    // 获取用户名的值
    let R_user = this.value;
    // 设置用户名的格式
    let reg = /^\S{1,5}$/;
    if (!reg.test(R_user)) {  // 用户输入不满足用户名格式
        alert("用户名长度不能超过5位！");
        return false;
    }
}

// 验证密码表单
R_pwd.onchange = function () {
    // 获取密码的值
    let R_pwd = this.value;
    // 设置密码的格式
    let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/;
    if (!reg.test(R_pwd)) {  // 密码不满足要求
        alert("密码长度要大于6位，由数字和字母组成,请重新输入！");
        return false;
    }
}

// 密码再次确定
function checkpassword() {
    // 获取第一次密码的值
    let password = document.getElementById("R_pwd").value;
    // 获取第二次密码的值
    let repassword = document.getElementById("R_repwd").value;
    // 判断两次密码是否一致
    if (password == repassword) {
        // 出现提示词
        document.getElementById("tishi").innerHTML = "<font color='green'>两次密码输入一致</font>";
    } else {
        document.getElementById("tishi").innerHTML = "<font color='red'>两次输入密码不一致!</font>";
    }
}

// 实现页面跳转
function jump() {
    // 将数据本地存储
    localStorage.setItem("username", document.getElementById("R_user").value);
    localStorage.setItem("password", document.getElementById("R_pwd").value);
    localStorage.setItem("email", document.getElementById("R_email").value);
    // 获取元素
    let Email = document.getElementById("R_email");
    let User = document.getElementById("R_user");
    let Toux = document.getElementById("toux");
    let Password = document.getElementById("R_pwd");
    let Repassword = document.getElementById("R_repwd");
    // 判断邮箱、用户名、头像或密码是否为空
    if (Email.value == "" || User.value == "" || Toux.value == "" || Password.value == "") {
        alert("邮箱、用户名、头像或密码不能为空！");
        return false;
    }
    // 判断两次密码是否相同
    else if (Password.value == Repassword.value) {
        alert("注册成功，欢迎静雯小朋友进入登录界面！");
        // 页面跳转至登录页面
        window.location.href = "login.html";
    }
    else {
        alert("注册信息有误！");
    }
}

// 跳转至登陆页面
function jump3() {
    window.location.href = "login.html";
}