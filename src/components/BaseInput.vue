<template>
  <div class="c-baseInput">
    <slot name="label">
      <label v-if="label" :for="name">{{ label }}</label>
    </slot>
    <slot>
      <input
        :type="type"
        :name="name"
        :value="value"
        @input="$emit('input', $event.target.value)"
        :id="id"
        v-bind="{ ...$attrs }"
        v-on="metodosInput"
      />
    </slot>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    },
    id: {
      type: String
    },
    name: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String
    }
  },
  computed: {
    metodosInput() {
      const copia = { ...this._events }
      delete copia.input
      return copia
    }
  }
}
</script>
<style lang="scss">
.c-baseInput {
  label {
    display: inline-block;
    color: #445566;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  select {
    display: block;
    width: 100%;
    color: #56616b;
    background: #eff4f9;
    border-radius: 7px;
    border: none;
    box-shadow: 0px 2px 2px rgba(187, 204, 221, 0.4);
    height: 50px;
    margin-bottom: 13px;
    padding-left: 13px;
    padding-right: 13px;
    font-weight: bold;
    font-size: 16px;
    &::placeholder {
      opacity: 60%;
      color: #9eadbb;
    }
  }

  select:invalid {
    opacity: 60%;
    color: #9eadbb;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 97%;
    background-position-y: 50%;
  }
}
</style>