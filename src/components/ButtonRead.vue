<template>
  <div>
    <button class="read-more btn-reset d-flex ml-auto">
      {{buttonText}}
    </button>
  </div>
</template>

<script>
export default {
  name: "ButtonRead",
  data() {
    return {
      text: '',
    }
  },
  props: ['buttonText']
}
</script>

<style scoped>
.read-more {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  padding: 10px 46px;
  background-color: var(--color-emerald);
  border-radius: 5px;
}
</style>