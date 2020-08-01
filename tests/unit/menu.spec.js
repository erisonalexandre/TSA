import { mount } from "vue-test-utils"
import Menu from "../../src/components/Menu"
import expect from "expect"

function getMountedComponent(Component, propsData) {
  return mount(Component, {
    propsData
  })
}

describe("Testando Menu", () => {
  let menu

  beforeEach(() => {
    menu = getMountedComponent(Menu, {
      menus: [
        { texto: "Lista", rota: "/" },
        { texto: "Cadastro", rota: "/cadastro" },
        { texto: "Atualizar", rota: "/atualiazar" }
      ]
    })
  })

  it("Testando conteudo menu", () => {
    expect(menu.text()).toContain("Lista")
    expect(menu.text()).toContain("Cadastro")
    expect(menu.text()).toContain("Atualizar")
  })
})
