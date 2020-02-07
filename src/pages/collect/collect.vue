<template>
  <div>
    <p>收藏</p>
    <div class='collectMain'>
      <div class='text'>相册</div>
      <div class='collectBox'>
        <div class="BoxItem">新建</div>
        <div class="BoxItem">默认</div>
        <div class="BoxItem" v-show='s'>默认</div>
      </div>
    </div>
  </div>  
</template>
<script>
export default {

}
</script>
<style scoped>
p {
  font-size:24px;
  text-align: center;
}
.collectMain .text {
  font-size:18px;
  margin-left: 10px;
  height: 30px;
}
.collectMain .collectBox {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-around;
  align-items: center;
  /* margin-top: px; */
}
.collectMain .collectBox .BoxItem {
  height: 140px;
  width: 140px;
  border-radius:8%;
  border:2px solid rgb(211, 211, 211);
  margin-top: 26px;
  text-align: center;
  line-height:140px;
  font-size: 20px;
}
</style>