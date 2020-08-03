export default {
  bind(el, config) {
    if (el.tagName.toLocaleUpperCase() !== "INPUT") {
      var els = el.getElementsByTagName("input")
      el = els[0]
    }
    el.oninput = function(evt) {
      if (!evt.isTrusted) return // evitar loop

      let value = el.value
      let mascara = config.value.split("")
      var posicaoMascara = 0
      var posicaoInput = 0
      let saida = ""
      let tokens = {
        "#": { pattern: /\d/ }, // numéricos
        "X": { pattern: /[0-9a-zA-Z]/ }, // alfanuméricos
        "S": { pattern: /[a-zA-Z]/ } // alfabéticos
      }

      while (posicaoMascara < mascara.length && posicaoInput < value.length) {
        var cMascara = mascara[posicaoMascara]
        var pattern = tokens[cMascara]
        var cValue = value[posicaoInput]
        if (pattern) {
          if (pattern.pattern.test(cValue)) {
            saida += cValue
            posicaoMascara++
          }
          posicaoInput++
        } else {
          saida += cMascara
          if (cValue === cMascara) posicaoInput++
          posicaoMascara++
        }
      }

      el.value = saida
    }
  }
}