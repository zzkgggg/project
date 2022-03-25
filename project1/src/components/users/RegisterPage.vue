<template>
  <div>
    <div id="login-wrapper">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <div class="login-box">
        <h2>中医文化注册平台</h2>
        <form>
          <div class="user-box">
            <input
                autocomplete="new-password"
                type="text"
                name=""
                v-model="username"
                required=""
                key="username-v3"
            />
            <label>账号</label>
          </div>
          <div class="user-box">
            <input
                autocomplete="new-password"
                type="password"
                name=""
                v-model="password"
                required=""
                key="password-v3"
            />
            <label>密码</label>
          </div>
          <el-button size="large" class="button1"  @click="back_login()">返回</el-button>
          <el-button size="large" class="button2"  @click="login()">完成</el-button>
        </form>
      </div>
    </div>

  </div>

</template>

<script scope>
export default {
  data: function(){
    return {
      dialogVisible:false,
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    }
  },
  created(){
    localStorage.setItem('username',"");
    localStorage.setItem('role',"");
    localStorage.setItem('id',"");
  },
  methods: {
    back_login(){
      this.$router.push({path:'/login'});
    }
    // login(){
    //   if(this.ruleForm.username===""){
    //     this.$message({type: 'info', message: '用户名必须输入！'});
    //   }else if(this.ruleForm.password===""){
    //     this.$message({type: 'info', message: '密码必须输入！'});
    //   }else{
    //
    //     this.$http.post(main.url+"/login/login",
    //         {'username': this.ruleForm.username, 'password': this.ruleForm.password},
    //         {
    //           headers: {'Content-Type':'application/x-www-form-urlencoded'},
    //           emulateJSON: true
    //         }).then(
    //         success => {
    //           if(success.data.id != null){
    //             this.$message({type: 'success', message: '登录成功'});
    //             localStorage.setItem('username',this.ruleForm.username);
    //             localStorage.setItem('role',success.data.role);
    //             localStorage.setItem('id',success.data.id);
    //             this.$router.push({ path: '/admin' });
    //             this.ruleForm.username='';
    //           }else{
    //             this.$message({type: 'error', message: '用户名或密码错误'});
    //           }
    //           this.ruleForm.password='';
    //           this.dialogVisible=true;
    //         }
    //     );
    //   }
    // },
    // cancel(){
    //   this.$router.push({ path: '/' });
    // },

  }
}
</script>

<style scoped>
#login-wrapper {
  /* background: linear-gradient(#141e30, #243b55); */
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100%;
  overflow: hidden;
}
.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.login-box a:hover {
  background: #03e9f4;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #03e9f4);
  animation: btn-anim1 1s linear infinite;
}

.button1{
  margin-right: 160px;
  font-size: 16px;
  font-family: "宋体";
  font-weight: bolder;
}

.button2{
  /*margin-right: 170px;*/
  font-size: 16px;
  font-family: "宋体";
  font-weight: bolder;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,
  100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #03e9f4);
  animation: btn-anim2 1s linear infinite;
  animation-delay: 0.25s;
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,
  100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #03e9f4);
  animation: btn-anim3 1s linear infinite;
  animation-delay: 0.5s;
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,
  100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: 0.75s;
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,
  100% {
    bottom: 100%;
  }
}
</style>