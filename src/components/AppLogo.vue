<template>
    <v-toolbar-title>
        <v-btn variant="text" :ripple="false" @click="goToHome()"
            class="text-decoration-none white--text transparent-overlay" id=" no-hover">
            Nguyen The Phong</v-btn>
    </v-toolbar-title>
</template>
<script>
export default {
    methods: {
        goToHome() {
            this.$router.push({ name: "Home" });
        },
    }
}
</script>   
<style scoped>
.v-btn.transparent-overlay:hover :deep(.v-btn__overlay) {
    --v-hover-opacity: 0;
}
</style>