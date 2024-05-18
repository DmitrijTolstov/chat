<script setup lang='ts'>

import Chat from '@/components/Chat.vue'
import Friends from '@/components/Friends.vue'
import Gallery from '@/components/Gallery.vue'
import Header from '@/components/Header.vue'

</script>
<template>
    <Header></Header>
    <div class='container'>
        <Friends/>
        <Chat/>
        <Gallery/>
    </div>

    
</template>
<style scoped>

.container{
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin: 40px;
    max-height: 701px;
}
</style>