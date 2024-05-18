<script setup lang="ts">
import Print from './Print.vue'

</script>

<template>
    <div class="container-chat">
            <section class="chat" >
            <div class="outgoing message">
                hello
            <div class="triangle triangle-outgoing"></div>
            </div>
            <div class="incoming message">
                Who was that photographer you shared with me recently?Who was that photographer you shared with me recently?Who was that photographer you shared with me recently?Who was that photographer you shared with me recently?
                <div class="triangle triangle-incoming"></div>
            </div>
            <div class="incoming message">
                Who was that photographer you shared with me recently?Who was that photographer you shared with me recently?Who was that photographer you shared with me recently?Who was that photographer you shared with me recently?
                <div class="triangle triangle-incoming"></div>
            </div>
            <div class="incoming message">
                Who was that photographer you shared with me recently?Who was that photographer you shared with me recently?Who was that photographer you shared with me recently?Who was that photographer you shared with me recently?
                <div class="triangle triangle-incoming"></div>
            </div>
            
        </section>
        <Print></Print>
    </div>
</template>

<style scoped>

.container-chat{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.chat{
    display:flex;
    flex-direction:column;
    gap:20px;
    width:962px;
    overflow: hidden;
    overflow-y: auto;
    padding-inline: 10px;
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

    .message{
        padding-block:24px;
        padding-inline:34px;   
        max-width:416px;
        background-color: var(--secondary-black);
        border-radius:12px;
        position:relative;
        top:0;
        left:0;
        

}

}
.outgoing{
    margin-left:auto;
}

.incoming{
    margin-right:auto;
}

.triangle {
    position:absolute;
    width: 0;
    height: 0;
    border-bottom: 8px solid var(--secondary-black);
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    
}

.triangle-incoming{
    
    top: 40%;
    left: -4.5%;
    transform: rotate(270deg);
}

.triangle-outgoing{
    top: 40%;
    right: -20%;
    transform: rotate(90deg);

}


@media(max-width:1300px){
    .chat{
        width: 500px;
    }
}
</style>

