<template>
  <div class="index">
    <p>
        <router-link to="/home">Home</router-link>
        <router-link to="/history">History</router-link>
    </p>
    <div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    created:function(){
      return this.$router.push('home')
    }
}
</script>