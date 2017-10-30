<template>
  <div class="books">
    <ul>
      <li v-for="book in books">{{ book.title }} by {{ book.author }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  title: 'Untitle Book',
  data() {
    return {
      books: [
        {
          title: 'THE ADVERTISING CONCEPT BOOK',
          author: 'Pete Barry',
        },
        {
          title: 'IMPRINT',
          author: 'DANIEL EATOCK',
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .books {
    flex: 1;
  }
</style>
