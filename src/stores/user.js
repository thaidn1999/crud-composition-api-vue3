import { defineStore } from 'pinia'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/users'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    users: [],
    dialog: {
      isShow: false,
      title: '',
      newUser: {
      },
    }
  }),
  getters: {
    listUsers: (state) => state.users
  },
  actions: {
    changeDialog(title, _newUser) {
      // console.log(_newUser);
      this.dialog.newUser = {
        user: {
          id: 0,
          name: "",
          email: "",
          address: {
            street: ''
          },
          phone: "",
        }
      }
      this.dialog.isShow = !this.dialog.isShow
      this.dialog.title = title
      if (_newUser === undefined) {
        _newUser = this.dialog.newUser.user
      }
      else {
        this.dialog.newUser = _newUser
      }

    },
    deleteAllUser() {
      if (window.confirm("Are you sure you want to delete?")) {
        this.users = []
      }
    },
    async getUser() {
      try {
        const response = await axios.get(`${url}`)
        this.users = response.data
      } catch (error) {
        console.log(error);
      }
    },
    async deleteUser(userId) {
      try {
        if (window.confirm("Are you sure you want to delete?")) {
          await axios.delete(`${url}/${userId}`)
          this.users = this.users.filter((user) => user.id !== userId)
        }
      } catch (error) {
        console.log(error);
      }
    },
    async addUser(_newUser) {
      if (this.dialog.newUser.user.id === 0) {
        _newUser.id = this.users.length + 1;
        this.users.push(_newUser)
        try {
          await axios.post(`${url}`, _newUser)
        } catch (error) {
          console.log(error);
        }
      }
      else {
        try {
          // for (let i = 0; i < this.users.length; i++) {
          //   if (newUser.id === this.users[i].id) {
          //     this.users[i] = newUser
          //   }
          // }
          let index = this.users.findIndex((user) => user.id === _newUser.id);
          if (index !== -1) {
            this.users[index] = _newUser;
          }
          await axios.put(`${url}/${_newUser.id}`, _newUser)
        } catch (error) {
          console.log(error);
        }

      }
    }
  }
})
