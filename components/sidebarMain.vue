<template>
  <CardColorful>
    <div class="flex items-center flex-col overflow-hidden">
      <NuxtImg class="w-40" src="image/head.jpg" loading="lazy" alt="head" />
      <div>HsinHe</div>
      <div class="text-gray-300 text-xs line-through">不努力很輕鬆</div>
      <div>_(:3 」∠ )_</div>
      <div class="flex justify-center items-center w-full mt-5 z-10">
        <NuxtLink
          class="mx-1"
          to="https://github.com/asd23353934"
          target="_blank"
        >
          <Icon name="skill-icons:github-dark" size="30" />
        </NuxtLink>
        <NuxtLink
          class="mx-1"
          to="https://mail.google.com/mail/u/0/?fs=1&amp;tf=cm&amp;to=asd23353934@gmail.com"
          target="_blank"
        >
          <Icon name="logos:google-gmail" size="30" />
        </NuxtLink>
      </div>
    </div>
  </CardColorful>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
