<template>
  <footer class="footer d-flex align-center justify-center">
    <p class="text-center">© 2022 All Rights Reserved</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 22px;
  width: 100%;
  background: var(--color-cinder);
  border-radius: 10px;
  margin-top: 30px;
  p {
    margin-bottom: 0;
  }
}
</style>