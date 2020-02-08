<template>
  <div>
    <homeP v-for="(items,i) in imgMsg" :key="i" :imgmsg="items"></homeP>
  </div>
</template>
<script>
import homeP from "./child/homeP/homeP";
//import {getListPic} from "@/network/homeList";
export default {
  data() {
    return {
      load: false,
      imgMsg:[]
    };
  },
  created() {
    wx.request({
      url:'https://gitee.com/colorss/json/raw/master/commic.json',
      success:data=>{
        this.imgMsg=data.data
      },
      fail(e){
        console.log('失败');
      }
    })
  },
  components: {
    homeP
  },
  methods: {
    loadding() {
      this.load = true;
    }
  },
  computed: {
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
</style>