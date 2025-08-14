<template>
  <footer class="fixed bottom-0 w-full bg-gradient-to-r from-purple-500 via-blue-400 to-pink-500 text-white z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
      <!-- 版权信息 -->
      <div class="text-center md:text-left text-sm">
        © 2025 {{ $t('title') }}. All Rights Reserved.
      </div>

      <!-- 社交图标 -->
      <div class="flex gap-4 mt-2 md:mt-0 justify-center md:justify-end">
        <a href="https://github.com/chihqiang" target="_blank" class="hover:opacity-80 transition">
          <i class="fab fa-github text-xl"></i>
        </a>
        <a href="https://www.paypal.com/paypalme/chihqiang" target="_blank" class="hover:opacity-80 transition">
          <i class="fab fa-paypal text-xl"></i>
        </a>
        <a href="mailto:zhiqiang2033@gmail.com" class="hover:opacity-80 transition">
          <i class="fas fa-envelope text-xl"></i>
        </a>
        <a href="https://twitter.com/chihqiang" target="_blank" class="hover:opacity-80 transition">
          <i class="fab fa-twitter text-xl"></i>
        </a>
        <a href="https://blog.zhiqiang.wang" target="_blank" class="hover:opacity-80 transition">
          <i class="fas fa-globe text-xl"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
// 目前不需要逻辑
</script>

<style scoped>
footer {
  backdrop-filter: blur(8px); /* 半透明时背景模糊 */
}
</style>
