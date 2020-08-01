<template>
  <div>
    <Menu :menus="menus"></Menu>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from "./components/Menu"
import Footer from "./components/Footer"
export default {
  components: {
    Menu,
    Footer
  },
  data() {
    return {
      menus: [
        { texto: "Lista", rota: "/" },
        { texto: "Cadastro", rota: "/cadastro" }
      ]
    }
  }
}
</script>
