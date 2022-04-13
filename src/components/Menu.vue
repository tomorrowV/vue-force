<template>

  <nav class="nav">
    <div class="nav-inner">
      <div class="nav-top">
        <ul class="nav-list nav-list-top list-reset pl-0 pr-0">
          <li v-for="item in items" class="nav-list__item">
            <a href="" class="nav-list__link d-inline-flex align-center d-flex align-center">
              <div class="icon" :class="item.iClass"></div>
              {{ item.title }}
            </a>
          </li>
        </ul>
        <ul class="nav-list-bottom list-reset pa-0">
          <li class="nav-list__item">
            <a href="" class="nav-list__link d-inline-flex align-center">
              <div class="icon settings"></div>
              Настройки
            </a>
          </li>
          <li class="nav-list__item">
            <a href="" class="nav-list__link d-inline-flex align-center">
              <div class="icon information"></div>
              Информация
            </a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Главная",
          iClass: 'main',
        },
        {
          title: "Структура",
          iClass: 'structure',
        },
        {
          title: "Пакеты",
          iClass: 'bags',
        },
        {
          title: "MFS",
          iClass: 'cube',
        },
        {
          title: "NFT",
          iClass: 'nft',
        },
        {
          title: "Голосования",
          iClass: 'megaphone',
        }
      ],
    };
  },
  components: {},

};
</script>

<style lang="scss">
@import "~@/styles/menu.scss";

</style>
