<template>
  <nav class="fixed w-full bg-white shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <a href="#" class="text-2xl font-bold">{{ $t('title') }}</a>
      <ul class="flex items-center gap-6">
        <li>
          <a href="#skills" class="text-2xl font-bold">{{ $t('nav.skills') }}</a>
        </li>
        <li>
          <a href="#about" class="text-2xl font-bold">{{ $t('nav.about') }}</a>
        </li>
        <li class="relative">
          <!-- 当前语言按钮 -->
          <button @click="toggleMenu" class="flex items-center gap-1 px-3 py-1 border rounded hover:bg-gray-100">
            {{ currentLangLabel }}
            <i class="fas fa-chevron-down text-sm"></i>
          </button>

          <!-- 下拉菜单 -->
          <ul v-show="open" class="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg overflow-hidden">
            <li v-for="(label, key) in languages" :key="key">
              <button
                @click="switchLang(key)"
                class="w-full text-left px-4 py-2 hover:bg-gray-100"
              >
                {{ label }}
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref, computed, defineEmits } from 'vue'

const open = ref(false)
const currentLang = ref('en')

const languages = {
  zh: '中文',
  en: 'English'
}

const currentLangLabel = computed(() => languages[currentLang.value as keyof typeof languages] )

const emit = defineEmits<{
  (e: 'switchLang', lang: string): void
}>()

function toggleMenu() {
  open.value = !open.value
}

function switchLang(lang: string) {
  currentLang.value = lang
  emit('switchLang', lang)
  open.value = false
}

</script>
