import { defineStore } from 'pinia'

export const users = defineStore('users',{

    state:() =>(
        {
            filteredPeople:[],
            people : [
                {
                    image: 'src/assets/images/avatar-friends/image1.png',
                    name: 'Darrell Steward',
                    text: 'Amet minim mollit non deserunt ulla...'
                },
                {
                    image: 'src/assets/images/avatar-friends/image2.png',
                    name: 'Kathryn Murphy',
                    text: 'Amet minim mollit non deserunt ulla...'
                },
                {
                    image: 'src/assets/images/avatar-friends/image3.png',
                    name: 'Esther Howard',
                    text: 'Amet minim mollit non deserunt ulla...'
                },
                {
                    image: 'src/assets/images/avatar-friends/image4.png',
                    name: 'Kristin Watson',
                    text: 'Amet minim mollit non deserunt ulla...'
                },
                {
                    image: 'src/assets/images/avatar-friends/image5.png',
                    name: 'Kristin Watson',
                    text: 'Amet minim mollit non deserunt ulla...'
                },
                {
                    image: 'src/assets/images/avatar-friends/image6.png',
                    name: 'Esther Howard',
                    text: 'Amet minim mollit non deserunt ulla...'
                },
                {
                    image: 'src/assets/images/avatar-friends/image7.png',
                    name: 'Cody Fisher',
                    text: 'Amet minim mollit non deserunt ulla...'
                },
                {
                    image: 'src/assets/images/avatar-friends/image7.png',
                    name: 'Cody Fisher',
                    text: 'Amet minim mollit non deserunt ulla...'
                },
            ],
        }

    ),

    getters:{
        
    },

    actions:{
        search(str: string): void {
            const filtered = this.people.filter(people =>people.name.toLowerCase().includes(str) )

            this.filteredPeople = filtered
        }
    }

})
// 


