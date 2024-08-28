<script setup lang='ts'>

import Friends from '@/components/Friends.vue'
import Gallery from '@/components/Gallery.vue'
import Chat from '@/components/Chat.vue'
import Header from '@/components/Header.vue'

import { chat } from '@/stores/chat'

import { computed } from 'vue'

const store = chat()

const chatVisible = computed(() => {
    return store.user.chat
})



</script>
<template>
    <Header></Header>
    <div class='container'>
        <Friends />
        <div class="chat" v-if='chatVisible'>
            <Chat />
            <Gallery />
        </div>
        <div class='emptyMessage' v-else>no messages</div>

    </div>

</template>
<style scoped>
.container {
    display: flex;
    margin: 40px;
    max-height: 701px;
}

.chat {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin: 40px;
    max-height: 701px;
}

.emptyMessage {
    font-size: 50px;
    margin: auto;
}
</style>