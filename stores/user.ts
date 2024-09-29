import { defineStore } from "pinia";

export const UserStore = defineStore("user", () => {
  const UserName = ref<string>("Anyone");

  const SetUserName = (val: string) => (UserName.value = val);

  const GetUserName = () => UserName.value;

  return { SetUserName, GetUserName };
});
