<template>
    <v-btn :prepend-icon="icon" variant="text" class="lighten-4 mr-2" @click="scrollToElement(htmlId)">
        {{ label }}
    </v-btn>
</template>

<script>
import store from '@/store';

export default {
    props: {
        routeName: {
            type: String,
            require: false,
        },
        icon: {
            type: String,
            require: true,
        },
        label: {
            type: String,
            require: true,
        },
        htmlId: {
            type: String,
            require: true,
        }
    },
    methods: {
        scrollToElement(htmlId) {
            store.commit('setScrollTarget', htmlId);
        }
    }
}
</script>
