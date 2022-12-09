<template>
  <div>
    <header role="banner" class="top-header css-1001">
      <div class="top-header-1 css-1002">
        <router-link to="/main">
          <img title="www.aliguagua.com" src="../img/Aliguagua.png" width="152.75" height="77.25">
        </router-link>
        <ul role="tablist" class="top-header-2 css-2000" >
          <li role="tab" class="tab-1 css-2001">
            <router-link class="tab-link css-3001 tab-link-1 is-active" to="/main">首页</router-link>
          </li>
          <li role="tab" class="tab-1 css-2001">
            <router-link class="tab-link css-3001 tab-link-1 is-active" to="/login">话题</router-link>
          </li>
          <li role="tab" class="tab-1 css-2001">
            <router-link class="tab-link css-3001 tab-link-1 is-active" to="/login">动态</router-link>
          </li>
          <li role="tab" class="tab-1 css-2001">
            <router-link class="tab-link css-3001 tab-link-1 is-active" to="/login">公告</router-link>
          </li>
        </ul>
        <div class="search">
          <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入内容"
            @select="handleSelect"
          ></el-autocomplete>
          <el-button type="primary" icon="el-icon-search"class="css-4000">搜索</el-button>
        </div>


        <div class="userinfo">
          <div class="proper">
            <el-badge value="12" class="badge-item">
              <i class="el-icon-chat-dot-square">
                  <span style="display: inline-flex; align-items: center;">
                  </span>
                <div class="proper-c">通知</div>
              </i>
            </el-badge>
          </div>
          <div class="proper">
            <el-badge value="20" class="badge-item">
              <i class="el-icon-user">
                <span style="display: inline-flex;align-items: center;"></span>
                <div class="proper-c">私信</div>
              </i>
            </el-badge>
          </div>
          <div class="profile">
            <div class="profile-a">
              <button id="profile-b" aria-haspopup="true" aria-expanded="false" aria-owns="content" type="button"
                      class="profile-c">
                <router-link to="/user/:name">
                  <img class="profile-d css-1 avatar" src="../img/微信图片_20221103002722.jpg">
                </router-link>
              </button>
            </div>
            <!--                <span>-->
            <!--                    <router-link to="/login">个人中心</router-link>-->
            <!--                  </span>-->
            <!--              <span class="el-avatar el-avatar&#45;&#45;square" style="hight:50px;width: 50px;line-height: 50px;">-->
            <!--                <img class="img" src="../img/1.jpg">-->
            <!--              </span>-->
          </div>
        </div>
      </div>
    </header>
    <div class="main-story">
      <el-card class="box-card" style="width: 630px;margin: 0px 20px 24px;padding: 64px 20px;">
        <div slot="header" class="clearfix">
          <span class="font">{{$route.query.name}}</span>
          <div class="user-inner">
            <div class="user-inner1">
              <img class="photo1 user-inner2 inner" width="160" src="../img/微信图片_20221103002722.jpg">
            </div>
          </div>
          <!--            <span></span>-->
          <el-button style="float: right; padding: 3px 0" type="text" @click="addDialogVisible = true">编辑个人资料</el-button>

<!--          这是弹出框修改信息-->
          <el-dialog
            title="编辑个人资料"
            :visible.sync="addDialogVisible"
            width="50%" @close="addDialogClosed">
<!--            内容主体区-->
            <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px" >
              <el-form-item label="用户名" prop="username">
                <el-input v-model="addForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="addForm.password"></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="addForm.email"></el-input>
              </el-form-item>
              <el-form-item label="简介" prop="desc">
                <el-input type="textarea" v-model="addForm.desc"></el-input>
              </el-form-item>
            </el-form>
<!--            底部区-->
            <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="addusers">确 定</el-button>
  </span>
          </el-dialog>
        </div>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="el-card-body"style="margin: -32px 0 15px;" >
          <el-tab-pane label="动态" name="first">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-tab-pane>
          <el-tab-pane label="帖子" name="second">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-tab-pane>
          <el-tab-pane label="关注" name="third">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-tab-pane>
          <el-tab-pane label="浏览记录" name="four">
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-tab-pane>
        </el-tabs>

      </el-card>
    </div>
<!--    <router-link to="/header">-->
<!--    <el-container>-->
<!--      <el-aside width="200px">-->
<!--        <el-menu :default-openeds="['1']">-->
<!--          <el-submenu index="1">-->
<!--            <template slot="title"><i class="el-icon-caret-right"></i>用户管理</template>-->
<!--            <el-menu-item-group>-->
<!--              <el-menu-item index="1-1">-->
<!--                &lt;!&ndash;name传组件名，params传递参数,需要对象：v-bind绑定对象就行了，简写：path来接收  传一个不用，携带值了需要vm双向绑定&ndash;&gt;-->
<!--                <router-link :to="{name: 'UserProfile',params:{id: 1}}">个人信息</router-link>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="1-2">-->
<!--                <router-link to="/user/list">用户列表</router-link>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="1-3">-->
<!--                <router-link to="/goHome">回到首页</router-link>-->
<!--              </el-menu-item>-->
<!--              <el-menu-item index="1-4">-->
<!--                <router-link to="/goSousuo">搜索界面</router-link>-->
<!--              </el-menu-item>-->
<!--            </el-menu-item-group>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="2">-->
<!--            <template slot="title"><i class="el-icon-caret-right"></i>内容管理</template>-->
<!--            <e1-menu-item-group>-->
<!--              <el-menu-item index="2-1">分类管理</el-menu-item>-->
<!--              <el-menu-item index="2-2">内容列表</el-menu-item>-->
<!--            </e1-menu-item-group>-->
<!--          </el-submenu>-->
<!--          <el-submenu index="3">-->
<!--            <template slot="title"><i class="el-icon-caret-right"></i>系统管理</template>-->
<!--            <e1-menu-item-group>-->
<!--              <el-menu-item index="2-1">用户设置</el-menu-item>-->
<!--              <el-menu-item index="2-2">信息修改</el-menu-item>-->
<!--            </e1-menu-item-group>-->
<!--          </el-submenu>-->
<!--        </el-menu>-->
<!--      </el-aside>-->
<!--      <el-container>-->
<!--        <el-header style="text-align: right; font-size: 12px">-->
<!--          <el-dropdown>-->
<!--            <i class="el-icon-setting" style="margin-right:15px"></i>-->
<!--            <el-dropdown-menu slot="dropdown">-->
<!--              <el-dropdown-item>个人信息</el-dropdown-item>-->
<!--              <el-dropdown-item>退出登录</el-dropdown-item>-->
<!--            </el-dropdown-menu>-->
<!--          </el-dropdown>-->
<!--          <span>{{name}}</span>-->
<!--        </el-header>-->

<!--        <el-main>-->
<!--          <router-view/>-->
<!--        </el-main>-->

<!--      </el-container>-->
<!--    </el-container>-->
<!--    </router-link>-->
  </div>
</template>

<script>
export default {
  props:['name'],
  name: "Main",
  data(){
    return{
      //控制添加用户修改对话框的显示和隐藏
      addDialogVisible:false,
      //添加用户的表单数据
      addForm:{
        username:'',
        password:'',
        email:'',
        desc:''
      },
      //添加表单的验证规则对象
      addFormRules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
          {min:3,max:10,message: '用户名的长度在3~10个字符之间',trigger: 'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {min:6,max:15,message: '密码的长度在6~15个字符之间',trigger: 'blur'}
        ],
        email:[
          {required:true,message:'请输入邮箱',trigger:'blur'},
        ],
        desc:[
          {required:true,message:'请输入个人简介',trigger:'blur'},
        ]
      },
    }
  },
  methods:{
    //监听编辑个人资料对话框的关闭事件
    addDialogClosed(){
      this.$refs.addFormRef.resetFields()
    },
    addusers(){
      this.$refs.addFormRef.validate(valid =>{
        if(!valid)return
        //ke
      })
    }
  }
  // beforeRouteEnter:(to,from,next)=>{
  //   const tokenStr = window.sessionStorage.getItem('token')
  //   if(!tokenStr) return next('/login')
  //   if(tokenStr) return next()
  // }
}
</script>

<style scoped lang="scss">
.el-card-body{
  padding: 13px;
  margin-top: -57px;
}
.font{
  position: absolute;
  width: 98px;
  height: 22px;
  top: 195px;
  left: 419px;
  font-family: Noto Sans SC;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0px;
  text-align: left;
}
.photo1{
  position: absolute;
  top: 108px;
  left: 228px;
  box-sizing: border-box;

  /*background: url(微信图片_20221103002722);*/
  border: 1px solid rgb(0, 0, 0);
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);;
}
.main-story{
  margin: 97px 158px;
  padding: 80px 16px;
}
.box-card{
  width: 569px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
body, button, p, pre{
  margin: 0;
}
html{
  scroll-padding-top: calc(52px + 2em);
  scroll-padding-bottom: 56px;
}
body{
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
  font-size: 15px;
  color: #121212;
}
body{
  -webkit-tap-highlight-color: rgba(18,18,18,0);
}
body{

}
.css-4000{
  margin-left: 27px;
}

.badge-item{
  margin-top: 10px;
}
.search{
  box-sizing: border-box;
  margin: 0;
  /*margin-left: -247px;*/
  min-width: 0;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.css-1001{
  background-color: #FFFFFF;
  -webkit-transition-property: background-color,box-shadow;
  transition-property: background-color,box-shadow;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.top-header{
  top:0;
  background-clip: content-box;
  position: fixed;
  width: 100%;
  z-index: 100;
  min-width: 1000px;
  overflow: hidden;
  background: #fff;
  -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
}

.top-header-1{
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 1000px;
  height: 52px;
  padding: 0 16px;
  margin: 0 auto;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: -webkit-transform .3s;
  transition: -webkit-transform .3s;
  transition: transform .3s;
  transition: transform .3s,-webkit-transform .3s;
}
.css-1002{
  width: auto;
  max-width: 1156px;
  min-width: 1000px;
  padding-left: 16px;
  padding-right: 100px;
}

.top-header-2{
  border-bottom: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin: 0 16px;
}

.css-2000{
  margin-left: -17px;
  margin-right: 15px;
}

.tab-1{
  padding: 0 14px;
  display: inline-block;
}
.css-2001{
  padding-left: 15px;
  padding-right: 15px;
}

.css-3001 .tab-link-1 .is-active{
  color: #121212;
}
.css-3001 .is-active:after{
  background-color: #056DE8 !important;
}
a:hover,a:active{
  color: #151313;
}
/*a:link,a:visited{*/
/*  color: #151313;*/
/*  font-size: 13px;*/
/*  text-decoration: none;*/
/*}*/
.tab-link-1.is-active:after{
  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;
  height: 3px;
  background: #056de8;
  content: "";
}
/*@media screen and (min-width: 320px) and (max-width: 1156px){*/

/*  .site-bg-dl {*/
/*    position: fixed;*/
/*    height: 100%;*/
/*    width: 100%;*/
/*    z-index: 0;*/
/*    !*background-image: url(bjxzfwzx/images/bj1.png);*!*/
/*    background-size: cover;*/
/*    background-repeat: no-repeat;*/
/*    background-attachment: fixed;*/
/*    background-size:100% 100%;*/
/*    -moz-background-size:100% 100%;*/
/*  }*/
/*}*/
.css-3001{
  /*color: undefined !important;*/
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}

.css-3001.is-active:hover{
  opacity: 1;
}
.tab-link-1.is-active{
  font-weight: 600;
  font-synthesis: style;
}
.tab-link-1{
  position: relative;
  display: inline-block;
  padding: 14px 0;
  font-size: 16px;
  line-height: 22px;
  color: #121212;
  text-align: center;
}
a{
  text-decoration: none;
}
.tab-link .is-active{
  color: #444;
}
.tab-link{
  color: #9da5b6;
}
</style>

