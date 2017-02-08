<template lang="pug">
  .index
    p
      router-link(to="/home") Home
      router-link(to="/history") History
    div
      router-view
</template>

<script>
export default {
    created:function(){
      return this.$router.push('home')
    }
}
</script>