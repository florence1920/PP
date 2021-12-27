<template>
    <div class="wrapNav">
        <p class="font_head menu"><a @click="$router.go(-1)">back</a></p>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .font_head {float: left; font-size: 26px; font-weight: 400;}
    .menu {float: right;}
</style>