<template>
  <v-navigation-drawer
      class="sidebar"
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent>
    <div class="sidebar-inner">
      <a class="sidebar__logo logo d-flex align-center pb-4 mb-6" href="">
        <img src="@/assets/logo.png" width="40" height="30" alt=""/>
        <span class="ml-1">Force</span>
      </a>
      <Menu/>
      <div class="nav-bottom">
        <a class="nav-sign-out nav-list__link d-flex align-center d-flex align-center" href="">
          <div class="icon sign-out"></div>
          Выйти
        </a>
        <v-btn class="hide-sidebar d-flex ml-auto" :class="isOpen === true ? 'open' : 'close'" icon @click.stop="mini = !mini" @click="isOpen = !isOpen">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  data() {
    return {
      drawer: true,
      mini: false,
      isOpen: true,
    }
  },
  components: {
    Menu,
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: var(--color-cinder) !important;
  padding: 30px;
  flex-basis: 255px;
  max-width: 255px;
  margin-right: 30px;
  height: 100vh;
  position: sticky;
  top: 16px;
  left: 0;
  overflow: visible;

  &__logo {
    border-bottom: 1px solid var(--color-charade);

    span {
      font-weight: 500;
      font-size: 24px;
      line-height: 100%;
      display: inline-block;
    }
  }
}
</style>