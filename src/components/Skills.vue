<template>
  <div class="flex flex-col justify-center items-center h-full bg-gray-50">

    <h2 class="text-4xl font-bold mb-12">{{ t('skills.title') }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <div v-for="(skill, index) in skills" :key="index" class="gradient-card p-6 rounded shadow-lg">
        <h3 class="text-xl font-bold mb-2">{{ skill.title }}</h3>
        <p>{{ skill.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

interface Skill {
  title: string
  desc: string
}

const { t, locale, messages } = useI18n()

// 不走 t() 直接从 messages 里取数组
const skills = computed<Skill[]>(() => {
  return (messages.value[locale.value] && typeof messages.value[locale.value] === 'object' 
          && (messages.value[locale.value] as any).skills 
          && typeof (messages.value[locale.value] as any).skills === 'object' 
          && (messages.value[locale.value] as any).skills.list || []) as Skill[]
})
</script>

<style scoped>
.gradient-card {
  background: linear-gradient(135deg, #4f46e5, #06b6d4); /* 蓝紫渐变 */
  color: white;
  transition: transform 0.3s, box-shadow 0.3s;
}

.gradient-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 15px 30px rgba(79, 70, 229, 0.4), 0 0 20px rgba(6, 182, 212, 0.3);
}
</style>
