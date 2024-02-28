<template>
    <div class="container" id="projects-sheet">
        <div class="projects-content">
            <h3>
                Portfolio
            </h3>
            <p>
                Each project is a unique piece of development 🧩
            </p>
            <div id="projects-grid">
                <v-sheet class="" elevation="4" rounded="lg">
                    <div class="project-description">
                        <h3>Portfolio <span class="project-date">(February 2024)</span></h3>
                        <p>A viewable portfolio to display my personal projects as well as real projects. The website's
                            design was BASED on Stefan Topalovic's React portfolio. It can adapt to any screensize while
                            still remain stylish throughout. It is built on Vue and SCSS</p>
                        <div class="stack">
                            <v-sheet class="stack-item rounded-sm" elevation="3">Vue</v-sheet>
                            <v-sheet class="stack-item rounded-sm" elevation="3">SCSS</v-sheet>
                        </div>
                        <div class="links">
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://github.com/NgThePhong0608/portfolio" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-github" variant="Text" :color="isHovering ? '#147efb'
                                        : '#2d2e32'">Code</v-btn>
                                </a>
                            </v-hover>
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://www.stefantopalovic.com/" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-television-classic"
                                        variant="Text" :color="isHovering ? '#147efb'
                                            : '#2d2e32'">Live demo</v-btn>
                                </a>
                            </v-hover>
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://www.stefantopalovic.com/" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-palette" variant="Text" :color="isHovering ? '#147efb'
                                        : '#2d2e32'">Design</v-btn>
                                </a>
                            </v-hover>
                        </div>
                    </div>
                </v-sheet>
                <v-sheet class="" elevation="4" rounded="lg">
                    <div class="project-description">
                        <h3>Simple Movie App</h3>
                        <p>A viewable portfolio to display my personal projects as well as real projects. The website's
                            design was BASED on Stefan Topalovic's React portfolio. It can adapt to any screensize while
                            still remain stylish throughout. It is built on Vue and SCSS</p>
                        <div class="stack">
                            <v-sheet class="stack-item rounded-sm" elevation="3">Vue</v-sheet>
                            <v-sheet class="stack-item rounded-sm" elevation="3">SCSS</v-sheet>
                        </div>
                        <div class="links">
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://github.com/NgThePhong0608/Simple-Movie-App" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-github" variant="Text" :color="isHovering ? '#147efb'
                                        : '#2d2e32'">Code</v-btn>
                                </a>
                            </v-hover>
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://simple-movie-app-ochre.vercel.app/" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-television-classic"
                                        variant="Text" :color="isHovering ? '#147efb'
                                            : '#2d2e32'">Live demo</v-btn>
                                </a>
                            </v-hover>
                        </div>
                    </div>
                </v-sheet>
                <v-sheet class="" elevation="4" rounded="lg">
                    <div class="project-description">
                        <h3>Contact Management</h3>
                        <p>A viewable portfolio to display my personal projects as well as real projects. The website's
                            design was BASED on Stefan Topalovic's React portfolio. It can adapt to any screensize while
                            still remain stylish throughout. It is built on Vue and SCSS</p>
                        <div class="stack">
                            <v-sheet class="stack-item rounded-sm" elevation="3">Laravel</v-sheet>
                            <v-sheet class="stack-item rounded-sm" elevation="3">HTML/CSS/JS</v-sheet>
                        </div>
                        <div class="links">
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://github.com/NgThePhong0608/Contact-application" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-github" variant="Text" :color="isHovering ? '#147efb'
                                        : '#2d2e32'">Code</v-btn>
                                </a>
                            </v-hover>
                        </div>
                    </div>
                </v-sheet>
                <v-sheet class="" elevation="4" rounded="lg">
                    <div class="project-description">
                        <h3>Larapics Blog</h3>
                        <p>A viewable portfolio to display my personal projects as well as real projects. The website's
                            design was BASED on Stefan Topalovic's React portfolio. It can adapt to any screensize while
                            still remain stylish throughout. It is built on Vue and SCSS</p>
                        <div class="stack">
                            <v-sheet class="stack-item rounded-sm" elevation="3">Laravel</v-sheet>
                            <v-sheet class="stack-item rounded-sm" elevation="3">HTML/CSS/JS</v-sheet>
                        </div>
                        <div class="links">
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://github.com/NgThePhong0608/laravel-picture-blog" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-github" variant="Text" :color="isHovering ? '#147efb'
                                        : '#2d2e32'">Code</v-btn>
                                </a>
                            </v-hover>
                        </div>
                    </div>
                </v-sheet>
                <v-sheet class="" elevation="4" rounded="lg">
                    <div class="project-description">
                        <h3>Todo Application</h3>
                        <p>A viewable portfolio to display my personal projects as well as real projects. The website's
                            design was BASED on Stefan Topalovic's React portfolio. It can adapt to any screensize while
                            still remain stylish throughout. It is built on Vue and SCSS</p>
                        <div class="stack">
                            <v-sheet class="stack-item rounded-sm" elevation="3">Laravel</v-sheet>
                            <v-sheet class="stack-item rounded-sm" elevation="3">Vue</v-sheet>
                        </div>
                        <div class="links">
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://github.com/NgThePhong0608/todo-app-laravel-vuejs" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-github" variant="Text" :color="isHovering ? '#147efb'
                                        : '#2d2e32'">Code</v-btn>
                                </a>
                            </v-hover>
                        </div>
                    </div>
                </v-sheet>
                <v-sheet class="" elevation="4" rounded="lg">
                    <div class="project-description">
                        <h3>User Management Application</h3>
                        <p>A viewable portfolio to display my personal projects as well as real projects. The website's
                            design was BASED on Stefan Topalovic's React portfolio. It can adapt to any screensize while
                            still remain stylish throughout. It is built on Vue and SCSS</p>
                        <div class="stack">
                            <v-sheet class="stack-item rounded-sm" elevation="3">Laravel</v-sheet>
                            <v-sheet class="stack-item rounded-sm" elevation="3">React</v-sheet>
                        </div>
                        <div class="links">
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://github.com/NgThePhong0608/User-management-application" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-github" variant="Text" :color="isHovering ? '#147efb'
                                        : '#2d2e32'">Code</v-btn>
                                </a>
                            </v-hover>
                        </div>
                    </div>
                </v-sheet>
                <v-sheet class="" elevation="4" rounded="lg">
                    <div class="project-description">
                        <h3>Basic Blog</h3>
                        <p>A viewable portfolio to display my personal projects as well as real projects. The website's
                            design was BASED on Stefan Topalovic's React portfolio. It can adapt to any screensize while
                            still remain stylish throughout. It is built on Vue and SCSS</p>
                        <div class="stack">
                            <v-sheet class="stack-item rounded-sm" elevation="3">PHP</v-sheet>
                            <v-sheet class="stack-item rounded-sm" elevation="3">MySql</v-sheet>
                        </div>
                        <div class="links">
                            <v-hover v-slot:default="{ isHovering, props }">
                                <a href="https://github.com/NgThePhong0608/basic-forum" target="_blank">
                                    <v-btn class="link-btn" v-bind="props" append-icon="mdi-github" variant="Text" :color="isHovering ? '#147efb'
                                        : '#2d2e32'">Code</v-btn>
                                </a>
                            </v-hover>
                        </div>
                    </div>
                </v-sheet>
            </div>
        </div>
    </div>
</template>
<script>
// import image from "@/assets/youtube-example.png";
export default {
    data() {
        return {
            portfolioWindow: true,
            portolioWindowImages: [
                { path: require('@/assets/portfolio_example_1.png') },
                { path: require('@/assets/portfolio_example_2.png') },
            ],
        }
    },
}
</script>
<style lang="scss">
@import '../scss/_breakpoints';

.projects-content {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 0.5rem;

    >h3 {
        font-family: var(--ff-heading);
        font-size: var(--fs-500);
        color: #147efb;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
    }

    >p {
        font-family: var(--ff-heading);
        font-size: var(--fs-600);
        color: #2d2e32;
        font-weight: 700;
        margin-top: 0.5rem;
        text-align: center;
    }
}

.project-showcase {
    display: grid;
    grid-template-columns: 1fr;
    color: white;
    margin: 3rem 0.5rem 0 0.5rem;
    padding: 0rem;
}

.project-windows-container {
    padding: 1rem;
}

.project-image {
    width: 100%;
}

.project-description {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0;
    text-align: center;

    h3 {
        color: #2d2e32;
        font-size: var(--fs-600);
        font-weight: 700;
        font-family: var(--ff-heading);
        text-transform: capitalize;

        >span {
            color: hsla(0, 5%, 8%, .773);
            font-size: var(--fs-500);
            text-transform: capitalize;
            font-family: var(--ff-heading);
        }
    }

    p {
        color: #767676;
        font-size: var(--fs-400);
        font-weight: 500;
        font-family: var(--ff-body);
    }
}

.stack {
    display: flex;
    gap: 1rem;
    justify-content: center;

    .stack-item {
        display: block;
        padding: 0.5rem;
        font-family: var(--ff-body);
        font-size: var(--fs-500);
        font-weight: 600;
    }
}

.links {
    margin-top: 1rem;

    .link-btn {
        font-size: var(--fs-400);
    }
}

@include lg {

    .projects-content {

        >h3 {
            text-align: left;
        }

        >p {
            text-align: left;
        }
    }

    .project-showcase {
        &:nth-child(even) {
            grid-template-columns: 45% 55%;

            .project-description {
                grid-column-start: 1;
                grid-row-start: 1;
            }
        }

        grid-template-columns: 55% 45%;
        align-items: center;
    }

    .project-description {
        margin: 2rem 0;
    }
}
</style>