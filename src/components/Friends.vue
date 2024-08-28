<script setup lang="ts">
import PeopleCard from './PeopleCard.vue';


</script>

<template>
    <main class="main-container">
        <div class="friends">
            <PeopleCard></PeopleCard>
            <button class="button-chat">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.0671 2.27157C17.5 2.09228 17.9639 2 18.4324 2C18.9009 2 19.3648 2.09228 19.7977 2.27157C20.2305 2.45086 20.6238 2.71365 20.9551 3.04493C21.2864 3.37621 21.5492 3.7695 21.7285 4.20235C21.9077 4.63519 22 5.09911 22 5.56761C22 6.03611 21.9077 6.50003 21.7285 6.93288C21.5492 7.36572 21.2864 7.75901 20.9551 8.09029L20.4369 8.60845L15.3916 3.56308L15.9097 3.04493C16.241 2.71365 16.6343 2.45086 17.0671 2.27157Z"
                        fill="#000" />
                    <path
                        d="M13.9774 4.9773L3.6546 15.3001C3.53154 15.4231 3.44273 15.5762 3.39694 15.7441L2.03526 20.7369C1.94084 21.0831 2.03917 21.4534 2.29292 21.7071C2.54667 21.9609 2.91693 22.0592 3.26314 21.9648L8.25597 20.6031C8.42387 20.5573 8.57691 20.4685 8.69996 20.3454L19.0227 10.0227L13.9774 4.9773Z"
                        fill="#000" />
                </svg>
            </button>
        </div>

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
        position: relative;

        &:hover {
            .button-chat {
                opacity: 1;
            }
        }

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
        border-radius: 50%;
        width: 45px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        position: absolute;
        bottom: 20px;
        right: 20px;
        opacity: 0;
        transition: opacity .3s linear;
    }
}
</style>