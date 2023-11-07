<template>
  <div style="align-items: center; margin-top: 5%; padding-right: 10%;" class="flex flex-left">
    <img id="profile_image" alt="Quasar logo" src="~assets/profile_pic.jpg"
      style="margin-right: 8%; width: 250px; height: 250px; border-radius: 50%; border: 2px solid black;">
    <h2 id="textcolor1">Vijay Sharma</h2>
    <h5 id="textcolor2" style="margin-left: 37%; margin-top: -10%;">I am from Jaipur, Rajasthan and I have done my
      Schooling and
      Graduation
      from Jaipur
      itself.<br> For know more
      about
      me,
      you can check top-left list ! </h5>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
#textcolor1 {
  margin-top: 0%;
  text-transform: uppercase;
  background-image: linear-gradient(-225deg,
      #231557 0%,
      #44107a 29%,
      #ff1361 67%,
      #fff800 100%);
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  font-weight: bold;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
  display: inline-block;
  font-size: 62px;
}



#textcolor2 {
  margin-top: 0%;
  margin: auto;
  color: grey;
  font: 70 normal 2.2em 'tahoma';
  text-shadow: 1px 0px #222324, 1px 1px #222324, 4px 2px #222324;
  animation: scale 1s forwards cubic-bezier(0.5, 1, 0.89, 1);
  transform: scale(1.5);
  max-width: 40ch;
  text-align: center;
}

@keyframes textclip {
  to {
    background-position: 200% center;
  }
}

@keyframes scale {
  100% {
    transform: scale(1);
  }
}
</style>
