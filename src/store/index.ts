import { defineStore } from "pinia";
export const useStore = defineStore({
  id: "global",
  state: () => {
    return {
      theme: true,
    };
  },
  actions: {
    changeTheme(value: boolean): void {
      console.log(this)
      this.theme = value;
    }
  }
});

