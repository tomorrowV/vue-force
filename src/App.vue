<template>
  <v-app id="app">
    <v-container class="app-container pa-0 pt-4 d-flex align-start">
      <Sidebar />
      <Main/>
    </v-container>
  </v-app>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import Main from "@/components/Main";
export default {
  name: "App",
  components: {
    Sidebar,
    Main,
  },
};
</script>

<style scoped>
#app {
  background: var(--color-charade);
}
</style>