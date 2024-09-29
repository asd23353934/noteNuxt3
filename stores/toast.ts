import { defineStore } from "pinia";
import type { IToast } from "@hsinhe/nuxtmodule";
export const ToastStore = defineStore("toast", () => {
  const Toast = ref<IToast | null>(null);

  const SetToast = (val: IToast) => {
    Toast.value = val;
    setTimeout(
      () => {
        Toast.value = null;
      },
      (val?.time ?? 3) * 1000
    );
  };

  const GetToast = () => Toast.value;

  return {
    SetToast,
    GetToast,
  };
});
