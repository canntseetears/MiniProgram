<template>
  <div>
    <div class='homeNav'>
      <div class="homeNavIt1" @click="change(1)" :style="sty1">首页</div>
      <div class="homeNavIt2" @click="change(2)" :style="sty2">排行</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show:true,
      sty1:{'background-color':'#47A3ED'},
      sty2:{'background-color':'#e7e7e7'}
    }
  },
  methods: {
    change(i){
      switch (i) {
        case 1:
          this.sty1={'background-color':'#47A3ED'},
          this.sty2={'background-color':'#e7e7e7'}
          break;
        case 2:
          this.sty1={'background-color':'#e7e7e7'},
          this.sty2={'background-color':'#47A3ED'}
          break;
      }
    }
  },
}
</script>
<style>
.listContainer .homeNav {
  display: flex;
  height: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgb(198, 216, 230);
}
.listContainer .homeNav .homeNavIt1 {
  height: 28px;
  width: 66px;
  background-color: #47A3ED;
  border-radius: 60% 0 0 60% / 50%;
  margin-right: 1px;
  line-height: 28px;
  text-align: center;
  color:blanchedalmond;
}
.listContainer .homeNav .homeNavIt2 {
  height: 28px;
  width: 66px;
  background-color: #e7e7e7;
  border-radius:0 60% 60% 0 / 50%;
  line-height: 28px;
  text-align: center;
  margin-left: 1px;
}
</style>