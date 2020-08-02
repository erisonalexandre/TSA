<template>
  <div class="c-header">
    <div class="container">
      <h1 class="c-header__titulo">{{ titulo }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_variaveis";
.c-header {
  background-color: #eff4f9;
  height: 116.5px;
  &__titulo {
    color: #445566;
    margin: 0;
    line-height: 116px;
    font-size: 71px;
    font-weight: 300;
    font-family: $font-alice;
  }
}
</style>
