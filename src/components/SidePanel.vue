<template>
  <div class="site__panel">
    <ul>
      <li v-for="friend in friends">{{ friend.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'title',
  data() {
    return {
      friends: [
        { name: 'Nik B.' },
        { name: 'Caime H.' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .site__panel {
    flex: 1;
  }
</style>
