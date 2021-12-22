<template>
   <div class="menuCover">
       <div class="top">
        <nav-menu></nav-menu>
       </div>
       <ul class="menuWrap">
           <li><router-link to='/work'>Work</router-link></li>
           <li><router-link to='/s'>Studio</router-link></li>
           <li><router-link to='/s'>Journal</router-link></li>
       </ul>
   </div>
</template>

<script>
import NavMenu from '../components/common/NavMenu.vue'
export default {
  components: { NavMenu },

}
</script>

<style scoped>
    .top {height: 58px; margin: 1.4% 1.25% 0; border-bottom: 1px solid #b9a9e0;}
    .menuCover {overflow: hidden; height: 100vh; background: #c1e0a9;}
    .menuWrap {margin: 0 1.25% 0;}
    .menuWrap li {height: 150px; line-height: 150px; padding: 50px 0; border-bottom: 1px solid #b9a9e0; font-size: 160px;}
    .menuWrap li:nth-child(3) {border-bottom: none;}
    .menuWrap li a {color: #b9a9e0;}
</style>