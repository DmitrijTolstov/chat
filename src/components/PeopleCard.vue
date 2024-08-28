<script setup lang="ts">
import { users } from '@/stores/people';
import { chat } from '@/stores/chat';

import { computed, onMounted } from 'vue'


const store = users()

const storeChat = chat()


const user = computed(() => {
    return store.people;
});




onMounted(() => {
    store.fetchUsers();
    storeChat.fetchChatUser()
});


const openChat = () => {
    storeChat.openChat()
}



</script>

<template>
    <div class="card" @click='openChat()' v-for="({ firstName, lastName, phone }, index) of user" :key="index">
        <div class="card-avatar">
            <img :src='"https://i.pinimg.com/originals/b7/f9/41/b7f941ba09bef2c6c62569bf41dc9e67.jpg"' height='50'
                width='50'>
        </div>
        <div class="card-content">
            <div class="card-content_title">
                <h1 class="card-content_name">
                    {{ firstName }} {{ lastName }}
                </h1>
                <time class="card_time" datetime="01:01"> 01:01</time>
            </div>
            <p class="card-content_text">
                {{ phone }}
            </p>
        </div>
    </div>
</template>

<style scoped>
.card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    border-radius: 10px;
    transition: transform .3s linear;

    &:not(:last-child) {
        margin-block-end: 40px;

    }

    &:hover {
        transform: scale(1.05);
    }

    .card-content {
        position: relative;
        margin-inline-start: 15px;

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 1px;
            background-color: var(--text);
            bottom: -28px;
            right: 0;
            opacity: .5;
        }

        .card-content_title {
            display: flex;
            justify-content: space-between;
        }


        .card-content_name {
            padding-block-end: 5px;
        }

        .card-content_text {
            opacity: .5;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 203px;
        }
    }

}
</style>

{
"_id":123,
"lastName": "dimad",
"firstName": "asdasd",
"phone":12312312321
}