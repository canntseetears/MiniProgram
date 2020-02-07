<template>
  <div>
    <div class="title">
      <h6 class="title-text">
        <span>动漫角色</span>
      </h6>
    </div>
    <homePic></homePic>
    <button :loading="load" class="Catebtn" @click="loadding">加载更多 >>></button>
    <homeP></homeP>
  </div>
</template>
<script>
import homePic from './child/homPic/homePic'
import homeP from './child/homeP/homeP'

export default {
  data() {
    return {
      load:false,
      pro:{}
    };
  },
  props:{
    /* pro:{
      type:Object,
      default(){
        return {}
      }
    } */
  },
  components:{
    homePic,homeP
  },
  methods: {
    loadding(){
      this.load=true
    }
  },
  /* beforeMount() {
    this.$store.dispatch('getPic')
    this.pro=this.$store.state.listTmp
  }, */
  computed: {
    /* pro(){
      this.pro=this.$store.state.listTmp
      console.log(this.pro);
      
    } */
  },
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
  width:360px;
}
</style>