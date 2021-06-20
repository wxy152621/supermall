<template>
  <div class="recommand">
    <div v-for="item in recommends" class="recommand-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div style="color: palevioletred">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
}
</script>

<style scoped>
  .recommand{
    display: flex;
    text-align: center;
    font-size: 12px;
    border-bottom: 10px solid #eee;
  }
  .recommand-item{
    flex: 1;
    margin-bottom: 20px;
  }
  .recommand-item img{
    width: 65px;
    height: 65px;
    margin-top: 8px;
  }
</style>
