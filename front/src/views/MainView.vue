<template>
    <div>
      <div class="top">
        <Nav></Nav>
      </div>
      <today-pick></today-pick>
    </div>
</template>

<script>
import todayPick from '../components/todayPick.vue'
import Nav from '../components/common/Nav.vue'
export default {
  components: { todayPick, Nav },

}
</script>

<style>

</style>