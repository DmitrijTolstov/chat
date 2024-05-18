<script setup lang="ts">
import PeopleCard from './PeopleCard.vue';


</script>

<template>
    <main class="main-container">
        <div class="friends">
            <PeopleCard></PeopleCard>
        </div>
        <button class="button-chat">Add New Chat</button>
    </main>

</template>


<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 388px;
    min-width: 320px;

    .friends {
        background-color: var(--secondary-black);
        min-height: 635px;
        padding: 20px;
        border-radius: 20px;
        overflow-y: auto;


        &::-webkit-scrollbar {
            width: 5px;
        }

        &::-webkit-scrollbar-track {
            background: var(--secondary-black);
        }

        &::-webkit-scrollbar-thumb {
            background-color: var((--main-black));
            border-radius: 20px;
        }

        scrollbar-width: thin;
        scrollbar-color: var(--secondary-black) var(--main-black);

    }

    .button-chat {
        background-color: var(--secondary-black);
        padding-block: 17px;
        border-radius: 10px;

    }
}
</style>