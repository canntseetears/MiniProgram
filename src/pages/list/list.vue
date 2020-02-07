<template>
  <div class="listContainer">
    <homeNav></homeNav>
    <carousel></carousel>
    <category></category>
  </div>  
</template>
<script>
import homeNav from '../com/home/homeNav/homeNav'
import carousel from '../com/home/carousel/carousel'
import category from '../com/home/category/category'

export default {
  components:{
    homeNav,carousel,category
  },
  data() {
    return {}
  }
}
</script>
