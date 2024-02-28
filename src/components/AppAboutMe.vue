<template>
    <div class="container" id="about-me-sheet">
        <div id="about-me-image">
            <img :src="require('@/assets/about-me.webp')" alt="about-me" />
        </div>
        <div id="about-me-text">
            <h3>About me</h3>
            <h4>An up-and-coming Web Developer
                <br />
                based in Hanoi, Vietnam 📍
            </h4>
            <p>
                As a Fresher Web Developer, I have gathered a practical skillset from participating in real projects
                as a year full-stack intern. Furthermore, I possess a moderate arsenal of skills in HTML,
                CSS, Javascript, React, SCSS, Vue, and Laravel. I focus on building responsive web pages given a design and
                handling complex designs relatively finely. I strive to write optimized and clean code that works elegantly
                throughout the system using modern development techniques and tools.
            </p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import '../scss/_breakpoints';

#about-me-sheet {
    display: grid;
    grid-template-columns: 1fr;
    text-align: center;
    align-items: center;
    justify-content: center;

    img {
        display: inline;
        left: 50%;
        width: 90%;
        height: auto;
        border-radius: 5%;
    }
}

#about-me-text {
    margin-top: 2rem;
    padding: 0 1rem;

    * {
        margin-bottom: 1rem;
    }

    h3 {
        font-family: var(--ff-heading);
        font-size: var(--fs-500);
        color: #147efb;
        font-weight: 700;
        text-transform: uppercase;
    }

    h4 {
        font-family: var(--ff-heading);
        font-size: var(--fs-600);
        color: #2d2e32;
        line-height: 1.4;
    }

    p {
        font-family: var(--ff-body);
        font-size: var(--fs-400);
        color: #767676;
        line-height: 1.5;
    }
}

@include lg {
    #about-me-sheet {
        grid-template-columns: 45% 55%;
        text-align: left;
        align-items: start;
        justify-content: center;
    }

    #about-me-text {
        margin-top: 0;
    }
}
</style>