<template>
    <div class="body-about">
        <div class="container">
            <div class="row text-white fw-bold">
                <h1>Portfolio</h1>
                <p class="w-75 mx-auto my-4">I am a student at "Universidad Nacional Pedro Ruiz Gallo". My learning is oriented to the computer field. I focus on innovation, learning and problem solving in software development.</p>
            </div>
            <div class="row text-white fw-bold my-3">
                <div class="col-md-3">
                    <span>Name: Henry Luis</span>
                </div>
                <div class="col-md-3">
                    <span>Age: 21 years</span>
                </div>
                <div class="col-md-3">Country: Peru</div>
                <div class="col-md-3">Web: None</div>
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
    background: #FFAC40;
    overflow-y: auto;
}
.block {
    background: rgba(255, 255, 255, 0.25);
    width: 100px;
    height: 100px;
}
</style>