<script setup lang='ts'>

import Friends from '@/components/Friends.vue'
import Gallery from '@/components/Gallery.vue'
import Chat from '@/components/Chat.vue'
import Header from '@/components/Header.vue'

</script>
<template>
    <Header></Header>
    <div class='container'>
        <Friends />
        <div class="chat" v-if='false'>
            <Chat />
            <Gallery />
        </div>

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
</style>