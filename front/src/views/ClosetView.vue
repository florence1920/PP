<template>
    <div>
        <div class="top">
            <Nav></Nav>
        </div>
        <div class="m14 logo">
           <Logo></Logo>
           <Drawer></Drawer>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/common/Nav.vue'
import Logo from '../components/Logo.vue'
import Drawer from '../components/Drawer.vue'
export default {
    components: {
        Nav,
        Logo,
        Drawer,
    },
}
</script>

<style>

</style>