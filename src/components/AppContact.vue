<template>
    <div class="container" id="contact-sheet">
        <div class="projects-content">
            <h3>Contact</h3>
            <p>Don't be shy! Hit me up! 👇</p>
            <div id="contact-list">
                <div class="contact-detail">
                    <v-btn icon="mdi-map-marker" variant="text" color="#147efb" :elevation="3"></v-btn>
                    <div class="contact-info">
                        <h3>Location</h3>
                        <p>Thanh Xuan, Hanoi, Vietnam</p>
                    </div>
                </div>
                <div class="contact-detail">
                    <v-btn icon="mdi-email" variant="text" color="#147efb" :elevation="3"></v-btn>
                    <div class="contact-info">
                        <h3>Email</h3>
                        <a href="mailto:anhbg330011@gmail.com">phong.nt06082001@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import '../scss/_breakpoints';

#contact-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 3rem 0.5rem 0 0.5rem;

}

.contact-detail {
    display: flex;
    gap: 0.75rem;
    align-items: center;
}

.contact-info {
    display: flex;
    gap: 0.25rem;
    flex-direction: column;

    >h3 {
        font-family: var(--ff-heading);
        font-size: var(--fs-400);
        color: #2d2e32;
        font-weight: bold;
    }

    >a,
    p {
        font-family: var(--ff-heading);
        font-size: var(--fs-400);
        color: #767676;
        cursor: pointer;
        text-decoration: none;

        &:hover {
            color: #147efb;
            transition: all .3s;
        }
    }
}
@include lg {
    #contact-list {
        gap: 4rem;
    }
}
</style>