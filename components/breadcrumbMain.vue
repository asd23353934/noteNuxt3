<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex items-center space-x-1 text-sm text-gray-500">
      <li>
        <NuxtLink
          to="/"
          class="hover:text-gray-700 text-nowrap"
          :class="{
            'text-blue-500 underline': route.path != '/',
          }"
          >首頁</NuxtLink
        >
      </li>
      <li
        class="flex flex-nowrap"
        v-for="(crumb, index) in breadcrumbs"
        :key="index"
      >
        <span class="mx-1">/</span>
        <NuxtLink
          :to="crumb.path"
          class="line-clamp-1"
          :class="{
            'text-gray-500 cursor-auto': index === breadcrumbs.length - 1,
            'text-blue-500 underline': index !== breadcrumbs.length - 1,
          }"
          :aria-current="index === breadcrumbs.length - 1 ? 'page' : undefined"
        >
          {{ crumb.name }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();

const breadcrumbs = computed(() => {
  const paths = route.path.split("/").filter(Boolean);
  return paths.map((path, index) => {
    return {
      name: path,
      path: "/" + paths.slice(0, index + 1).join("/"),
    };
  });
});
</script>
