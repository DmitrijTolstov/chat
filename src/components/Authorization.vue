<script setup lang="ts">

import { reactive, computed } from 'vue'

import { useRouter } from 'vue-router'


const router = useRouter()



type Forms = {
    avatar: string,
    firstName: string,
    lastName: string
    phone: string,
}


const form: Forms = reactive({
    firstName: '',
    lastName: '',
    phone: '',
    avatar: '',
})


const inputNumber = ((event: any) => {

    let keyCode: number = event.keyCode

    if (keyCode < 48 || keyCode > 57) event.preventDefault();

})

const isDisabled = computed(() => {
    return (form.firstName.length && form.lastName.length) > 4 && form.phone.length > 10 && form.avatar ? false : true
})

const addAvatar = ($event: any) => {

    form.avatar = $event?.target?.files
}

const clearValue = () => {

    form.firstName = ''
    form.lastName = ''
    form.phone = ''
}

const send = (() => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            firstName: form.firstName,
            lastName: form.lastName,
            tel: form.phone,
            avatar: form.avatar,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));

    clearValue()

    router.push('/chat')
})


</script>

<template>
    <div class="authorization">
        <h1 class="authorization__title">Welcome to chat</h1>
        <form class="authorization-form" @submit.prevent="send()">
            <div class="file-input">
                <input @change="addAvatar" name="file" type="file" id="file" class="file" />
                <label for="file">Select file</label>
            </div>
            <input v-model="form.firstName" type="text" placeholder="Ваше имя" />
            <input v-model="form.lastName" id="lastName" type="text" placeholder="Ваша фамилия" />
            <input id="phone" type="text" v-model="form.phone" @keypress="inputNumber" placeholder="Номер телефона" />
            <button type="submit" :style="isDisabled ? 'cursor:auto' : 'cursor:pointer'"
                :disabled="isDisabled">Войти</button>
        </form>
    </div>
</template>

<style scoped>
.authorization {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: auto;
    flex-direction: column;
    min-height: 100vh;

    .authorization-form {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--secondary-black);
        gap: 50px;
        padding: 50px;
        border-radius: 20px;
        min-width: 400px;
    }

    .authorization__title {
        font-size: 35px;
        font-weight: 700;
    }

    .file-input label {
        display: block;
        position: relative;
        width: 200px;
        height: 50px;
        border-radius: 25px;
        background: linear-gradient(40deg, #ff6ec4, #7873f5);
        box-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        transition: transform .2s ease-out;
    }
}

.file {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;
}


input:hover+label,
input:focus+label {
    transform: scale(1.02);
}
</style>