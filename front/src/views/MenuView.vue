<template>
   <div>
       <ul class="menuWrap">
           <li><router-link to='/work'>Work</router-link></li>
           <li><router-link to='/s'>Studio</router-link></li>
           <li><router-link to='/s'>Journal</router-link></li>
       </ul>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .menuWrap {margin: 1.4% 1.25% 1%; background: #c1e0a9;}
    .menuWrap li {height: 150px; line-height: 150px; padding: 50px 0; border-bottom: 1px solid #000; font-size: 160px;}
    .menuWrap li:nth-child(3) {border-bottom: none;}
    .menuWrap li a {color: #b9a9e0;}
</style>