<template>
<div>
  <div class="login1">

  </div>


  <main role="main">
    <div class="css-login">
      <div class="css-login2"  :class="{'Login':Loginform,'Register':Registerform}">
        <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box" style="background-color: white">
          <h3 class="login-title">欢迎登录</h3>
          <el-form-item label="账号" prop="name">
            <el-input type="text" placeholder="请输入账号" v-model="form.name"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
          </el-form-item>
          <el-form-item>
            <div v-if="">
              <el-button type="primary" v-on:click="onSubmit('loginForm')">登录</el-button>
              <el-button type="info" @click="changeLogin">注册</el-button>
            </div>
          </el-form-item>
        </el-form>

<!--    <el-dialog title="温馨提示" :visible.sync="dialogVisiable" width="30%" :before-close="handleClose">-->
<!--      <span>请输入账号和密码</span>-->
<!--      <span slot="footer" class="dialog-footer">-->
<!--          <el-button type="primary" @click="dialogVisible = false">确定</el-button>-->
<!--        </span>-->
<!--    </el-dialog>-->
      </div>
      <div class="css-login3" :class="{'Login1':Loginform}">
        <el-form ref="registerForm" :model="form" :rules="rules" label-width="80px" class="login-box" style="background-color: white">
          <h3 class="login-title">欢迎注册</h3>
          <el-form-item label="账号" prop="name">
            <el-input type="text" placeholder="请输入账号" v-model="form.name"/>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="form.password"/>
          </el-form-item>
          <el-form-item>
            <div v-if="">
              <el-button type="primary" v-on:click="onRegister('registerForm')">注册</el-button>
              <el-button type="info" @click="changeRegister">返回登录</el-button>
            </div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </main>

</div>
</template>

<script>
export default {
  name: "Login",
  created() {
    this.timer()
  },
  data(){
    return{
      // name:'',
      Loginform:false,
      Registerform:false,
      info:{
        name:null,
        password:null,
      },
      form:{
        name:'',
        password:''
      },
      //表单验证，需要在 el-form-item 元素中增加prop属性
      rules:{
        name:[
          {required:true,message:"账号不可为空",trigger:"blur"},
          {min: 3, max: 10, message: "长度在3到10之间哦！",trigger: "blur"}
        ],
        password:[
          {required:true,message:"密码不可为空",trigger:"blur"},
          {min: 6, max: 15, message: "长度在6到15之间哦！",trigger: "blur"}
        ]
      },
      type:'1',

      //对话框显示和隐藏
      dialogVisible:false
    }
  },
  methods:{
    // changeRegister(){
    //   if (this.Registerform == false){
    //     this.Registerform = true;
    //   }
    //   else {
    //     this.Registerform = false;
    //   }
    // },
    changeRegister(){
      this.Loginform = false;
    },
    changeLogin(){
        this.Loginform = true;
    },
    // markData:function (){
    //   this.axios({
    //     method: 'get',
    //     url:"http://localhost:8080/static/mock/data.json"
    //   }).then(response => {
    //     this.info = response.data
    //   },
    //   error=>{
    //     console.log("请求失败")
    //   })
    // },
    handleClose:function (){
      console.log("Handle Close,空函数");
    },
    // dialogVisiable:function (){
    //   console.log("Handle Close,空函数");
    // },
    onRegister(formName){
      this.$refs[formName].validate(async valid=>{
        if(!valid) return ;
        const data=this.form
        const result = await this.$http.post('/user/register',data);
        if(result.status !== 200)return console.log("注册失败");
        console.log("注册成功");
        this.name = result.data.name;
        // console.log(result.status);
        // console.log(result.data.data.token);
        // console.log(result);
        sessionStorage.setItem('token',result.data.data.token);
        // this.$router.push('/user/'+this.form.username);
        if(result.data.data.token == ''){
          this.$notify({
            title:'该用户名已存在！',
            // message:'欢迎您 尊贵的'+this.name,
            type:'error'
          });
        }
        else {
          clearTimeout(this.timer);  //清除延迟执行
          this.timer = setTimeout(() => {   //设置延迟执行
            this.$router.push({
              path: '/main',
              query: {
                name: this.form.name
              }
            });
            this.$notify({
              title: '注册成功',
              message: '欢迎您 尊贵的' + this.form.name,
              type: 'success'
            });
          }, 500);
        }
      });
    },
    onSubmit(formName){
      //为表单绑定验证功能
      this.$refs[formName].validate(async valid=>{
        if(!valid) return ;
        const result = await this.$http.post('/user/login',this.form);
        if(result.status !== 200)return console.log("登录失败");
        console.log("登录成功");
        this.name = result.data.name;
        console.log(this.name)
        console.log(result.data.token)
        // console.log(result.status);
        // console.log(result.data.data.token);
        // console.log(result);
        sessionStorage.setItem('token',result.data.token);
        // this.$router.push('/user/'+this.form.username);
        if(result.data.token == ''){
          this.$notify({
            title:'用户名或密码错误',
            // message:'欢迎您 尊贵的'+this.name,
            type:'error'
          });
        }
        else {
          clearTimeout(this.timer);  //清除延迟执行
          this.timer = setTimeout(() => {   //设置延迟执行
            this.$router.push({
              path: '/main',
              query: {
                name: this.form.name
              }
            });
            this.$notify({
              title: '登录成功',
              message: '欢迎回来 ' + this.form.name,
              type: 'success'
            });
          }, 500);
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.css-login2{
  //background-color: white;
}
//.login1{
//  position: fixed;
//  top: 0;
//  right: 0;
//  left: 0;
//  z-index: 101;
//  display: none;
//  height: 2px;
//  pointer-events: none;
//  background: #056DE8;
//  -webkit-transform: translateX(-100%);
//  -ms-transform: translateX(-100%);
//  transform: translateX(-100%);
//}
//.css-login1{
//  /* 03 */
//  position: absolute;
//  width: 1028px;
//  height: 771px;
//  top: 215px;
//  left: 98px;
//
//
//  background: url("https://s2.loli.net/2022/11/07/K5NHdT6i7UIo4Gy.jpg");
//}
//.css-login{
//  /* 编组 3 */
//  position: absolute;
//  width: 1402px;
//  height: 771px;
//  top: 215px;
//  left: 98px;
//
//
//}
.css-login3{
  position: absolute;
  left: 422px;
  transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 2px;
  min-height: 688px;
  height: calc(100% - 42px);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.css-login2{
  position: absolute;
  left: 422px;
  -webkit-box-flex: 1;
  -ms-flex: 1 1;
  flex: 1 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-radius: 2px;
  min-height: 688px;
  height: calc(100% - 42px);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.css-login2, .css-login3{

  //background-color: #fff;
  -webkit-perspective: 1000px;
  backface-visibility: hidden;
  -webkit-transition: all 1.5s;
  -moz-transition: all 1.5s;
  -ms-transition: all 1.5s;
  -o-transition: all 1.5s;

}
.Login{
  transform: rotateY(-180deg);
  -webkit-transform: rotateY(-180deg);
}
.Login1{
  transform: rotateY(-360deg);
  -webkit-transform: rotateY(-360deg);
}
.css-login {
  //cursor: pointer;
  -webkit-perspective: 500px;
  perspective: 500px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-image: url("../img/未命名的设计.png");
  background-repeat: no-repeat;
  //background-color: #b8e5f8;
  background-size: cover;
  width: 100%;
  height: 100vh;
  overflow: auto;
  //z-index: -8;
}
.login-box{
  //border:1px solid #DCDFE6;
  box-shadow: #303133;
  margin-top: 90px;
  width: 350px;
  //margin:180px auto;
  padding: 35px 35px 15px 35px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  box-shadow: 30px 40px 100px rgba(0, 0, 0, 0.25);
}
.login-title{
  text-align:center;
  margin: 0 auto 40px auto;
  color: #303133;
}
</style>
