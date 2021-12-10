<template>
    <div class="logoWrap">
        <!--<img :src="require(`@/assets/image/check.png`)"/>-->
        <img src="@/assets/image/check.png"/>   
        <div class="current">
            <p class="sFont">37.4874°N, 126.9175°W</p>
            <p class="mFont city">Seoul</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .logoWrap {position: relative; height: 130px;}
    img { float: left; height: 130px; margin:0 0 20px; transform: rotate(-10deg);}
    .current {float: left; height: 120px; margin:0 10px 0 ;  display:flex; flex-direction: column-reverse;}
    .city {margin:0 0 10px;}
</style>