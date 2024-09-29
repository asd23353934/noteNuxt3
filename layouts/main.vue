<template>
  <div class="pb-5">
    <HeaderMain />
    <div class="container mx-auto px-4">
      <div
        class="flex flex-col gap-2 mt-5 md:flex-row md:flex-nowrap md:justify-between"
      >
        <div class="md:min-w-60">
          <SidebarMain class="hidden md:block" />
          <hr class="mt-2 hidden md:block" />
          <TagMain :items="articleTagInfos" />
        </div>
        <div class="w-full md:px-5">
          <div class="flex flex-col md:flex-row">
            <div class="hidden md:block">
              <ButtonField
                :icon="'material-symbols-light:keyboard-backspace'"
                class="bg-blue-400 text-white md:mr-2"
                @click="router.back()"
              />
            </div>
            <div class="md:hidden">
              <ButtonField
                class="w-full bg-blue-400 text-white md:mr-2 md:hidden"
                @click="router.back()"
                >回上頁</ButtonField
              >
            </div>

            <BreadcrumbMain class="my-2" />
          </div>

          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const { articleTagInfos, getArticleTagInfos } = useArticleTag();
const init = async () => {
  await getArticleTagInfos();
};
init();
</script>

<style scoped lang="scss"></style>
