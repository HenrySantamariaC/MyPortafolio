<template>
    <div class="body-about">
        <div class="container text-start">
            <div class="col-md-8 mx-auto text-white">
                <div class="row">
                    <h1 class="fw-bold">Sobre mi</h1>
                    <div class="row my-3">
                        <div class="col-md-4 d-flex flex-column mb-3">
                            <div class="row">
                                <div class="col-5 d-flex flex-column"> 
                                    <span>Nombre:</span>
                                    <span>Edad:</span>
                                    <span>Pais:</span>
                                    <span>Web:</span>
                                </div>
                                <div class="col-7 d-flex flex-column">
                                    <span>Henry</span>
                                    <span>21 años</span>
                                    <span>Perú</span>
                                    <span>None</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-8">
                            <p class="">Soy estudiante de la "Universidad Nacional Pedro Ruiz Gallo". Mi aprendizaje está orientado al campo de la informática. Me enfoco en la innovación, el aprendizaje y la resolución de problemas en el desarrollo de software.</p>                
                        </div>
                    </div>
                </div>
                <div class="row">
                    <h4 class="fw-bold">Educación</h4>
                    <ul class="list-style">
                        <li class="row my-md-3">
                            <div class="col-2 col-sm-1">
                                <span class="icon-library"></span>
                            </div>
                            <div class="col-10 col-sm-11 d-flex flex-column">
                                <span class="header fw-bold">I.E. FE Y ALEGRIA N° 28</span>
                                <span class="body fs-7">Estudios de educación secundaria</span>
                            </div>
                        </li>
                        <li class="row my-md-3">
                            <div class="col-2 col-sm-1">
                                <span class="icon-library"></span>
                            </div>
                            <div class="col-10 col-sm-11 d-flex flex-column">
                                <span class="header fw-bold">Universidad Nacional Pedro Ruiz Gallo</span>
                                <span class="body fs-7">Ingeniería de Computación e Informática - Estudios de pregrado</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="row">
                    <h4 class="fw-bold">Experiencia Laboral</h4>
                    <ul class="list-style">
                        <li class="row my-md-3">
                            <div class="col-2 col-sm-1">
                                <span class="icon-briefcase"></span>
                            </div>
                            <div class="col-10 col-sm-11 d-flex flex-column">
                                <span class="header fw-bold">Sumajg Soft and Consulting</span>
                                <span class="body fs-7">Practicas Pre-Profesionales</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "AboutMe",
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
.list-style {
    list-style: none;
}
</style>