<template>
   <div class="menuCover">
       <div class="top">
        <nav-menu></nav-menu>
       </div>
       <ul class="menuWrap">
           <li><router-link to='/closet'>Closet</router-link></li>
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
    .top {height: 58px; margin: 1.4% 1.25% 0; border-bottom: 1px solid #000000;}
    .menuCover {overflow: hidden; height: 100vh; background: #fb2;}
    .menuWrap {margin: 0 1.25% 0;}
    .menuWrap li {height: 150px; line-height: 150px; padding: 50px 0; border-bottom: 1px solid #000000; font-size: 160px;}
    .menuWrap li a:hover {color:rgb(255, 255, 255);}
    .menuWrap li:nth-child(3) {border-bottom: none;}
    .menuWrap li a {color: #000000;}
</style>