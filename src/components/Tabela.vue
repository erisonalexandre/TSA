<template>
  <div class="tabela">
    <div class="tabela-row">
      <div
        v-for="(titulo, index) in titulos"
        :key="id + '-' + index"
        class="tabela-cell"
      >
        {{ titulo }}
      </div>
    </div>
    <div
      v-for="(item, index) in itens"
      :key="'item-' + index"
      class="tabela-row"
    >
      <div
        class="tabela-cell"
        v-for="(titulo, index) in titulos"
        :key="id + '-' + item + '-item-' + index"
      >
        {{ item[index] }}
      </div>
    </div>
    <div class="block">
      <div class="tabela-cell"></div>
      <div class="tabela-cell"></div>
      <div class="tabela-cell"></div>
      <div class="tabela-cell"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itens: {
      type: Array,
      required: true
    },
    titulos: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      default: "tabela"
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variaveis";

.tabela {
  border: 2px solid #dbe2e8;
  display: table;
  width: 100%;
  height: 500px;
  font-family: $font-nunito;
  font-size: 11px;
  font-weight: bold;
  white-space: nowrap;

  .tabela-cell {
    display: table-cell;
    border-bottom: 2px solid #dbe2e8;
    border-right: 2px solid #dbe2e8;
    height: 8px;
    padding: 8px;
    &:last-child {
      border-right: none;
    }
  }

  .tabela-row {
    display: table-row;
    width: 100%;
  }

  .block {
    display: table-row;
    width: 100%;
    height: 100%;
    .tabela-cell {
      border-bottom: none;
    }
  }
}
</style>