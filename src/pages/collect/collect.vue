<template>
  <div>
    <p>收藏</p>
    <div class="collectMain">
      <div class="text">相册</div>
      <div class="collectBox">
        <div class="BoxItem" @click="addBox">新建</div>
        <div class="BoxItem" v-for="(it,i) in newBox" :key="i">{{it[i]}}</div>
      </div>
    </div>
    <div class="weui-dialog" v-if="showDia">
      <div class="weui-dialog__hd">
        <strong class="weui-dialog__title">name ¿</strong>
      </div>
      <div class="weui-dialog__bd">
        <input type="text" placeholder="请输入名称" ref="pixiv" :value="picname"/>
      </div>
      <div class="weui-dialog__ft">
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="add">好了</a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">不可能</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newBox: [],
      showDia: false,
      picname: ""
    };
  },
  methods: {
    addBox() {
      this.showDia =true;
    },
    add(){
      /* this.newBox.push(this.$refs.pixiv.value) */
      this.showDia=false
      /* console.log(this.newBox); */
    }
  }
};
</script>
<style scoped>
p {
  font-size: 24px;
  color: rgb(116, 47, 156);
  text-align: center;
}
.collectMain .text {
  font-size: 18px;
  margin-left: 10px;
  height: 30px;
}
.collectMain .collectBox {
  margin-left: 18px;
  margin-right: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.collectMain .collectBox .BoxItem {
  height: 140px;
  width: 140px;
  border-radius: 8%;
  border: 2px solid rgb(211, 211, 211);
  margin-top: 26px;
  text-align: center;
  line-height: 140px;
  font-size: 20px;
}

.weui-dialog {
  position: fixed;
  z-index: 5;
  top: 50%;
  left: 16px;
  right: 16px;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  background-color: rgb(248, 246, 246);
  text-align: center;
  border-radius: 12px;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  max-height: 90%;
}
.weui-dialog__hd {
  padding: 32px 24px 16px;
}
.weui-dialog__title {
  font-weight: 700;
  font-size: 17px;
  line-height: 1.4;
}
.weui-dialog__bd {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0 24px;
  margin-bottom: 32px;
  font-size: 17px;
  line-height: 1.4;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
  color: rgba(0, 0, 0, 0.5);
}
.weui-dialog__bd:first-child {
  min-height: 40px;
  padding: 32px 24px 0;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.9);
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
.weui-dialog__ft {
  position: relative;
  line-height: 56px;
  min-height: 56px;
  font-size: 17px;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}
.weui-dialog__ft:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.weui-dialog__btn {
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  color: #576b95;
  font-weight: 700;
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  position: relative;
}
.weui-dialog__btn:active {
  background-color: #ececec;
}
.weui-dialog__btn:after {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  width: 1px;
  bottom: 0;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.1);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleX(0.5);
  transform: scaleX(0.5);
}
.weui-dialog__btn:first-child:after {
  display: none;
}
.weui-dialog__btn_default {
  color: rgba(0, 0, 0, 0.9);
}
.weui-skin_android .weui-dialog {
  text-align: left;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.1);
}
.weui-skin_android .weui-dialog__title {
  font-size: 22px;
  line-height: 1.4;
}
.weui-skin_android .weui-dialog__hd {
  text-align: left;
}
.weui-skin_android .weui-dialog__bd {
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
}
.weui-skin_android .weui-dialog__bd:first-child {
  color: rgba(0, 0, 0, 0.9);
}
.weui-skin_android .weui-dialog__ft {
  display: block;
  text-align: right;
  line-height: 40px;
  min-height: 40px;
  padding: 0 24px 16px;
}
.weui-skin_android .weui-dialog__ft:after {
  display: none;
}
.weui-skin_android .weui-dialog__btn {
  display: inline-block;
  vertical-align: top;
  padding: 0 0.8em;
}
.weui-skin_android .weui-dialog__btn:after {
  display: none;
}
.weui-skin_android .weui-dialog__btn:last-child {
  margin-right: -0.8em;
}
.weui-skin_android .weui-dialog__btn_default {
  color: rgba(0, 0, 0, 0.9);
}
@media screen and (min-width: 352px) {
  .weui-dialog {
    width: 320px;
    margin: 0 auto;
  }
}
</style>