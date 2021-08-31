<template>
    <div id="homepage">
        <!-- Header / Banner -->
        <!-- <div id="homepage_banner">
            <kinesis-container class="homepage_banner__image-container">
                <kinesis-element>
                    <img class="homepage_banner-image image-active" src="../assets/imgs/city.jpg">
                </kinesis-element>
                <kinesis-element>
                    <img class="homepage_banner-image" src="../assets/imgs/japanese-street.jpg">
                </kinesis-element>
                <kinesis-element>
                    <img class="homepage_banner-image" src="../assets/imgs/mountain.jpg">
                </kinesis-element>
                <kinesis-element>
                    <img class="homepage_banner-image" src="../assets/imgs/tunnel.jpg">
                </kinesis-element>
            </kinesis-container>
            <div class="homepage_banner__image__riley-forward">
                <img src="../assets/imgs/riley-temp.png" class="riley-forward">
            </div>
        </div> -->
        
        <div id="homepage_banner">
            <div class="homepage_banner__image-slides">
                <div class="homepage_banner-image image-city" :class="(current_active == 0) ? 'image-active fade-in' : 'fade-out'"></div>
                <div class="homepage_banner-image image-mountain" :class="(current_active == 1) ? 'image-active fade-in' : 'fade-out'"></div>
                <div class="homepage_banner-image image-japan" :class="(current_active == 2) ? 'image-active fade-in' : 'fade-out'"></div>
                <div class="homepage_banner-image image-tunnel" :class="(current_active == 3) ? 'image-active fade-in' : 'fade-out'"></div>
            </div>
            <div class="homepage_banner__image__riley-forward">
                <img src="../assets/imgs/riley-temp.png" class="riley-forward">
            </div>
        </div>
        <!-- Navbar appears here -->
        <!-- About Me -->
        <div id="about-me">
            <div></div>
        </div>
        <!-- Projects -->
        <div id="projects">

        </div>
        <!-- Contact Me -->
        <div id="contact-me"></div>
        <!-- Footer -->
        <div id="footer">
            <div class="footer__upper-text">Made with ❤️ by Riley Champion</div>
            <div class="footer__lower-text">copyright Riley Champion 2021</div>
        </div>
    </div>
</template>

<script>
    // import { KinesisContainer, KinesisElement } from 'vue-kinesis';

    export default {
        name: 'HomePage',
        data: function() {
            return {
                current_active: 0,
                image_interval: null
            }
        },
        methods: {

        },
        mounted() {
            this.image_interval = setInterval(() => {
                if(this.current_active == 3) {
                    this.current_active = 0;
                }
                else {
                    this.current_active += 1;
                }
            }, 60000);
        },
        beforeDestroy() {
            clearInterval(this.image_interval);
        }
        
    }
</script>

<style lang="css" scoped>

body {
    margin: 0 !important;
    top:0;
    right:0;
}

/* Banner */
#homepage_banner {
    width: 100vw;
    height: 100vh;
}
.homepage_banner-image {
    width: 100%;
    height: 100%;
}
/* .homepage_banner__image-slides {
    height: 100vh;
    width: 100vw;
} */
.image-city {
    background-image: url('../assets/imgs/city.jpg');
}
.image-mountain {
    background-image: url('../assets/imgs/mountain.jpg');
}
.image-japan {
    background-image: url('../assets/imgs/japanese-street.jpg');
}
.image-tunnel {
    background-image: url('../assets/imgs/tunnel.jpg');
}
.image-active {
    z-index: 1;
    opacity: 1.0 !important;
}

.homepage_banner-image {
    position: absolute;
    background-size: cover;
    background-position: center;
    background-attachment: scroll;
    opacity: 0;
}
.riley-forward {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    z-index: 1000;
}

.fade-in {
    animation: fade-in 1s ease-in;
}
.fade-out {
    animation: fade-out 1s ease-out;
}

/* About Me */
#about-me {
    height: 25vh;
    width: 25vw;
}

/* Projects */

/* Contact Me */

/* Footer */
#footer {
    text-align: center;
    background: black;
    color: white;
    font-weight: lighter;
    padding: 50px;
}
.footer__upper-text {
    font-size: 27px;
    margin-bottom: 10px;
}
.footer__lower-text {
    font-size: 17px;
    color: #CBCBCB
}

/* Animations */
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1.0;
    }
}
@keyframes fade-out {
    0% {
        opacity: 1.0;
    }
    100% {
        opacity: 0;
    }
    
}

</style>
