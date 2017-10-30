
<template>
  <div class="main">
    <Title />
    <Book />
  </div>
</template>

<script>
import Title from '@/components/Title';
import Book from '@/components/Book';

export default {
  components: {
    Title,
    Book,
  },
};
</script>

<style scoped>
  .main {
    flex: 1;
  }
</style>
