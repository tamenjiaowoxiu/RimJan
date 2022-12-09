<template>
  <div>
<div class="switch"><h2>没有/已有账户？</h2></div>
  <input type="checkbox" style="display: none;" id="change">
    <label for="change">切换</label>

    <div class="turn">
      <div class="over">
        <div class="login">
        <form action="" >
          <h1>欢迎回来</h1>
          <input type="text" placeholder="用户名">
          <input type="password" placeholder="密码">
          <input type="submit" class="btn" value="登 录">
        </form>
        </div>
        <div class="sign">
        <form action="" >
          <h1>加入我们</h1>
          <input type="text" placeholder="用户名">
          <input type="password" placeholder="密码">
          <input type="password" placeholder="确认密码">
          <input type="submit" class="btn" value="注 册">
        </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Login2"
}
</script>

<style scoped>
body{
  background-color: #abdde8;
  text-align: center;
  overflow: hidden;
  margin: 0;
}
.switch{
  background-color: #FCFBFA;
  width: 400px;
  height: 140px;
  position: absolute;
  left: 50%;
  margin-left: -200px;
  top: 73%;
  border-radius: 8px;
}
#change:checked+label,
/* +用来选择同级后面最近的元素 */
#change:not(:checked)+label{
  background-color: #FFB8CE;
  color: white;
  width: 280px;
  padding: 8px 0;
  /* +用padding方便文字垂直居中*/

  font-size: 24px;
  font-weight: 600;
  position: absolute;
  left: 50%;
  margin-left: -140px;
  top:82%;
  border-radius: 8px;
  cursor: pointer;
}
/*旋转体*/
.turn{
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  margin-left: -200px;
  top: 8%;
  /*backface-visibility:hidden;*/
  /*perspective: 800px;*/
  /*旋转的时候透视效果*/
}
.over{
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1.6s ease;
  /*旋转持续时间*/
  /*ease是快慢*/
}
#change:checked
~
.turn .over{
  transform:rotateY(180deg);
}
form{
  position: absolute;
  background-color: #FCFBFA;
  height: 100%;
  border-radius: 8px;
}
.sign{
  transform: rotateY(180deg);
  backface-visibility:hidden;
}
h1, h2{
  color: #1f2029;
  user-select: none;
}
h1{
  margin-top: 38px;
}
input{
  background-color: #4E495D;
  width: 70%;
  height: 48px;
  border-radius: 8px;
  margin-bottom: 20px;
  padding: 0 16px;
  font-size: 18px;
  color: #c4c3ca;
  font-weight: 500;
  outline: none;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(78,73,79, .5);
}
.login2 inout:nth-child(-n+3){
  margin: 20px 0;
}

.btn{
  background-color: #981E61;
  border: none;
  width: 280px;
  font-size: 24px;
  font-weight: 600;
  padding: 6px 0;
  color: white;
  border-radius: 8px;
  margin-top: 15px;
}
</style>
