const tokens = {
  "#": { pattern: /\d/ }, // numéricos
  "X": { pattern: /[0-9a-zA-Z]/ }, // alfanuméricos
  "S": { pattern: /[a-zA-Z]/ } // alfabéticos
}

function evento(nome) {
  let evento = document.createEvent("Event")
  evento.initEvent(nome, true, true)
  return evento
}

function aplicarMascara(el, config) {
  let value = el.value
  let mascara = config.value.split("")
  var posicaoMascara = 0
  var posicaoInput = 0
  let saida = ""

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
  return saida
}

export default {
  bind(el, config) {
    if (el.tagName.toLocaleUpperCase() !== "INPUT") {
      var els = el.getElementsByTagName("input")
      el = els[0]
    }

    el.oninput = function(evt) {
      if (!evt.isTrusted) return // evitar loop
      var posicao = el.selectionEnd
      var digito = el.value[posicao - 1]
      el.value = aplicarMascara(el, config)

      while (
        posicao < el.value.length &&
        el.value.charAt(posicao - 1) !== digito
      ) {
        posicao++
      }
      if (el === document.activeElement) {
        el.setSelectionRange(posicao, posicao)
        setTimeout(function() {
          el.setSelectionRange(posicao, posicao)
        }, 0)
      }
      el.dispatchEvent(evento("input"))
    }
  }
}