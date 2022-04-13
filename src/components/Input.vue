<template>
  <div class="search-input-wrapper">
    <input
      class="search-input input-reset"
      type="text"
      placeholder="Поиск..."
    />
    <Lightbutton class="search-input-button"/>
  </div>
</template>

<script>
import Lightbutton from "@/components/Lightbutton";
export default {
  components: {
    Lightbutton,
  }
};
</script>

<style lang="scss" scoped>

.search-input-wrapper {
  margin-right: 10px;
  position: relative;
}
.search-input {
  width: 100%;
  color: #fff;
  padding: 8px 15px;
  background: var(--color-cinder);
  border-radius: 10px;
  outline: none;
}
.search-input-button {
  position: absolute;
  top: 0;
  right: 0;
}
</style>