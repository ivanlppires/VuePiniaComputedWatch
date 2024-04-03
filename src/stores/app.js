// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
     users : [],
  }),
  getters: {
    getUsers(){
      return this.users
    }
  },
  actions: {
    addUser(user){
      this.users.push(user)
    }
  },
})
