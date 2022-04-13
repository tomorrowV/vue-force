<template>
  <main class="main d-flex flex-column">
      <Navbar/>
      <Content/>
  </main>
</template>

<script>
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
export default {
  components: {
    Navbar,
    Content,
  },
};
</script>

<style lang="scss" scoped>

</style>