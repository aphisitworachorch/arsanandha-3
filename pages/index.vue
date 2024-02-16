<template>
  <NuxtParticles
      id="tsparticles"
      :options="options"
      @load="onLoad"
  ></NuxtParticles>
  <div class="outerContainer">
    <div class="innerContainer">
      <TotoProfileComponents></TotoProfileComponents>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useHead } from "nuxt/app";
import type {Container} from "tsparticles-engine";

const options = {
  "particles": {
    "number": {
      "value": 14,
      "density": {
        "enable": true,
        "value_area": 4810.236182596568
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 3
      },
      "image": {
        "src": "pics/9-cloud-png-image.png",
        "width": 505.5,
        "height": 255.3333333333333
      }
    },
    "opacity": {
      "value": 20,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.3167101127975246,
        "sync": true
      }
    },
    "size": {
      "value": 408.8700755207083,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 4.872463273808071,
        "size_min": 27.610625218245733,
        "sync": true
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 849.808392258727,
      "color": "#ffffff",
      "opacity": 0.47300655795532925,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2.15,
      "direction": "left",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 0,
        "rotateY": 0
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 243.62316369040352,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

const onLoad = (container: Container) => {
  container.play()
}

useHead({
  title: "arsanandha.xyz",
  meta:[
    { hid: 'og-type', property: 'og:type', content: 'website' },
    { hid: 'og-title', property: 'og:title' ,content: 'Arsanandha Aphisitworachorch (arsanandha.xyz)'},
    { hid: 'og-desc', property: 'og:description', content: "Hi! I'm Backend Developer Who Involved Cutting-edge Technology with Love and Passion 💖" },
    { hid: 'og-image', property: 'og:image',
      content: '/pics/arsanandhaOG.png'
    },
    { hid: 'og-url', property: 'og:url', content: 'https://arsanandha.xyz' },
    { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },

  ]
})
</script>
<style scoped>
.outerContainer {
  @apply hero min-h-screen transform-gpu subpixel-antialiased
}
.innerContainer {
  @apply hero-content text-center
}
</style>