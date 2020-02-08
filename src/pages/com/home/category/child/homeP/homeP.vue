<template>
  <div>
    <div class="title">
      <h6 class="title-text">
        <span>{{imgmsg.title}}</span>
      </h6>
    </div>
    <div class="homePic">
      <div class="homePicItem" v-for="(it,i) in imgmsg.imgDetail[loadMore].imgUrl" :key="i">
        <img :src="it" />
      </div>
    </div>
    <button :loading="load" class="Catebtn" @click="loadding">加载更多 >>></button>
  </div>
</template>
<script>
export default {
  props: {
    imgmsg: {}
  },
  beforeMount() {
    //console.log(this.imgmsg);
  },
  data() {
    return {
      load: false,
      loadMore: 0
    };
  },

  /* beforeMount() {
    
    this.$store.dispatch('getPic')
    this.imgMsg=this.$store.state.Pic
    console.log(this.imgMsg);
    
  }, */
  methods: {
    loadding() {
      this.load = true;
      this.loadMore+=1
    }
  }
};
</script>
<style scoped>
.title {
  margin-top: 16px;
}
.title-text span {
  display: block; /*设置为块级元素会独占一行形成上下居中的效果*/
  position: relative; /*定位横线（当横线的父元素）*/
  text-align: center;
}
.title-text span:before,
.title-text span:after {
  content: "";
  position: absolute; /*定位背景横线的位置*/
  top: 50%;
  background: #8c8c8c; /*背景横线颜色*/
  width: 35%; /*单侧横线的长度*/
  height: 1px;
}
.title-text span:before {
  left: 2%; /*调整背景横线的左右距离*/
}
.title-text span:after {
  right: 2%;
}
.Catebtn {
  width: 360px;
}
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
.homePic .homePicItem img {
  height: 224px;
  width: 160px;
}
</style>