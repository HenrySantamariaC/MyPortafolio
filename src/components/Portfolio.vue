<template>
    <div class="body-about">
        <div class="container text-start">
            <div class="col-md-8 mx-auto text-white">
                <div class="row">
                    <h1 class="fw-bold">Portafolio</h1>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        <div class="col">
                            <div class="card item-list">
                            <img src="@/assets/fondo.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Mi Portafolio</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card item-list">
                            <img src="@/assets/fondo.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Mi Portafolio</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card item-list">
                            <img src="@/assets/fondo.webp" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Mi Portafolio</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Portfolio",
    data() {
        return {

        }
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
.item-list {
    background: #ffffff1a;
}
</style>