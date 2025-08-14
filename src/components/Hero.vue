<template>
  <section id="hero" class="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-white px-4 text-center">
    <!-- 主标题 -->
    <h1 class="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg animate-fadeIn">
      {{ $t('hero.title') }}
    </h1>
    <!-- 副标题 -->
    <p class="text-2xl md:text-3xl mb-8 max-w-3xl drop-shadow-md animate-fadeIn delay-200">
      {{ $t('hero.desc') }}
    </p>
    <!-- 按钮组 -->
    <div class="flex flex-wrap justify-center gap-4 animate-fadeIn delay-400">
      <a href="#skills" class="gradient-btn px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
        {{ $t('hero.btnSkills') }}
      </a>
      <a href="https://blog.zhiqiang.wang" target="_blank" class="gradient-btn px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
        {{ $t('hero.btnBlog') }}
      </a>
      <a href="https://github.com/chihqiang" target="_blank" class="gradient-btn px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300">
        {{ $t('hero.btnProject') }}
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Hero 组件暂时只负责渲染，不需要额外逻辑
</script>

<style scoped>
/* 渐变按钮 */
.gradient-btn {
  background: linear-gradient(90deg, #ff7eb3, #ff758c);
  color: white;
  font-weight: 600;
  transition: all 0.3s ease;
}
.gradient-btn:hover {
  background: linear-gradient(90deg, #ff758c, #ff7eb3);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

/* 简单的淡入动画 */
@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.8s forwards;
}
.animate-fadeIn.delay-200 {
  animation-delay: 0.2s;
}
.animate-fadeIn.delay-400 {
  animation-delay: 0.4s;
}
</style>
