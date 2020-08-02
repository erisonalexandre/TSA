<template>
  <menu class="c-menu">
    <div class="c-menu__abrir" @click="toggleMenu">
      <span></span>
    </div>
    <div class="c-menu__links" :class="[{ active: aberto }]">
      <div class="c-menu__fechar" @click="toggleMenu">
        <p><strong>Menu</strong></p>
        <button>
          <strong>X</strong>
        </button>
      </div>
      <hr />
      <ul>
        <router-link
          v-for="(menu, index) in menus"
          :key="'menu-' + index"
          :to="menu.rota"
          tag="li"
        >
          {{ menu.texto }}
        </router-link>
      </ul>
    </div>
  </menu>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      aberto: false
    }
  },
  methods: {
    toggleMenu() {
      this.aberto = !this.aberto
    }
  }
}
</script>

<style lang="scss">
.c-menu {
  &__abrir {
    display: block;
    background-color: #17222d;
    height: 45px;
    width: 100%;
    span {
      position: absolute;
      display: block;
      top: 7px;
      right: 8px;
      width: 35px;
      height: 31px;
      border: 1px #a5b8ca solid;
      border-radius: 3px;
      &::before {
        content: "";
        display: block;
        margin: 5px auto;
        width: 80%;
        height: 3px;
        background-color: #e5eaef;
        border-radius: 5px;
        box-shadow: 0 8px 0 0 #e5eaef, 0 16px 0 0 #e5eaef;
      }
    }
  }
  &__fechar {
    justify-content: space-between;
    display: flex;
    button {
      background-color: white;
      border-radius: 5px;
      border: none;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
  &__links.active {
    display: block;
  }
  &__links {
    position: absolute;
    display: none;
    border-radius: 5px;
    width: calc(100% - 1.4rem);
    padding: 1.5rem;
    top: 0;
    left: 0;
    right: 0;
    margin: 0.7rem;
    height: auto;
    background-color: #1188ee;
    color: white;
    z-index: 2000;
    ul {
      li {
        margin: 13px 0 0;
        display: flex;
        a {
          width: 100%;
        }
      }
      li:hover {
        opacity: 75%;
      }
    }
  }
}
</style>