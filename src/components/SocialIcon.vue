<template>
  <a :href="url" target="_blank"
     class="relative group w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-900 transition-all">
    <i :class="icon + ' text-gray-700 group-hover:text-white text-xl'"></i>
    <span class="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap">
      {{ label }}
    </span>
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  url: string
  icon: string
  label: string
}>()
</script>
