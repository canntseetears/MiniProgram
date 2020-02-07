<template>
  <div>
    <div class="headd">
      <div class='headP'>
        <img src="https://pic2.zhimg.com/80/v2-176921c50a9bcfa92cee08a9c63871d4_hd.jpg" />
      </div>
      <div class='userInfo'>
        <div><p>无名氏1号</p></div>
        <!-- <progress percent="50" /> -->
      </div>
      <!-- <div class='space'>空间</div> -->
    </div>
    <div class='pic'>
      <image src="/static/images/im.jpeg" mode="aspectFill"></image>
    </div>
    <div class='list'><span>上传图片</span><div class='s1'><button size='mini'>></button></div></div>
    <div class='list'><span>反馈建议</span><div class='s1'><button size='mini'>></button></div></div>
    <div class='list'><span>添加分类</span><div class='s1'><button size='mini'>></button></div></div>
  </div>  
</template>
<script>
export default {

}
</script>
<style scoped>
.headd {
  display: flex;
  height: 86px;
  border-bottom: 1px solid rgb(236, 234, 234);
  align-items: center;
}
.headd .headP {
  height: 60px;
  width: 60px;
  margin-left: 20px;
}
.headd .headP img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.headd .userInfo {
  width: 120px;
  height: 60px;
  margin-left:40px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
}
.pic image {
  width: 100%;
  height: 80px;
  margin-top: 4px;
}
.list {
  width: 100%;
  height: 40px;
  /* border-top:1px solid rgb(221, 220, 220); */
  border-bottom:1px solid rgb(221, 220, 220);
  line-height: 40px;

  margin-top: 4px;
}
.list span {
  margin-left: 14px;
}
.list .s1{
  float: right;
  margin-right: 10px;
}
/* .headd .space {
  height: 50px;
  width: 70px;
  margin-left:100px;
  background-color: rgb(85, 78, 78);
} */
</style>