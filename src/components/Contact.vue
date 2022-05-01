<template>
    <div class="body-about">
        <div class="container text-start">
            <div class="col-md-8 mx-auto text-white">
                <div class="row">
                    <h1 class="fw-bold">Contacto</h1>
                </div>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <div class="title my-3">
                            <span class="text-center d-block w-100 fs-5">Redes Sociales de contacto</span>
                        </div>
                        <div class="social-links d-flex flex-row justify-content-center">
                            <a target="_blank" href="https://www.linkedin.com/in/henry-luis-santamaria-capuñay-479bb6227" class="text-white p-3"><span class="icon icon-linkedin2"></span></a>
                            <a target="_blank" href="https://github.com/HenrySantamariaC" class="text-white p-3"><span class="icon icon-github"></span></a>
                            <a target="_blank" href="https://www.facebook.com/henry.santamariacapunay" class="text-white p-3"><span class="icon icon-facebook"></span></a>
                            <a target="_blank" href="https://twitter.com/HenrySC1806" class="text-white p-3"><span class="icon icon-twitter"></span></a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8 mx-auto">
                        <span class="d-block my-3 w-100 text-center fs-7">©{{year}} Henry Santamaria C</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Contact",
    data() {
        return {
            year: '2022'
        }
    },
    methods: {
        getYear(){
            let day = new Date()
            let date = day.getFullYear()
            this.year = date;
        }
    },
    created() {
        this.getYear()
    }
}
</script>
<style scoped>
.body-about {
    height: 90vh;
    width: 100vw;
    background: var(--bg-primary);
    overflow-y: auto;
}
.block {
    background: rgba(255, 255, 255, 0.25);
    width: 100px;
    height: 100px;
}
.icon {
    font-size: 3rem;
    margin: 10px;
}
.social-links a:hover {
    transform: scale(1.3);
    transform-origin: 50% 50%;
}
.text-white a {
    text-decoration: none !important;
}
</style>