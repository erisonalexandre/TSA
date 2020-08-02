<template>
  <div>
    <Header titulo="Cadastro"></Header>
    <form class="container py-40">
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
        <select v-model="estado" required name="estado" id="estado">
          <option value="" disabled selected>Selecione o Estado</option>
        </select>
      </BaseInput>
      <BaseInput
        v-model="endereco"
        id="endereco"
        name="endereco"
        label="Endereço"
        placeholder="Rua, Número e Bairro"
      ></BaseInput>
      <BaseInput
        v-model="cep"
        id="cep"
        name="cep"
        label="CEP"
        placeholder="22.222-000"
      ></BaseInput>
      <BaseInput name="cidade" label="Cidade">
        <select v-model="cidade" required name="cidade" id="cidade">
          <option value="" selected disabled>Selecione a Cidade</option>
        </select>
      </BaseInput>
      <p class="color-azul mt-35"><strong>Forma de Pagamento</strong></p>
      <hr />
      <BaseInput>
        <input type="radio" id="credito" name="pagamento" value="credito" />
        <label for="credito">Cartão de Crédito</label>
        <input type="radio" id="boleto" name="pagamento" value="boleto" />
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
        <select v-model="mes_cartao" required name="mes_cartao" id="mes_cartao">
          <option value="" selected disabled>Mês</option>
        </select>
        <select v-model="ano_cartao" required name="ano_cartao" id="ano_cartao">
          <option value="" selected disabled>Ano</option>
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
      cv: null
    }
  }
}
</script>