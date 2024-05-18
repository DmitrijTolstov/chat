<script setup lang="ts">
import { users } from '@/stores/store';

import { computed } from 'vue'

const store = users()

const searchFriends = computed(() => {
    if (store.filteredPeople.length === 0) return store.people
    return store.filteredPeople
})


</script>

<template>
    <div class="card" v-for="({ image, text, name }, index) of searchFriends" :key="index">
        <div class="card-avatar">
            <img :src="image" alt="">
        </div>
        <div class="card-content">
            <div class="card-content_title">
                <h1 class="card-content_name">
                    {{ name }}
                </h1>
                <time class="card_time" datetime="01:01"> 01:01</time>
            </div>
            <p class="card-content_text">
                {{ text }}
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
    transition: transform .5s linear;

    &:not(:last-child) {
        margin-block-end: 40px;

    }

    &:hover {
        transform: scale(1.1);
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