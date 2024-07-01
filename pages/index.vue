<template>
  <c-button @click="handleButtonClick" />
</template>

<script setup lang="ts">
import CButton from '@/components/core/c-button.vue'
const a: string = 'abc'
console.log(a)

const handleButtonClick = () => {
  console.log(a)
}
</script>
