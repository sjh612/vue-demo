/**
 * @name: user.js
 * @author: win10
 * @date: 2023/11/14 15:36
 * @description：user.js
 * @update: 2023/11/14 15:36
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: `user`,
  state: () => {
    return {
      name: `张三`,
    }
  },
  actions: {
    updateName(name) {
      this.name = name
    },
  },
})
