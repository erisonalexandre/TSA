<template>
  <div>
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
  }
}
</script>
