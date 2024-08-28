import axios from 'axios';
import { defineStore } from 'pinia';



export const chat = defineStore('chat',{


state:() =>(
    
    {
        user:{
            id: null,
            chat: false
        }
    }
    ),
    actions:{
        openChat(){
            this.user.chat = true
            
        },
        async fetchChatUser(){
            try{
                const data = await axios.get('http://localhost:4000/auth')
                data.data.map(el =>{
                    this.user.id = el._id
                    this.user.chat = el.chat
                })
            }catch(error){
            console.log(error)
            }
        }
    }
})