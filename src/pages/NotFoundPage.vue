<script setup>
import { ref } from '../stores/pokemon'

const name = ref('404')
</script>

<template>
  <div>
    {{ name }}
  </div>
</template>
