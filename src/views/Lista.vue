<template>
  <div>
    <Header titulo="Lista"></Header>
    <div class="container py-40">
      <p class="color-azul m-0"><strong>Lista de Clientes</strong></p>
      <hr class="hr" />
      <BaseInput
        v-model="nome"
        id="nome"
        name="nome"
        label="Nome do Cliente"
      ></BaseInput>
      <Tabela :titulos="titulos" :itens="clientesFiltrados" id="Lista"></Tabela>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header"
import BaseInput from "@/components/BaseInput"
import Tabela from "@/components/Tabela"
export default {
  name: "Lista",
  components: {
    Header,
    BaseInput,
    Tabela
  },
  data() {
    return {
      nome: null,
      clientes: [],
      titulos: {
        nome: "Nome",
        email: "Email",
        cpf: "Cpf",
        data_criacao: "Criado em"
      }
    }
  },
  computed: {
    clientesFiltrados() {
      if (this.nome) {
        return this.clientes.filter((cliente) =>
          cliente.nome.toUpperCase().includes(this.nome.toUpperCase())
        )
      }
      return this.clientes
    }
  },
  methods: {
    recuperarClientes() {
      this.clientes = JSON.parse(localStorage.getItem("lista")) ?? []
    }
  },
  created() {
    this.recuperarClientes()
  }
}
</script>

<style lang="scss" scoped>
hr {
  margin-block-start: 0.5em;
}
p {
  font-size: 20px;
}
</style>