<template>
  <div class="balance-numbers d-flex align-center">
    <div class="balance-image">
      <img src="@/assets/balance.png" alt="" width="24" height="24">
    </div>
    <p class="balance-graph ma-0">1234 BUSD</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.balance-image {
  margin-right: 7px;
  width: 24px;
  height: 24px;
}

.balance-graph {
  color: var(--color-white);
}

.balance-numbers {
  padding: 8px 25px;
  border-radius: 10px;
  background-color: var(--color-charade);

  &:not(:last-child) {
    margin-right: 30px;
  }
}
</style>