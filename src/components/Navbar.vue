<template>
  <header class="header">
      <div class="header__inner d-flex align-center justify-space-between" style="width:100%">
        <div class="header-search d-flex align-center">
          <Input />
        </div>
        <div class="balance-items d-flex">
          <Balance />
          <Balance />
          <Balance />
        </div>        
      </div>
  </header>
</template>

<script>
import Input from "@/components/Input";
import Balance from "@/components/Balance";
export default {
  components: {
    Input,
    Balance,
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 45px;
}
.header__logo {
  margin-right: 100px;
}
.header-search {
  margin-right: 40px;
  width: 241px;
}
.header-search span {
  display: inline-block;
  color: var(--color-white);
  margin-right: 10px;
}
input {
  margin-right: 10px;
}
.sign-out {
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: var(--color-charade);
}
</style>

