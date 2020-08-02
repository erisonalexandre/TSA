import { mount } from "vue-test-utils"
import BaseInput from "../../src/components/BaseInput"
import expect from "expect"

describe("Testando BaseInput", () => {
  it("Alterando v-model", () => {
    var parent = mount({
      data() {
        return { nome: null }
      },
      template: '<div> <BaseInput v-model="nome"></BaseInput> </div>',
      components: { BaseInput: BaseInput }
    })

    var baseInputInnerTextField = parent.find("input")
    baseInputInnerTextField.element.value = "erison"
    baseInputInnerTextField.trigger("input")
    expect(parent.vm.nome).toBe("erison")

    baseInputInnerTextField.element.value = "Alexandre"
    baseInputInnerTextField.trigger("input")
    expect(parent.vm.nome).toBe("Alexandre")
  })

  it("Testando label", () => {
    var baseInput = mount(BaseInput, {
      propsData: {
        label: "Nome"
      }
    })

    expect(baseInput.find("label").text()).toBe("Nome")
  })
})
