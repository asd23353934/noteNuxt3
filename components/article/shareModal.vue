<template>
  <div>
    <ButtonField
      icon="mdi:share-outline"
      class="h-8 hover:bg-green-400"
      @click="openModal(init)"
    >
      <span>{{ props.shares }}</span>
    </ButtonField>
    <Modal title="分享連結" v-model="isShowModal">
      <div>
        <div class="flex flex-row gap-2 items-end mb-2">
          <InputField
            lable="網址"
            v-model="url"
            disabled
            required
            class="w-full"
          />
          <ButtonField
            :icon="
              isCopied
                ? 'material-symbols:check-circle-outline-rounded'
                : 'mdi:content-copy'
            "
            class="bg-blue-400 text-white -translate-y-1"
            @click="copyTolog(() => copy(url))"
          />
        </div>
        <div class="flex flex-row gap-2">
          <NuxtImg
            v-for="item in thirdPartyList"
            :src="item.imageUrl"
            width="40"
            class="rounded-xl cursor-pointer"
            @click="copyTolog(item.copy)"
          />
        </div>
      </div>
    </Modal>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  shares: number;
}
const { isCopied, copy } = useHSINCopy();
const props = withDefaults(defineProps<IProps>(), { shares: 0 });
const { isShowModal, openModal, closeModal } = useHSINModal();
const { updateArticleShareCount } = useArticle();
const { idParams } = useParams();
const url = ref<string>("");
const thirdPartyList = ref([
  {
    imageUrl:
      "https://cdn.jim-nielsen.com/ios/512/facebook-2019-05-21.png?rf=1024",
    copy: () => HSINShareUtil.shareToFacebook(url.value),
  },
  {
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/X_icon_2.svg/600px-X_icon_2.svg.png?20231002152819",
    copy: () => HSINShareUtil.shareToTwitter(url.value),
  },
  {
    imageUrl:
      "https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473?h=210",
    copy: () => HSINShareUtil.shareToLinkedIn(url.value),
  },
]);
const copyTolog = (fn: Function) => {
  fn();
  stores.toast().SetToast({ message: "複製成功", type: "success" });
  updateArticleShareCount(idParams.value);
};
const init = () => {
  url.value = window.location.href;
};

onMounted(() => {
  url.value = window.location.href;
});

onBeforeUnmount(() => {
  closeModal();
});
</script>

<style scoped lang="scss"></style>
