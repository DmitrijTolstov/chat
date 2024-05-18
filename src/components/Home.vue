<script setup lang="ts">
import Gallery from './Gallery.vue'

const people =
{
    image: 'src/assets/images/ellipse2.svg',
    name: 'Kathryn Murphy',
    phone: '(671) 555-0110'
}

</script>

<template>
    <section class="home">
        <div class="home-avatar">
            <div class="avatar-content">
                <img class="avatar-content__image" :src="people.image" alt="">
                <h1 class="avatar-content__name">{{ people.name }}</h1>
                <a :href="'tel:' + people.phone" class="avatar-content__phone">{{ people.phone }}</a>
            </div>
        </div>
        <div class="home-gallery">
            <Gallery></Gallery>
        </div>
    </section>
</template>

<style scoped>
.home {
    display: flex;
    gap: 40px;
    flex-direction: column;

    .home-avatar {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: var(--secondary-black);
        max-height: 245px;
        border-radius: 20px;
        padding-block: 30px;

        .avatar-content {

            .avatar-content__image {
                width: 128px;
                height: 128px;
            }

            .avatar-content__name {
                padding-block: 17px 5px;
                font-weight: 700;
            }

            .avatar-content__phone {
                opacity: .4;

            }

        }
    }

    .home-gallery {}
}
</style>