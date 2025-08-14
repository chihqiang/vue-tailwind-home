<template>
  <Header @switchLang="switchLang" />
  <section id="hero" class="snap-start h-screen">
    <Hero />
  </section>

  <section id="skills" class="snap-start h-screen">
    <Skills />
  </section>
  <section id="about" class="snap-start h-screen">
    <About />
  </section>
  <Footer />
</template>

<script lang="ts" setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import Footer from './components/Footer.vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function switchLang(lang: string) {
  locale.value = lang
}
</script>
