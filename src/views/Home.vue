<template>
    <div :class="themeColors[0].theme">
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
                    <ul class="p-2 text-start fs-7 text-white">
                        <li class="my-2 my-md-4 item-menu" @click="transitions(1)">Sobre mi</li>
                        <li class="my-2 my-md-4 item-menu" @click="transitions(2)">Portafolio</li>
                        <li class="my-2 my-md-4 item-menu" @click="transitions(3)">Contacto</li>
                    </ul>
                </div>
            </div>
            </div>
            <div class="position-fixed rounded back-colors">
                <span class="fs-7 text-white">Color</span>
                <div class="d-flex flex-row">
                    <div class="circle-color bg-current"></div>
                    <div class="box-next-color d-flex flex-row" @click="changeTheme()">
                        <div class="next-color" :class="themeColors[1].bg"></div>
                        <div class="arrow-color"></div>
                    </div>
                </div>
            </div>
        <div class="modal position-absolute" :class="{'page':modalUp}">
            <div class="header d-flex flex-row-reverse">
                <span class="text-white fs-2 d-block mx-3" @click="closeModal()">x</span>
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
            numberItem: 0,
            themeColors: [
                {bg: 'bg-yellow', theme: 'theme-yellow'},
                {bg: 'bg-dark', theme: 'theme-dark'},
                {bg: 'bg-white', theme: 'theme-white'},
                {bg: 'bg-blue', theme: 'theme-blue'},
                {bg: 'bg-violet', theme: 'theme-violet'},
                {bg: 'bg-red', theme: 'theme-red'},
            ]
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
        changeTheme(){
            let temp = this.themeColors.shift()
            this.themeColors.push(temp)
            this.theme = this.themeColors[0].theme
            let local = JSON.stringify(this.themeColors)
            localStorage.setItem('theme', local)
        },
        loadTheme(){
            if (localStorage.getItem('theme')) {
                let temp = JSON.parse(localStorage.getItem('theme'))
                this.themeColors = temp
            }else{
                let temp = JSON.stringify(this.themeColors)
                localStorage.setItem('theme', temp)
            }
        },
        delay(n){
            return new Promise(function(resolve){
                setTimeout(resolve,n*1000);
            });
        }
    },
    created() {
        this.loadTheme()
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
    background: var(--bg-primary-light) !important;
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
    list-style: none;
    width: 95px;
}
.item-menu {
    list-style: none;
    cursor: pointer;
}
.item-menu:hover {
    transform: scale(1.3);
    transform-origin: 50% 50%;
    font-weight: bold;
}
.scale-up-hor-right {
    width: 320px;
    height: 320px;
    position: absolute;
    background: var(--bg-primary);
    z-index: 9999 !important;
	animation: scale-up-hor-right 1.2s linear both;
}
.header {
    top: 0;
    width: 100vw;
    height: 10vh;
    background: var(--bg-primary);
}
.header>span {
    cursor: pointer;
}
.page {
    display: block;
}
.back-colors {
    top: 15px;
    right: 15px;
    background: var(--bg-primary);
    box-shadow: -1px 6px 19px -5px rgba(0,0,0,0.73);
	/* animation: show-colors 1.2s linear both; */
}
.circle-color {
    width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 50%;
    border: 2px #ddd solid;
    cursor: pointer !important;
}
.bg-current {
    background: var(--bg-primary) !important;
}
.box-next-color {
    padding: 0px 0;
    cursor: pointer;
}
.arrow-color {
    width: 0; 
    height: 0; 
    border-top: 15px solid transparent;
    border-left: 10px solid #ddd;
    border-bottom: 15px solid transparent;
    margin: 5px; 
}
.next-color {
    width: 5px; 
    height: 30px; 
    background: #ddd;
    margin: 5px; 
    border-radius: 5px;
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
    transform-origin: 50% 50%;
    width: 320px;
    height: 320px;
  }
  95% {
    transform: scaleX(1);
    transform-origin: 50% 50%;
    width: 100vw;
    height: 100vh;
    transform: rotate(-45deg);
    opacity: 1;
  }
  100% {
    transform: scaleX(0);
    transform-origin: 50% 50%;
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