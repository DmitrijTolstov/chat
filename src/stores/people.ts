import axios from 'axios'
import { defineStore } from 'pinia'

export const users = defineStore('users',{

    state:() =>(
        {
            people : null
        }

    ),

    getters:{
        getUserState(state){
            return state.people
        },
    },

    actions:{
        async fetchUsers() {
        try {
          const data = await axios.get('http://localhost:4000/auth')
            this.people = data.data
          }
          catch (error) {
            alert(error)
            console.log(error)
        }
      }
      
    }

})


