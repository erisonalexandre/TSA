<template>
  <div>
    <Header titulo="Cadastro"></Header>
    <form class="container py-40" id="form" @submit.prevent="submitForm">
      <div v-if="erros.length" class="c-erros">
        <p>Os campos abaixos são obrigatorios</p>
        <ul>
          <li v-for="erro in erros" :key="'erro-' + erro">{{ erro }}</li>
        </ul>
      </div>
      <div v-if="sucesso" class="c-alerta">
        Matrícula realizada com sucesso!
      </div>
      <BaseInput v-model="nome" id="nome" name="nome" label="Nome"></BaseInput>
      <BaseInput
        v-model="email"
        id="email"
        name="email"
        label="Email"
      ></BaseInput>
      <BaseInput
        v-model="cpf"
        id="cpf"
        name="cpf"
        label="CPF"
        placeholder="111.111.111-01"
      ></BaseInput>
      <BaseInput
        v-model="endereco"
        id="endereco"
        name="endereco"
        label="Endereço"
        placeholder="Rua, Número e Bairro"
      ></BaseInput>
      <BaseInput name="estado" label="Estado">
        <select
          v-model="estado"
          name="estado"
          id="estado"
          @change="pesquisarCidades"
        >
          <option value="" disabled selected>Selecione o Estado</option>
          <option
            v-for="estado in estados"
            :value="estado.sigla"
            :key="'estado-' + estado.sigla"
          >
            {{ estado.nome }}
          </option>
        </select>
      </BaseInput>
      <BaseInput
        v-model="cep"
        id="cep"
        name="cep"
        label="CEP"
        placeholder="22.222-000"
      ></BaseInput>
      <BaseInput name="cidade" label="Cidade">
        <select
          v-model="cidade"
          :disabled="!cidades.length"
          name="cidade"
          id="cidade"
        >
          <option value="" selected disabled>Selecione a Cidade</option>
          <template v-for="cidade in cidades">
            <option :value="cidade.nome" :key="'cidade-' + cidade.id">
              {{ cidade.nome }}
            </option>
          </template>
        </select>
      </BaseInput>
      <p class="color-azul mt-35"><strong>Forma de Pagamento</strong></p>
      <hr class="hr" />
      <BaseInput class="mb-20">
        <input
          v-model="pagamento"
          type="radio"
          id="credito"
          name="pagamento"
          value="credito"
        />
        <label for="credito">Cartão de Crédito</label>
        <input
          v-model="pagamento"
          type="radio"
          id="boleto"
          name="pagamento"
          value="boleto"
        />
        <label for="boleto">Boleto Bancário</label>
      </BaseInput>
      <BaseInput
        v-model="nome_cartao"
        id="nome_cartao"
        name="nome_cartao"
        label="Nome no Cartão"
        placeholder="Nome impresso no cartão"
      ></BaseInput>
      <BaseInput
        v-model="numero_cartao"
        id="numero_cartao"
        name="numero_cartao"
        label="Número no Cartão"
        placeholder="5555 5555 5555 5555"
      ></BaseInput>
      <BaseInput label="Data de Expiração">
        <select v-model="mes_cartao" name="mes_cartao" id="mes_cartao">
          <option value="" selected disabled>Mês</option>
          <option v-for="mes in meses" :value="mes" :key="'mes-' + mes">
            {{ mes }}
          </option>
        </select>
        <select v-model="ano_cartao" name="ano_cartao" id="ano_cartao">
          <option value="" selected disabled>Ano</option>
          <option v-for="ano in anos" :value="ano" :key="'ano-' + ano">
            {{ ano }}
          </option>
        </select>
      </BaseInput>
      <BaseInput
        v-model="cv"
        id="cv"
        name="cv"
        label="Código de Segurança"
        placeholder="XXX"
      ></BaseInput>
      <hr />
      <p class="color-cinza">Seu cartão será debitado em R$ 49,00</p>
      <button class="btn" type="submit">REALIZAR MATRÍCULA</button>
      <p class="color-cinza">
        <small>Informações seguras e criptografadas</small>
      </p>
    </form>
  </div>
</template>
<script>
import Header from "@/components/Header"
import BaseInput from "@/components/BaseInput"

export default {
  name: "Cadastro",
  components: {
    Header,
    BaseInput
  },
  data() {
    return {
      nome: null,
      email: null,
      cpf: null,
      endereco: null,
      estado: "",
      cep: null,
      cidade: "",
      pagamento: null,
      nome_cartao: null,
      numero_cartao: null,
      mes_cartao: "",
      ano_cartao: "",
      cv: null,
      sucesso: false,
      erros: [],
      estados: [],
      cidades: [],
      camposObrigatorios: {
        nome: "Nome",
        email: "Email",
        cpf: "CPF",
        endereco: "Endereço",
        estado: "Estado",
        cep: "CEP",
        cidade: "Cidade",
        pagamento: "Forma de pagamento",
        nome_cartao: "Nome impresso no cartão",
        numero_cartao: "Numero impresso no cartão",
        mes_cartao: "Mes da validade do cartão",
        ano_cartao: "Ano da validade do cartão",
        cv: "Código de Segurança"
      }
    }
  },
  computed: {
    meses() {
      let meses = []
      for (let i = 1; i <= 12; i++) {
        meses.push(i)
      }
      return meses
    },
    anos() {
      let anos = [],
        ano = new Date().getFullYear()
      for (var i = 1; i <= 20; i++) {
        anos.push(ano++)
      }
      return anos
    }
  },
  methods: {
    checkForm() {
      this.erros = []
      Object.entries(this.camposObrigatorios).forEach(([index, item]) => {
        if (!this[index]) {
          this.erros.push(item)
        }
      })
    },
    submitForm() {
      this.checkForm()
    },
    pesquisarEstados() {
      var headers = { method: "GET", mode: "cors" }
      fetch(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
        headers
      )
        .then((response) => response.json())
        .then((data) => {
          this.estados = data
        })
    },
    pesquisarCidades() {
      var headers = { method: "GET", mode: "cors" }
      fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.estado}/distritos`,
        headers
      )
        .then((response) => response.json())
        .then((data) => {
          this.cidades = data
        })
    }
  },
  created() {
    this.pesquisarEstados()
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variaveis";
.c-erros {
  border-radius: 5px;
  background-color: #ff5555;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  p {
    font-weight: bold;
    text-align: center;
    margin: 5px;
  }
  ul {
    list-style: none;
  }
}
.c-alerta {
  border-radius: 5px;
  background-color: #059a25;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  font-family: $font-nunito;
}
.hr {
  margin-block-start: 0.5em;
}
</style>