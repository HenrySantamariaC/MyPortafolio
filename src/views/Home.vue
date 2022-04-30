<template>
    <div class="none">
        <div class="back">
        </div>
        <div class="photo position-absolute d-flex justify-content-center align-items-center">
            <div class="square d-flex flex-column flex-md-row justify-content-center align-items-center">
                <div class="square-content d-flex justify-content-center align-items-center">
                    <div class="int">
                        <img src="@/assets/PhotoProfile.webp" class="img-profile rounded rounded-circle">
                        <h3 class="text-name text-white my-4">- Henry Santamaria C -</h3>
                        <p class="text-white text-web fs-7">Junior Developer</p>
                    </div>
                    <div class="" :class="{'scale-up-hor-right':(clicked)}"></div>
                </div>
                <div class="menu d-flex justify-content-center align-items-center">
                    <ul class="p-2 text-start fs-7">
                        <li class="my-2 my-md-4 item-menu" @click="transitions(1)">About me</li>
                        <li class="my-2 my-md-4 item-menu" @click="transitions(2)">Portfolio</li>
                        <li class="my-2 my-md-4 item-menu" @click="transitions(3)">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="modal position-absolute" :class="{'page':modalUp}">
            <div class="header d-flex flex-row-reverse">
                <span class="text-black fs-2 d-block mx-3" @click="closeModal()">X</span>
            </div>
            <AboutMe v-if="numberItem == 1"/>
            <Portfolio v-else-if="numberItem == 2"/>
            <Contact v-else/>
        </div>
    </div>
</template>
<script>
import AboutMe from '@/components/AboutMe.vue'
import Portfolio from '@/components/Portfolio.vue'
import Contact from '@/components/Contact.vue'

export default {
    name: 'Home',
    components: {
        AboutMe,
        Portfolio,
        Contact
    },
    data() {
        return {
            clicked: false,
            modalUp: false,
            numberItem: 0
        }
    },
    methods: {
        async transitions(item){
            this.clicked = true
            await this.delay(1.1)
            this.openModal(item)
            this.clicked = false
        },
        openModal(item){
            this.modalUp = 
            this.numberItem = item
        },
        closeModal(){
            this.modalUp = false
            this.numberItem = 0
        },
        delay(n){
            return new Promise(function(resolve){
                setTimeout(resolve,n*1000);
            });
        }
    }
    
}
</script>
<style scoped>
.back {
    width: 100vw;
    height: 100vh;
    position: relative;
}
.back::before {
    position: absolute;
    content: "";
    height: 100vh;
    width: 100vw;
    display: block;
    background-image: url("../assets/fondo.webp") !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(3px);
}

.back::after {
    position: absolute;
    content: "";
    height: 100vh;
    width: 100vw;
    display: block;
    background: #ff9100da !important;
}
.photo {
    top: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}
.square {
    transform: rotate(45deg);
}
.square-content {
    background: #ffffff26;
    width: 320px;
    height: 320px;
}
.int {
    transform: rotate(-45deg);
}
.img-profile {
    width: 140px;
    height: 140px;
}
.text-name {
    font-family: KaushanScript !important;
    transform: rotate(-5deg)
}
.menu {
    color: aliceblue;
    list-style: none;
    width: 95px;
}
.item-menu {
    list-style: none;
    cursor: pointer;
}
.item-menu:hover {
    font-size: 1rem;
}
.scale-up-hor-right {
    width: 320px;
    height: 320px;
    position: absolute;
    background: #FFAC40;
	animation: scale-up-hor-right 1.2s linear both;
}
.header {
    top: 0;
    width: 100vw;
    height: 10vh;
    background: #FFAC40;
}
.header>span {
    cursor: pointer;
}
.page {
    display: block;
}

@keyframes scale-up-hor-right {
  0% {
    transform: scaleX(0.2);
    transform-origin: 100% 100%;
  }
  39% {
    transform: scaleX(0.99);
    transform-origin: 100% 100%;
  }
  40% {
    transform: scaleX(1);
    width: 320px;
    height: 320px;
  }
  95% {
    transform: scaleX(1);
    width: 150vw;
    height: 150vh;
    transform: rotate(-45deg);
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    opacity: 0;
  }
}

@media (max-width: 767px){
    .square {
        transform: rotate(0deg);
    }
    .int {
        transform: rotate(0deg);
    }
    @keyframes scale-up-hor-right {
    0% {
        transform: scaleX(0.2);
        transform-origin: 100% 100%;
    }
    39% {
        transform: scaleX(0.9);
        transform-origin: 100% 100%;
    }
    40% {
        transform: scaleX(1);
        width: 320px;
        height: 320px;
    }
    90% {
        transform: scaleX(1);
        width: 150vw;
        height: 150vh;
        opacity: 1;
    }
    100% {
        transform: scaleX(0);
        opacity: 0;
    }
    }
}
</style>