<template>
  <div class="homePic">
      <div class="homePicItem" @click="showDetail">
        <img src="https://sooxxx.com/ZData/Preview/SOOXXX.COM 1577808408988.JPEG" alt />
      </div>
      <div class="homePicItem">
        <img src="https://sooxxx.com/ZData/Preview/SOOXXX.COM 1577808408988.JPEG" alt />
      </div>
      <div class="homePicItem">
        <img src="https://sooxxx.com/ZData/Preview/SOOXXX.COM 1577808408988.JPEG" alt />
      </div>
      <div class="homePicItem">
        <img src="https://sooxxx.com/ZData/Preview/SOOXXX.COM 1577808408988.JPEG" alt />
      </div>
    </div>
</template>
<script>
export default {
  methods: {
    showDetail(e){
      wx.previewImage({
        urls:['https://sooxxx.com/ZData/Preview/SOOXXX.COM 1577808408988.JPEG'],
        current:'https://sooxxx.com/ZData/Preview/SOOXXX.COM 1577808408988.JPEG',
        fail(e){
          console.log(e);
        },
        success(){
          console.log('success');
        }
      })
    }
  }
}
</script>
<style scoped>
.homePic {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 5px;
}
.homePic .homePicItem {
  height: 234px;
  width: 170px;
  border: 1px solid rgb(218, 214, 214);
  border-radius: 4px;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top:10px;
}
.homePic .homePicItem img{
  height: 224px;
  width: 160px;
}
</style>