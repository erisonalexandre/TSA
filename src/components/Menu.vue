<template>
  <menu>
    <ul>
      <li v-for="(menu, index) in menus" :key="'menu-' + index">
        <router-link :to="menu.rota"> {{ menu.texto }} </router-link>
      </li>
    </ul>
  </menu>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true
    }
  }
}
</script>
