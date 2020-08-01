import { mount } from "vue-test-utils"
import Footer from "../../src/components/Footer"
import expect from "expect"

describe("Testando Footer", () => {
  let footer

  beforeEach(() => {
    footer = mount(Footer)
  })

  it("Testando conteudo footer", () => {
    expect(footer.text()).toContain("Erison Alexandre")
  })
})
