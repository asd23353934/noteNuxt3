import { ToastStore } from "./toast";
import { UserStore } from "./user";

export default {
  user: () => UserStore(),
  toast: () => ToastStore(),
};
