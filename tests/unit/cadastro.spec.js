import { mount } from "vue-test-utils"
import Cadastro from "../../src/views/Cadastro"
import expect from "expect"

describe("Testando Cadastro", () => {
  let cadastro

  beforeEach(() => {
    cadastro = mount(Cadastro)
  })

  it("Testando conteudo cadastro", () => {
    cadastro.setData({
      nome: "Erison Alexandre",
      email: "erisonalexandre14@gmail.com",
      cpf: "81659957079",
      endereco: "rua santa helena",
      estado: "AM",
      cep: "69033620",
      cidade: "manaus",
      pagamento: "credito",
      nome_cartao: "erison a f teste",
      numero_cartao: "5447412490720528",
      mes_cartao: "06",
      ano_cartao: "2022",
      cv: "633"
    })
    cadastro.find("form").trigger("submit")
    expect(cadastro.find(".c-alerta").html()).toContain(
      "Matrícula realizada com sucesso!"
    )
  })
})
