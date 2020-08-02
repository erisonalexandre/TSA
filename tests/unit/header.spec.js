import { mount } from "vue-test-utils"
import Header from "../../src/components/Header"
import expect from "expect"

describe("Testando Header", () => {
  let header

  beforeEach(() => {
    header = mount(Header, {
      propsData: {
        titulo: "Cadastro"
      }
    })
  })

  it("Testando props", () => {
    expect(header.props().titulo).toBe("Cadastro")
  })

  it("Testando conteudo", () => {
    expect(header.find("h1").text()).toBe("Cadastro")
  })
})
