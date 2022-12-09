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
    <div class="story">
      <div class="Top-story">
        <div>
          <div style="opacity: 1">
            <div class="top">
              <div class="top1">
                <!--                 <router-link to="/optest">-->
                <!--                  <img src="../img/未命名的设计 - 副本.png" class="photo">-->
                <img src="../img/微信图片_20221026233704(1).png" class="photo">
                <!--                 </router-link>-->
              </div>
              <!--              <div class="top2"></div>-->
            </div>
          </div>
        </div>
      </div>
      <div style="height: 180px"></div>

    <div class="Main-story">
      <div class="Main-story1">
        <div class="box-left" style="box-shadow: rgba(0,0,0,0.12) 0px 2px 4px,rgba(0,0,0,0.04) 0px 0px 6px">
          <div class="box-left1">
            <label class="Input-title Input-title1 Input-title2">
              <textarea rows="1" class="Input Input1" placeholder="标题" style="height: 45px" v-model="blog.title"></textarea>
            </label>
            <div class="line1"></div>
            <div class="Input-edit">
<!--              <label class="Input-edit1 css-edit ">-->
<!--                <textarea rows="1" class="Input-1 Input-2" placeholder="正文" style="height: 45px"></textarea>-->
<!--              </label>-->
              <div ref="editor" v-on:input="getData" class="css-edit" contenteditable="true"  placeholder="正文">正文</div>
              <div class="Input-edit1">
<!--                <input multiple type="file" accept="image/webp,image/jpg,image/jpeg,image/png,image/gif" style="display: none;">-->
              </div>
            </div>
            <div class="line1"></div>
            <span class="button">
               <el-button type="success" icon="el-icon-check" @click="addBlog" circle></el-button>
              <el-button type="danger" icon="el-icon-delete" style="position: relative;left: 40px" circle></el-button>
            </span>
          </div>
        </div>
      </div>
      <div class="Main-story2">
        <el-card class="box-card" style="width: 327px">
          <h1>广告联系邱先生：155210xxxx</h1>
          <span>
              <router-link to="/blog">
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
              </router-link>
            </span>
          <router-link to="/advertisement"><h2>贰货 全国4亿年轻人都在用的二手平台交易网站！！</h2></router-link>
          <router-link to="/optest"><h2>原神 点击领取2w原石！！！</h2></router-link>
          <router-link to="/header"><h2>这是测试</h2></router-link>
        </el-card>
      </div>

    </div>
    </div>
  </div>


</template>

<script>
export default {

  name: "Blog",
  data () {
    return {
      //获取博客的参数对象
      blog: {
        query: '',
        id: [],
        title: '',
        content: ''
      },
    }
  },
  methods:{
    getData(){
      this.blog.content = this.$refs.editor.innerHTML;
    },
    //点击按钮，添加博客
    async addBlog(){
     const result = await this.$http.post('/blogs',this.blog)
    if(result.status !== 200){
      this.$message.error('添加博客失败')

    }
      else {
      this.$message.success('添加博客成功！')
      this.$router.go(-1)
      // console.log(result)

      // this.getBlogList()
    }
    }
  }

}
</script>

<style scoped>
.button{
  position: relative;
  left: 568px;
}
.Input-edit1{
  outline: none;
  user-select: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
}
.css-edit{
  color: #303133;
  /*width: 400px;*/

  min-height: 60px;

line-height: 30px;

max-height: 300px;

_height: 60px;

  margin: 0 auto;

padding: 10px;

outline: 0;

/*border: 1px solid #a0b3d6;*/

border-radius: 4px;

font-size: 16px;

  word-wrap: break-word;

  overflow-x: hidden;

  overflow-y: auto;

  _overflow-y: visible;

  -webkit-user-modify: read-write-plaintext-only;
}
.Input-edit{
  margin: 30px 0;
  line-height: 1.6;
  font-size: 16px;
  min-height: 300px;
  padding: 0;
  cursor: text;
  /*padding: 6px 12px;*/
}
.line1{
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #EBEBEB;
  height: 1px;
}
/*.Input-1{*/
/*  -webkit-box-flex: 1;*/
/*  background: transparent;*/
/*  border: none;*/
/*  -ms-flex: 1 1;*/
/*  flex: 1 1;*/
/*  font-family: inherit;*/
/*  font-size: inherit;*/
/*  font-weight: inherit;*/
/*  overflow: hidden;*/
/*  padding: 0;*/
/*  resize: none;*/
/*  outline: 0;*/
/*}*/
/*.Input-2{*/
/*  border: 0;*/
/*  display: block;*/
/*  font-size: 16px;*/
/*  font-synthesis: style;*/
/*  !*font-weight: 600;*!*/
/*  height: 44px;*/
/*  line-height: 1.4;*/
/*  min-height: 44px;*/
/*  width: 100%;*/
/*}*/
.Input1{
  -webkit-box-flex: 1;
  background: transparent;
  border: none;
  -ms-flex: 1 1;
  flex: 1 1;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  overflow: hidden;
  padding: 0;
  resize: none;
  outline: 0;
}
.Input{
  border: 0;
  display: block;
  font-size: 32px;
  font-synthesis: style;
  font-weight: 600;
  height: 44px;
  line-height: 1.4;
  min-height: 44px;
  width: 100%;
}
.Input-title1{
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  height: 34px;
  padding: 4px 10px;
  position: relative;
  -webkit-transition: background .2s,border .2s;
  transition: background .2s,border .2s;
  width: 180px;
}
.Input-title{
  border: 0;
  height: auto;
  margin: 16px 9px;
  padding: 0;
  position: relative;
  width: 100%;
}
.Main-story{
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 1000px;
  padding: 81px 16px;
  margin: -20px auto;
}
.Main-story1{
  -ms-flex-negative: 0;
  flex-shrink: 0;
  margin-right: 10px;
  margin-bottom: 0;
  width: 722px;
}
.box-left1{
  margin-bottom: 10px;
  background: #fff;
  overflow: hidden;
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
/*.story{*/
/*  background-color: #909399;*/
/*  background-position: bottom;*/
/*}*/
.list0{
  margin-bottom: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  border-bottom: 1px solid #f0f2f7;
  padding: 20px;
}
.h2title{
  line-height: 1.6;
}
.el-tabs__header is-top {
  padding: 0;
  position: relative;
  margin: 0 0 -14px;
}
.list2{
  line-height: 1.67;
}
.list2-2{
  margin-top: 9px;
  margin-bottom: -4px;
  overflow: hidden;
  max-height: 100px;
}

.css-1{
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  max-width: 100%;
  height: auto;
  background-color: #FFFFFF;
  width: 43px;
  height: 43px;
  border-radius: 2px;
}
.avatar{
  background: #fff;
  border-radius: 2px;
}
.profile-c{
  display: inline-block;
  padding: 0 16px;
  font-size: 21px;
  line-height: 43px;
  text-align: center;
  cursor: pointer;
  background: none;
  border: 0px solid;
  border-radius: 3px;
}
.profile-d{
  vertical-align: top;
}
.Main-story2{
  max-width: 296px;
  /*-webkit-align-self: normal;*/
  -ms-flex-item-align: normal;
  align-self: normal;
}
.text {
  font-size: 14px;
}


.box-card {
  /*黄金分割率*/
  width: 394px;
}
.action{
  clear: both;
  margin: 23px -4px -2px;
  background: white;
}
.item{
  margin-top: 10px;
  margin-right: 40px;
}
/*.userinfo{*/
/*  -ms-flex-negative: 0;*/
/*  flex-shrink: 0;*/
/*  -webkit-box-pack: end;*/
/*  -ms-flex-pack: end;*/
/*  justify-content: flex-end;*/
/*  display: -webkit-box;*/
/*  display: -ms-flexbox;*/
/*  display: flex;*/
/*  -webkit-box-align: center;*/
/*  -ms-flex-align: center;*/
/*  align-items: center;*/
/*  margin-left: 10px;*/
/*  width: 380px;*/
/*}*/
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
.css-4000{
  margin-left: 27px;
}
.badge-item{
  margin-top: 10px;
}
.tab-link-1.is-active:after{
  position: absolute;
  right: 0;
  bottom: -1px;
  left: 0;
  height: 3px;
  background: #056de8;
  content: "";
}
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
.top1 {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  height: 229px;
  background-color: #af1f0c;
}
.top {
  margin-top: 53px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  /* margin: 0; */
  min-width: 0;
  width: 100%;
  position: absolute;
  z-index: -1;
}
</style>
