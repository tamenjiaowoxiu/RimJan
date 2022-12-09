<template xmlns="http://www.w3.org/1999/html">
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
    <!--      <div class="main-story">-->
    <!--        <el-card class="box-card" style="width: 630px;margin: 0px 20px 24px;padding: 18px 20px;">-->
    <!--          <div slot="header" class="clearfix">-->
    <!--            <span class="font">迪士尼在逃公主</span>-->
    <!--            <div class="user-inner">-->
    <!--              <div class="user-inner1">-->
    <!--                <img class="photo1 user-inner2 inner" width="160" src="../img/微信图片_20221103002722.jpg">-->
    <!--              </div>-->
    <!--            </div>-->
    <!--&lt;!&ndash;            <span></span>&ndash;&gt;-->
    <!--            <el-button style="float: right; padding: 3px 0" type="text">编辑个人资料</el-button>-->
    <!--          </div>-->
    <!--          <el-tabs v-model="activeName" @tab-click="handleClick" class="el-card-body">-->
    <!--            <el-tab-pane label="动态" name="first">-->
    <!--              <div v-for="o in 4" :key="o" class="text item">-->
    <!--                {{'列表内容 ' + o }}-->
    <!--              </div>-->
    <!--            </el-tab-pane>-->
    <!--            <el-tab-pane label="帖子" name="second">-->
    <!--              <div v-for="o in 4" :key="o" class="text item">-->
    <!--                {{'列表内容 ' + o }}-->
    <!--              </div>-->
    <!--            </el-tab-pane>-->
    <!--            <el-tab-pane label="关注" name="third">-->
    <!--              <div v-for="o in 4" :key="o" class="text item">-->
    <!--                {{'列表内容 ' + o }}-->
    <!--              </div>-->
    <!--            </el-tab-pane>-->
    <!--            <el-tab-pane label="浏览记录" name="four">-->
    <!--              <div v-for="o in 4" :key="o" class="text item">-->
    <!--                {{'列表内容 ' + o }}-->
    <!--              </div>-->
    <!--              <div @click="getData">获取数据</div>-->
    <!--            </el-tab-pane>-->
    <!--          </el-tabs>-->

    <!--        </el-card>-->
    <!--      </div>-->
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
                  <div class role="list" v-infinite-scroll="load">
                    <div class="list01">
                      <div class="list1">

                        <h2 class="h2title">
                          <span>
<!--                          为什么蜜雪冰城可以这么便宜？-->{{blog.title}}
<!--                            {{$route.params.id}}-->
                        </span>
                        </h2>
                        <div class="list2">
                          <span>
                             <el-popover
                               placement="right-start"
                               width="250"
                               trigger="hover">
                               <div>
<!--                                 <img  class="blog-img-back" src="../img/微信图片_20221026233704(1).png" alt="cover">-->
                               </div>
                               <div class="blog-img-id" style="top: 12px">
                               <img src="../img/山东小红（2）.jpg" style="width: 70px;">
                               <h2 style="top: 7px;
                                    left: 90px;
                                    position: absolute;
                                    color: #409eff;">东山小红</h2>
                                 </div>
                               <div class="line2"></div>
<!--                               <div class="line1"></div>-->
                               <div style="min-height:40px;">
                                  <p style="margin:3px 48px 0px" >什么时候可以辞职呢</p>
                                 <br/>
                                 <div style="float: left">
                                   粉丝：99
                                 </div>
                                 <div style="float: right">
                                   关注：20
                                 </div>
                               </div>
                               <br/>
                               <br/>
                               <div>
                                 <el-button>关注</el-button>
                                 <el-button style="position: absolute;left: 182px;">私信</el-button>
                               </div>
                               <img slot="reference" class="blog-img" src="../img/山东小红（2）.jpg" style="border-style: solid;
                                                                          border-color: #409eff;
                                                                          cursor: pointer;
                                                                          border-radius: 12%;
                                                                          width: 44px;" >
                            </el-popover>
                            <h4 style="position: relative;
                                      float: right;
                                      right: 458px;
                                      top: -10px;
                                      color: #a3abbb;">东山小红</h4>
                            <div class="list2-21">
<!--                            {{$route.params.id}}-->
<!--                              博客作者-->
<!--                              {{blog.name}}-->
                              <br/>
                                    {{blog.content}}
<!--                              匿名：首先他有一套完整的产业链,蜜雪冰城的饮品在大众的印象中一直都是便宜、价格实惠，但是有不少人也非常好奇为什么蜜雪冰城那么便宜？并不是所有...-->
                            </div>
                          </span>
<!--                          <div class="line1"></div>-->
                          <div>
                            <el-button type="danger" @click="DeleteBlog" icon="el-icon-delete" style="position: relative;top: 2px;" circle></el-button>
                              <el-badge :value="1" class="item" type="warning"style="float: right">
                                <el-button size="small" icon="el-icon-star-off">收藏 </el-button>
                              </el-badge>
                              <el-badge :value="12" class="item"style="float: right" type="primary">
                                <el-button size="small" icon="el-icon-chat-dot-round" @click="drawer = true" >评论</el-button>
                              </el-badge>
                              <el-badge :value="12"   class="item" style="float: right">
                                <el-button  size="small" icon="el-icon-magic-stick">点赞</el-button>
                              </el-badge>
                          </div>
<!--                          评论抽屉-->
                          <el-drawer
                            title="评论"
                            :visible.sync="drawer"
                            :direction="direction">
                            <span>我来啦!</span>
                          </el-drawer>

                        </div>

                      </div>

                    </div>
<!--                    评论区-->
                    <div>
<!--                      单个回复区-->
                      <div>
                    <img src="../img/山东小红（2）.jpg" style="border-style: solid;
                                                             border-color: rgb(64, 158, 255);
                                                             cursor: pointer;
                                                             border-radius: 12%;
                                                             width: 44px;position: relative;left: 14px;top: 10px;">
                      <h4 style="position: relative;
                                display: inline-block;
                                left: 23px;">东山小红</h4>
                      <h4 style="position: relative;left: 74px;top:-8px;font-family: monospace;">感谢大家来看我写的博客，果然我还是有点害羞~~</h4>
                      <div style="position: relative;
                                  top: -15px;">
                      <el-badge :value="12" class="item"style="float: right" type="primary">
                        <el-button size="small" icon="el-icon-chat-dot-round">回复</el-button>
                      </el-badge>
                      <el-badge :value="12"   class="item" style="float: right">
                        <el-button  size="small" icon="el-icon-magic-stick">点赞</el-button>
                      </el-badge>
                      </div>
                      </div>
                      <div>
                        <img src="../img/电次花.jpg" style="border-style: solid;
                                                             border-color: rgb(64, 158, 255);
                                                             cursor: pointer;
                                                             border-radius: 12%;
                                                             width: 44px;position: relative;left: 14px;top: 10px;">
                        <h4 style="position: relative;
                                display: inline-block;
                                left: 23px;">电次</h4>
                        <h4 style="position: relative;left: 74px;top:-8px;font-family: monospace;">好耶！</h4>
                        <div style="position: relative;
                                  top: -15px;">
                          <el-badge :value="10" class="item"style="float: right" type="primary">
                            <el-button size="small" icon="el-icon-chat-dot-round" >回复</el-button>
                          </el-badge>
                          <el-badge :value="1"   class="item" style="float: right">
                            <el-button  size="small" icon="el-icon-magic-stick">点赞</el-button>
                          </el-badge>
                        </div>
                      </div>
                      <div>
                        <img src="../img/mkm.jpg" style="border-style: solid;
                                                             border-color: rgb(64, 158, 255);
                                                             cursor: pointer;
                                                             border-radius: 12%;
                                                             width: 44px;position: relative;left: 14px;top: 10px;">
                        <h4 style="position: relative;
                                display: inline-block;
                                left: 23px;">玛奇玛</h4>
                        <h4 style="position: relative;left: 74px;top:-8px;font-family: monospace;">小红酱写的真不错！</h4>
                        <div style="position: relative;
                                  top: -15px;">
                          <el-badge :value="3" class="item"style="float: right" type="primary">
                            <el-button size="small" icon="el-icon-chat-dot-round" >回复</el-button>
                          </el-badge>
                          <el-badge :value="2"   class="item" style="float: right">
                            <el-button  size="small" icon="el-icon-magic-stick">点赞</el-button>
                          </el-badge>
                        </div>
                      </div>
                      <div>

                        <img src="../img/秋.jpg" style="border-style: solid;
                                                             border-color: rgb(64, 158, 255);
                                                             cursor: pointer;
                                                             border-radius: 12%;
                                                             width: 44px;position: relative;left: 14px;top: 10px;">

                        <h4 style="position: relative;
                                display: inline-block;
                                left: 23px;">早川秋</h4>

                        <h4 style="position: relative;left: 74px;top:-8px;font-family: monospace;">想念姬野前辈的一天</h4>
                        <div style="position: relative;
                                  top: -15px;">
                          <el-badge :value="3" class="item"style="float: right" type="primary">
                            <el-button size="small" icon="el-icon-chat-dot-round" >回复</el-button>
                          </el-badge>
                          <el-badge :value="2"   class="item" style="float: right">
                            <el-button  size="small" icon="el-icon-magic-stick">点赞</el-button>
                          </el-badge>
                        </div>
                      </div>
                      <div>
                        <img src="../img/支配.jpg" style="border-style: solid;
                                                             border-color: rgb(64, 158, 255);
                                                             cursor: pointer;
                                                             border-radius: 12%;
                                                             width: 44px;position: relative;left: 14px;top: 10px;">
                        <h4 style="position: relative;
                                display: inline-block;
                                left: 23px;">那由多</h4>
                        <h4 style="position: relative;left: 74px;top:-8px;font-family: monospace;">耶！</h4>
                        <div style="position: relative;
                                  top: -15px;">
                          <el-badge :value="3" class="item"style="float: right" type="primary">
                            <el-button size="small" icon="el-icon-chat-dot-round" >回复</el-button>
                          </el-badge>
                          <el-badge :value="2"   class="item" style="float: right">
                            <el-button  size="small" icon="el-icon-magic-stick">点赞</el-button>
                          </el-badge>
                        </div>
                      </div>
                    </div>
<!--                    <el-collapse accordion>-->
<!--                      <el-collapse-item>-->
<!--                        <template slot="title">-->
<!--                          <el-button>测试</el-button>-->
<!--                        </template>-->
<!--                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>-->
<!--                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>-->
<!--                      </el-collapse-item>-->
<!--                    </el-collapse>-->
                  </div>


            </div>
          </div>
        </div>
        <div class="Main-story2">
          <el-card class="box-card">
            <h1>广告联系邱先生：155210xxxx</h1>
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
  created() {
    this.getBlogList();
    console.log(1111)
    console.log(this.blog)
  },
  props:['id','content'],
  name: "Blogs",
  data () {
    return{
      drawer:false,
      direction:'btt',
      blog:{
        query:'',
        id:[],
        title:'',
        content:'',
        url:'',
        easecontent:''
      }
    }
  },
  methods:{
     DeleteBlog(){
      this.$confirm('此操作将永久删除该博客, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
        const result = await this.$http.delete('/blogs/'+this.$route.params.id)
        if(result.status !== 200) return this.$message.error("删除失败")
        else{
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.$router.go(-1);
        }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
    },
    getDataById(){

    },
    async getBlogList(){
      const result = await this.$http.get('/blogs/'+this.$route.params.id,)
      if(result.status !== 200) return this.$message.error(result.statusText)
      this.blog = result.data.blog
      console.log(111)
      console.log(result)
      console.log(this.blog.content);
    },
  }
}
</script>

<style scoped>
.line2{
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: -26px -7px 0px;
  min-width: 0;
  background-color: #EBEBEB;
  height: 1px;
}
.blog-img-id{
  top: -5px;
  z-index: 1;
  /*position: absolute;*/
}
.blog-img:hover{
  box-shadow: 6px 7px 10px;
}
p{
  text-indent: 2em;
}
.line1{
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  background-color: #EBEBEB;
  height: 1px;
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
  width: 630px;
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
.list2-21{
  margin-top: 9px;
  margin-bottom: -4px;
  overflow: hidden;
  min-height: 236px;
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

.userinfo{
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 10px;
  width: 380px;
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

.badge-item{
  margin-top: -5px;
  margin-right: 36px;
}
.profile-a{
  margin-left: 6px;
}
.proper-c{
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  font-size: 12px;
  line-height: 14px;
  color: #8cc4fd !important;
  opacity: 0.75;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.25s;
  transition-duration: 0.25s;
  -webkit-transition-timing-function: ease-in;
  transition-timing-function: ease-in;
}
.proper i{
  display: block;
  font-size: 27px;
  cursor: pointer;
  margin-bottom: -14px;
  color: #8cc4fd;
  transition: color .15s linear;
}
.proper{
  position: relative;
  display: inline-block;
}

#menu1 {
  display: inline-block;
  padding-top: 50px;
}
/*img {*/

/*  position: absolute;*/

/*  left: 50px;*/

/*  top: 55px*/

/*}*/
/*第一版*/
.photo{
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  max-width: 100%;
  height: auto;
  max-width: 1366px;
  margin: 0 auto;
  display: block;
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.top2{
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  height: 48px;
  background-color: #FF7550;
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
  width: 630px;
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
.list01{
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
.userinfo{
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 10px;
  width: 380px;
}
/*全局设置*/
.header .container{
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #dcdfe6;
}
.header .item search{
  cursor: default;
}
.header h1{
  margin: 0;
  float: left;
  font-size: 32px;
  font-weight: 400;
}
h1{
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}
.header-1{
  /*background-color: antiquewhite;*/
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 1500;
}
.header .item{
  margin: 0;
  float: left;
  list-style: none;
  position: relative;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 9px;
}
.header .top-meta{
  transition-timing-function: ease-in;
}

.header .item a{
  text-decoration: none;
  color: #1989fa;
  opacity: .5;
  display: block;
  padding: 0 24px;
}
.img{
  vertical-align:top;
}
.header .nav-item a. router-link-active, .header .nav-item a:hover {
  opacity: 1;
}
/*.header .item a.router-link-exact-active router-link-active{*/
/*  opacity: 1;*/
/*}*/


.box-left{
  -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
}
div{
  display: block;
}
#menu{
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  width: 1000px;
  padding: 0 16px;
  margin: 10px auto;
}

li{
  display: list-item;
  text-align: -webkit-match-parent;
}
body,html{
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
}
body. main, html. main {
  overflow: hidden;
}
.header{
  height: 80px;
  background-color: #fff;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 80px;
  z-index: 100;
  position: relative;
}
.header .nav{
  float: left;
  height: 100%;
  line-height: 80px;
  background: transparent;
  padding: 0;
  margin: 0;
}

/*第二版顶层及背景图片设置*/
/*照片为未命名设计*/
/*.top1{*/
/*  box-sizing: border-box;*/
/*  margin: 0;*/
/*  min-width: 0;*/
/*  height: 263px;*/
/*  background-color: #af1f0c;*/
/*}*/
/*.photo{*/
/*  box-sizing: border-box;*/
/*  margin: 0;*/
/*  min-width: 0;*/
/*  max-width: 100%;*/
/*  height: auto;*/
/*  max-width: 1366px;*/
/*  margin: 0 auto;*/
/*  display: block;*/
/*  object-fit: cover;*/
/*  width: 71%;*/
/*  height: 100%;*/
/*}*/
/*.top{*/
/*  margin-top: 53px;*/
/*  box-sizing: border-box;*/
/*  !*margin: 0;*!*/
/*  min-width: 0;*/
/*  width: 100%;*/
/*  position: absolute;*/
/*  z-index: -1;*/
/*}*/

</style>
