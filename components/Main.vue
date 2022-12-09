<template>
  <div  class="main-1">
    <div class="header-1">
        <header class="header">
          <div class="container">
          <h1>
            <router-link to="/main">
<!--              后面版本再更改图标LOGO3-->
              <img title="www.aliguagua.com" src="../img/Aliguagua.png" width="152.75" height="77.25">
            </router-link>
          </h1>
<!--            <ul role="tablist" class="top-header-2 css-2000" >-->
<!--              <li role="tab" class="tab-1 css-2001">-->
<!--                <router-link class="tab-link css-3001 tab-link-1 is-active" to="/main">首页</router-link>-->
<!--              </li>-->
<!--              <li role="tab" class="tab-1 css-2001">-->
<!--                <router-link class="tab-link css-3001 tab-link-1 is-active" to="/login">话题</router-link>-->
<!--              </li>-->
<!--              <li role="tab" class="tab-1 css-2001">-->
<!--                <router-link class="tab-link css-3001 tab-link-1 is-active" to="/login">动态</router-link>-->
<!--              </li>-->
<!--              <li role="tab" class="tab-1 css-2001">-->
<!--                <router-link class="tab-link css-3001 tab-link-1 is-active" to="/login">公告</router-link>-->
<!--              </li>-->
<!--            </ul>-->
          <ul class="nav">
            <li class="item">
              <router-link class="top-meta" to="/main" >首页</router-link>
            </li>
            <li class="item">
              <router-link class="top-meta" to="/login">话题</router-link>
              <router-view></router-view>
            </li>
            <li class="item">
              <router-link class="top-meta" to="/content">动态</router-link>
            </li>
          </ul>
            <div class="item search">
              <el-autocomplete
                v-model="keyword"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入内容"
                @select="searchBlog"
              ></el-autocomplete>
              <el-button type="primary" icon="el-icon-search" @click="searchBlog">搜索</el-button>
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
                    <router-link :to="{
                      path:'/user',
                      query: {
                        name:$route.query.name
                      }
                    }">
                    <img class="profile-d css-1 avatar" src="../img/微信图片_20221103002722.jpg">
                    </router-link>
                  </button>
                </div>
<!--                <span>-->
<!--                    <router-link to="/login">个人中心</router-link>-->
<!--                  </span>-->
                <!--              <span class="el-avatar el-avatar--square" style="hight:50px;width: 50px;line-height: 50px;">-->
                <!--                <img class="img" src="../img/1.jpg">-->
                <!--              </span>-->
              </div>
            </div>
        </div>
      </header>
    </div>
<!--    <header role="banner" class="top-header css-1001">-->
<!--      <div class="top-header-1 css-1002">-->
<!--        <router-link to="/main">-->
<!--          <img title="www.aliguagua.com" src="../img/Aliguagua.png" width="152.75" height="77.25">-->
<!--        </router-link>-->
<!--        <ul role="tablist" class="top-header-2 css-2000" >-->
<!--          <li role="tab" class="tab-1 css-2001">-->
<!--            <router-link class="tab-link css-3001 tab-link-1 is-active" to="/main">首页</router-link>-->
<!--          </li>-->
<!--          <li role="tab" class="tab-1 css-2001">-->
<!--            <router-link class="tab-link css-3001 tab-link-1 is-active" to="/login">话题</router-link>-->
<!--          </li>-->
<!--          <li role="tab" class="tab-1 css-2001">-->
<!--            <router-link class="tab-link css-3001 tab-link-1 is-active" to="/login">动态</router-link>-->
<!--          </li>-->
<!--          <li role="tab" class="tab-1 css-2001">-->
<!--            <router-link class="tab-link css-3001 tab-link-1 is-active" to="/login">公告</router-link>-->
<!--          </li>-->
<!--        </ul>-->
<!--        <div class="search">-->
<!--          <el-autocomplete-->
<!--            v-model="state"-->
<!--            :fetch-suggestions="querySearchAsync"-->
<!--            placeholder="请输入内容"-->
<!--            @select="handleSelect"-->
<!--          ></el-autocomplete>-->
<!--          <el-button type="primary" icon="el-icon-search"class="css-4000">搜索</el-button>-->
<!--        </div>-->


<!--        <div class="userinfo">-->
<!--          <div class="proper">-->
<!--            <el-badge value="12" class="badge-item">-->
<!--              <i class="el-icon-chat-dot-square">-->
<!--                  <span style="display: inline-flex; align-items: center;">-->
<!--                  </span>-->
<!--                <div class="proper-c">通知</div>-->
<!--              </i>-->
<!--            </el-badge>-->
<!--          </div>-->
<!--          <div class="proper">-->
<!--            <el-badge value="20" class="badge-item">-->
<!--              <i class="el-icon-user">-->
<!--                <span style="display: inline-flex;align-items: center;"></span>-->
<!--                <div class="proper-c">私信</div>-->
<!--              </i>-->
<!--            </el-badge>-->
<!--          </div>-->
<!--          <div class="profile">-->
<!--            <div class="profile-a">-->
<!--              <button id="profile-b" aria-haspopup="true" aria-expanded="false" aria-owns="content" type="button"-->
<!--                      class="profile-c">-->
<!--                <router-link to="/user/:name">-->
<!--                  <img class="profile-d css-1 avatar" src="../img/微信图片_20221103002722.jpg">-->
<!--                </router-link>-->
<!--              </button>-->
<!--            </div>-->
<!--            &lt;!&ndash;                <span>&ndash;&gt;-->
<!--            &lt;!&ndash;                    <router-link to="/login">个人中心</router-link>&ndash;&gt;-->
<!--            &lt;!&ndash;                  </span>&ndash;&gt;-->
<!--            &lt;!&ndash;              <span class="el-avatar el-avatar&#45;&#45;square" style="hight:50px;width: 50px;line-height: 50px;">&ndash;&gt;-->
<!--            &lt;!&ndash;                <img class="img" src="../img/1.jpg">&ndash;&gt;-->
<!--            &lt;!&ndash;              </span>&ndash;&gt;-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </header>-->
    <div class="story">
      <div class="Top-story">
        <div>
          <div style="opacity: 1">
            <div class="top">
              <div class="top1">
<!--                 <router-link to="/optest">-->
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
              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="文章" name="first">
                  <div class role="list" v-infinite-scroll="load">
                    <div class="list0"v-for="item in blog" :key="item.id">
                      <div class="list1">
                        <h2 class="h2title">
                          <router-link class="Title-Link" :to="'/Blogs'+ '/'+item.id"  style="color: #2c3e50;text-decoration: none;">
                          <span>
<!--                          为什么蜜雪冰城可以这么便宜？-->
                            {{item.title}}
<!--                            {{$route.query.name}}-->
                        </span>
                          </router-link>
                        </h2>
                        <div class="list2">
                          <router-link class="Content-Link" :to="'/Blogs'+ '/'+item.id"  style="text-decoration: none;color: #2c3e50;">
                          <span>
<!--                            <el-skeleton :rows="6" />-->
                            <div class="list2-2" >
                              {{item.easecontent}}
<!--                          匿名：首先他有一套完整的产业链,蜜雪冰城的饮品在大众的印象中一直都是便宜、价格实惠，但是有不少人也非常好奇为什么蜜雪冰城那么便宜？并不是所有...-->
                            </div>
                          </span>
                          </router-link>
                          <div class="action">
                            <span>
                              <el-badge :value="num1"   class="item">
                                <el-button  size="small" id="Like1"  @click="ClickLike" :class="{'Like':LikeColor}" >{{Like}}</el-button>
                              </el-badge>
                              <el-badge :value="12" class="item">
                                <router-link class="Content-Link" :to="'/Blogs'+ '/'+item.id" >
                                <el-button size="small">评论</el-button>
                                </router-link>
                              </el-badge>
                              <el-badge :value="1" class="item" type="primary">
                                <el-button size="small">收藏 </el-button>
                              </el-badge>
<!--                              <el-button type="primary" round>主要按钮</el-button>-->
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>
<!--                    之前写死模板定样式的-->
<!--                    <div class="list0"v-for="item in blog" :key="item.id">-->
<!--&lt;!&ndash;                      <el-card class="box-card">&ndash;&gt;-->
<!--                      <h2 class="h2title" >-->
<!--                        为什么原神这么火？{{item.title}}-->
<!--                      </h2>-->
<!--                      <span>-->
<!--                      {{item.content}}-->
<!--                        小鸡脚：原神是米哈游旗下的一款开放世界游戏,《原神》自打公布消息以来就一直争议不断，一直站在风口浪尖上，玩家们自然分成了两派，互相对立，不断...-->
<!--                        </span>-->
<!--&lt;!&ndash;                      </el-card>&ndash;&gt;-->
<!--                    </div>-->
                  </div>

                </el-tab-pane>
                <el-tab-pane label="关注" name="second">
                  <el-empty description="小编已经在全力设计了！">
                  </el-empty></el-tab-pane>
                <el-tab-pane label="推荐" name="third">
                  <el-empty description="先逛逛其他吧！"></el-empty>
                </el-tab-pane>
              </el-tabs>
            </div>
          </div>
        </div>
        <div class="Main-story2">
          <el-card class="box-card">
            <h1>广告联系邱先生：155210xxxx</h1>
            <span>
              <router-link to="/blog">
                <el-button type="primary" icon="el-icon-edit" circle></el-button>
              </router-link>
            </span>
            <router-link to="/login2"><h2>登录</h2></router-link>
            <router-link to="/advertisement"><h2>贰货 全国4亿年轻人都在用的二手平台交易网站！！</h2></router-link>
            <router-link to="/optest"><h2>原神 点击领取2w原石！！！</h2></router-link>
            <router-link to="/header"><h2>这是测试</h2></router-link>
          </el-card>
        </div>

      </div>

      <el-container>
<!--        <el-aside width="200px"></el-aside>-->
        <el-main>

        </el-main>
        <el-container>



        </el-container>
      </el-container>
    </div>
<!--  <span>{{name}}</span>-->
</div>
</template>

<script>
export default {
  created() {
    // this.getStar();
    this.getBlogList();
    this.name = this.$route.query.name
    // this.goBlogs();
  },
  props:['name'],
  name: "Main",
  data() {
    return {
      star:'',
      keyword:'',
      name:'',
      //获取博客的参数对象
      blog:{
        query:'',
        id:[],
        title:'',
        content:'',
        url:'',
        easecontent:''
      },
      num1:1,
      num2:2,
      num3:3,
      Like:"点赞",
      LikeColor: false,
      activeName: 'first',
      restaurants: [],
      state: '',
      timeout:  null,
      // blog: []
    };
  },
  methods: {
    //获取单个博客的所有赞。
    // async getStar(){
    //   const result = await this.$http.get('/blogs/'+`${this.item.id}`)
    //   if(result.status != 200) return console.log("点赞失败")
    //   this.str = result.str;
    //   // console.log(result);
    //   // console.log(166)
    // },
   async searchBlog(){
      const result = await this.$http.get('/search'+`?keyword=${this.keyword}`)
     if(result.status !== 200)return console.log("搜索失败")
     this.$router.push({
       path:'/search',
       query:{
         keyword:this.keyword,
         name:this.name
       }
     })
    },
    // goBlogs(){
    //   this.$router.push("/Blogs"+this.blog.id);
    // },
    ClickLike(){
       // const result = await this.$http.get('/user/{id}/message/like')
      //取消失焦方法，取消：focus方法
      var element = document.getElementById('Like1')
      element.blur();
      // document.getElementbyId(Like1).blur()
      if(this.LikeColor == false){
      this.LikeColor = true;
      this.num1++;
      this.$http.put('//blogs/{id}/star')
      this.Like = "已点赞";
      }
      else {
        this.LikeColor = false;
        this.num1 -= 1;
        this.Like = "点赞"
      }
    },
    async getBlogList(){
      const result = await this.$http.get('/blogs',{ params:this.blog})
      if(result.status !== 200) return this.$message.error(result.statusText)
      this.blog = result.data.blogs
      console.log(result);
      console.log(144)
    },
//     for (let i=0;i<result.data.blogs.title;i++){
//       this.getBlogList.push({})
// }
    load(){
      this.count += 2;
    },
    // async articleitemData(){
    //   const res = await this.$http.get('/blogs'+ this.$router.params.id)
    //   console.log(res);
    //
    //   this.model = res.data[0]
    // },

    loadAll() {
      return [

        // { "value": "原神为什么这么火", "address": "长宁区新渔路144号" },
        // { "value": "抽纳西妲还是雷神", "address": "上海市长宁区淞虹路661号" },
        // { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
        // { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
        // { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
        // { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
        // { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
        // { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
        // { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
        // { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
        // { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
        // { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
        // { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
        // { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
        // { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
        // { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
        // { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
      ];
    },

    querySearchAsync(queryString, cb) {
      var restaurants = this.blog;
      var results = queryString ? blog.filter(this.createStateFilter(queryString)) : blog;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 1000 * Math.random());
    },
    // created(){
    //   this.articleitemData()
    // },
    createStateFilter(queryString) {
      return (blog) => {
        return (blog.value.toLowerCase().indexOf(queryString.toLowerCase()) !== -1);
      };
    },
    handleSelect(item) {
      console.log(item);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  //带输入建议的input框的钩子函数
  mounted() {
    // this.restaurants = this.loadAll();
    // this.getBlogList = [];
    // for(let i=0;i<result.data.blogs.title;i++){
    //   this.getBlogList.push({'value':result.data.blog[i].blogtitle})
    // }
    // return this.getBlogList;
  }
}
</script>
<style>
/*.css-1001{*/
/*  background-color: #FFFFFF;*/
/*  -webkit-transition-property: background-color,box-shadow;*/
/*  transition-property: background-color,box-shadow;*/
/*  -webkit-transition-duration: 0.25s;*/
/*  transition-duration: 0.25s;*/
/*  -webkit-transition-timing-function: ease-in;*/
/*  transition-timing-function: ease-in;*/
/*}*/
/*.top-header{*/
/*  top:0;*/
/*  background-clip: content-box;*/
/*  position: fixed;*/
/*  width: 100%;*/
/*  z-index: 100;*/
/*  min-width: 1000px;*/
/*  overflow: hidden;*/
/*  background: #fff;*/
/*  -webkit-box-shadow: 0 1px 3px rgb(18 18 18 / 10%);*/
/*  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);*/
/*}*/

/*.top-header-1{*/
/*  position: relative;*/
/*  display: -webkit-box;*/
/*  display: -ms-flexbox;*/
/*  display: flex;*/
/*  width: 1000px;*/
/*  height: 52px;*/
/*  padding: 0 16px;*/
/*  margin: 0 auto;*/
/*  -webkit-box-align: center;*/
/*  -ms-flex-align: center;*/
/*  align-items: center;*/
/*  -webkit-transition: -webkit-transform .3s;*/
/*  transition: -webkit-transform .3s;*/
/*  transition: transform .3s;*/
/*  transition: transform .3s,-webkit-transform .3s;*/
/*}*/
/*.css-1002{*/
/*  width: auto;*/
/*  max-width: 1156px;*/
/*  min-width: 1000px;*/
/*  padding-left: 16px;*/
/*  padding-right: 100px;*/
/*}*/

/*.top-header-2{*/
/*  border-bottom: none;*/
/*  display: -webkit-box;*/
/*  display: -ms-flexbox;*/
/*  display: flex;*/
/*  -ms-flex-negative: 0;*/
/*  flex-shrink: 0;*/
/*  margin: 0 16px;*/
/*}*/
/*.css-2000{*/
/*  margin-left: -17px;*/
/*  margin-right: 15px;*/
/*}*/

/*.tab-1{*/
/*  padding: 0 14px;*/
/*  display: inline-block;*/
/*}*/
/*.css-2001{*/
/*  padding-left: 15px;*/
/*  padding-right: 15px;*/
/*}*/

/*.css-3001 .tab-link-1 .is-active{*/
/*  color: #121212;*/
/*}*/
/*.css-3001 .is-active:after{*/
/*  background-color: #056DE8 !important;*/
/*}*/
/*a:hover,a:active{*/
/*  color: #151313;*/
/*}*/
/*.search{*/
/*  box-sizing: border-box;*/
/*  margin: 0;*/
/*  !*margin-left: -247px;*!*/
/*  min-width: 0;*/
/*  -webkit-flex: 1;*/
/*  -ms-flex: 1;*/
/*  flex: 1;*/
/*  -webkit-box-pack: center;*/
/*  -webkit-justify-content: center;*/
/*  -ms-flex-pack: center;*/
/*  justify-content: center;*/
/*  display: -webkit-box;*/
/*  display: -webkit-flex;*/
/*  display: -ms-flexbox;*/
/*  display: flex;*/
/*}*/
/*.css-4000{*/
/*  margin-left: 27px;*/
/*}*/
/*.badge-item{*/
/*  margin-top: 10px;*/
/*}*/
/*.tab-link-1.is-active:after{*/
/*  position: absolute;*/
/*  right: 0;*/
/*  bottom: -1px;*/
/*  left: 0;*/
/*  height: 3px;*/
/*  background: #056de8;*/
/*  content: "";*/
/*}*/
/*.css-3001{*/
/*  !*color: undefined !important;*!*/
/*  -webkit-transition-property: color;*/
/*  transition-property: color;*/
/*  -webkit-transition-duration: 0.25s;*/
/*  transition-duration: 0.25s;*/
/*  -webkit-transition-timing-function: ease-in;*/
/*  transition-timing-function: ease-in;*/
/*}*/

/*.css-3001.is-active:hover{*/
/*  opacity: 1;*/
/*}*/
/*.tab-link-1.is-active{*/
/*  font-weight: 600;*/
/*  font-synthesis: style;*/
/*}*/
/*.tab-link-1{*/
/*  position: relative;*/
/*  display: inline-block;*/
/*  padding: 14px 0;*/
/*  font-size: 16px;*/
/*  line-height: 22px;*/
/*  color: #121212;*/
/*  text-align: center;*/
/*}*/
/*a{*/
/*  text-decoration: none;*/
/*}*/
/*.tab-link .is-active{*/
/*  color: #444;*/
/*}*/
/*.tab-link{*/
/*  color: #9da5b6;*/
/*}*/

/*.el-button:focus, .el-button:hover*/

.Content-Link :hover{
  color: #7496b6;
}
.Title-Link :hover{
  color: #4783bc;
}
.Like{
  background-color: #409eff !important;
  border-color: #c6e2ff !important;
  color: #ffffff !important;
  /*autofocus:true;*/
}

/*.el-button /deep/ :focus {*/
/*  color: #606266 !important;*/
/*  border-color: #dcdfe6 !important;*/
/*  background-color: #ffffff !important;*/
/*}*/
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
  margin-bottom: 1px;
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
.top1{
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  height: 200px;
  /*第二版*/
  /*height: 229px;*/
  background-color: #af1f0c;
}
.top{
  margin-top: 80px;
  /*第二版*/
  /*margin-top: 53px;*/
  box-sizing: border-box;
  /*margin: 0;*/
  min-width: 0;
  width: 100%;
  position: absolute;
  z-index: -1;
}
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


