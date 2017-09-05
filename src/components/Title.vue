<template>
  <div class="site__title">
    <h1>{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'title',
  data() {
    return {
      name: 'Amie C.',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: rgba(118, 137, 182, 0.7);
  font-weight: 900;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.site__title {
  padding-left: 2rem;
}
</style>
