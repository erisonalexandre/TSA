<template>
  <div>
    <Menu></Menu>
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
  }
}
</script>
