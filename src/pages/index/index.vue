<template>
  <div class='indexContain'>
    <img v-if="isShow" :src="userInfo.avatarUrl" alt="？">
    <button v-else class='btn' open-type='getUserInfo' @getuserinfo='getuser'>授权</button>
    <p class='username'>hello {{userInfo.nickName}}</p>
    <div class='go' @click='toHome'>
      <p>去康康</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userInfo:{},
      isShow:false
    }
  },
  beforeMount() {
    this.getmsg();
  },
  methods: {
    getuser(data){
      if(data.mp.detail.rawData){
        //授权拿到信息
        this.getmsg();
      }
    },
    getmsg(){
      wx.getUserInfo({
      success:(res)=>{
        //拿到用户数据
        this.userInfo=res.userInfo
        this.isShow=true
      },
      fail:()=>{
        console.log('fail');
      }
    })
    },
    toHome() {
      wx.switchTab({
        url:'/pages/list/main'
      })
    }
  },
}
</script>
<style scoprd>
/* page {
  background:rgb(255, 255, 255);
} */
.indexContain {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.indexContain img {
  height: 200rpx;
  width: 200rpx;
  border-radius: 50%;
  margin: 100rpx 0;
}
.indexContain .username {
  font-size: 48rpx;
  font-weight: bold;
  color: rgb(52, 89, 212);
  margin:100rpx 0;
}
.indexContain .go {
  width: 240rpx;
  height: 80rpx;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 14rpx;
  margin:40rpx 0;
  font-size: 32rpx;
  line-height: 80rpx;
  text-align: center;
  background-color: rgb(250, 244, 244);
}
.btn {
  height: 200rpx;
  width: 200rpx;
  border-radius: 100rpx !important;
  margin: 100rpx 0;
  background-color: rgb(170, 197, 228);
  color:aliceblue;
  line-height: 200rpx;
  text-align: center;
  font-size: 46rpx;
}
</style>