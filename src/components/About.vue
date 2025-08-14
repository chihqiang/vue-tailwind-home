<template>
  <section id="about" class="min-h-screen flex flex-col justify-center items-center px-4 bg-white">
    <div class="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12">
      <!-- 头像 -->
      <div class="w-64 h-64 rounded-full overflow-hidden flex items-center justify-center shadow-lg border-4 border-purple-500">
        <div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-purple-500 via-blue-400 to-pink-500 text-white text-6xl font-bold">
          <i class="fas fa-user"></i>
        </div>
      </div>

      <!-- 关于我文字 -->
      <div class="flex-1 text-center md:text-left space-y-4">
        <h2 class="text-4xl font-extrabold text-gray-900">{{ $t('about.title') }}</h2>
        <p class="text-gray-700 text-lg">{{ $t('about.desc1') }}</p>
        <p class="text-gray-700 text-lg">{{ $t('about.desc2') }}</p>

        <!-- 社交图标 -->
        <div class="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
          <SocialIcon url="https://github.com/chihqiang" icon="fab fa-github" label="chihqiang" />
          <SocialIcon url="https://www.paypal.com/paypalme/chihqiang" icon="fab fa-paypal" label="chihqiang" />
          <SocialIcon url="mailto:zhiqiang2033@gmail.com" icon="fas fa-envelope" label="zhiqiang2033@gmail.com" />
          <SocialIcon url="https://weixin.qq.com/" icon="fab fa-weixin" label="chihqiang" />
          <SocialIcon url="https://twitter.com/chihqiang" icon="fab fa-twitter" label="chihqiang" />
          <SocialIcon url="https://blog.zhiqiang.wang" icon="fas fa-globe" label="Blog" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
// 尝试使用相对路径查找，若文件结构有变化，可能需要调整路径
import SocialIcon from './SocialIcon.vue'
</script>