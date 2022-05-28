<template>
<div class="menu">
 <div class="container" @click="toggle" :class="{change: isActive}" >
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
</div>
</div>
<div id="myNav" class="overlay" v-bind:style='{"height" : (isNav? "100%" : "0" )}'>
  <div class="overlay-content">
    <router-link to="/" @click="toggle">Home</router-link>
    <router-link to="/about" @click="toggle">About</router-link>
    <router-link to="/projects" @click="toggle">Projects</router-link>
    <router-link to="/contact" @click="toggle">Contact</router-link>
    <a href="https://drive.google.com/file/d/1brgRZH-6TIQJZ-PjdTEE4FPjWibr9Ted/view?usp=sharing" target="_blank"  @click="toggle">Resume</a>
  </div>
</div>
<router-view></router-view>
</template>
<script>
export default {
  name: 'App',
   data(){
    return {
      isActive: false,
      isNav: false,
    }
}, methods: {
  toggleclass(){
this.isActive = !this.isActive;
  },
  toggleNav(){
      this.isNav=!this.isNav;
  },
    toggle() {
        this.toggleclass();
        this.toggleNav();
    }
  }
}

</script>
<style>
/*for burger menu*/

.menu{
    position:fixed;
    top:20px;
    right:20px;
    z-index: 2;
}
.container {
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.5s;
}

.change .bar1 {
  background-color:white;
  transform: rotate(-405deg) translate(-9px, 6px) ;
}
.change .bar2 {
  
 background-color:white;
    transform: translateX(3000%)
}

.change .bar3 {
   background-color:white;
  transform: rotate(405deg) translate(-8px, -8px);
}

/*for burger menu ends*/

/*for navbar*/
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */   
  height: 0;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgba(32, 176, 179, 0.9); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  top: 25%; /* 25% from the top */
  width: 100%; /* 100% width */
  text-align: center; /* Centered text/links */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #d7cccc;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
