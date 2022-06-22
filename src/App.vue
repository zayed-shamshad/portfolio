<script>
import home from './components/HOME.vue'
import about from './components/about.vue'
import contact from './components/contactme.vue'
import achieve from './components/achieve.vue'
import projects from './components/projects.vue'
import VueWriter from 'vue-writer'


export default {
  name: 'App',
  components:{
  
    home: home,
    about: about,
    contact: contact,
    projects:projects,
    achieve:achieve,
    VueWriter
  
  },
   data(){
    return {
      isActive: false,
      isNav: false,
    }
},
created(){
    window.addEventListener('scroll',this.onscroll);
},
mount(){
  window.onbeforeunload = () => {  
  window.scrollTo(0, 0);  
};
  this.observe();
},unmounted() {
    window.removeEventListener("scroll", this.onscroll);
  },
 methods: {
 onscroll(){
    if(window.scrollY>=50){
        document.getElementById("pseudoNav").style.backgroundColor="black";
        document.getElementById("pseudoNav").style.height="50px";
        document.getElementById("pseudoNav").style.color="#f3ca20";
        document.getElementsByClassName("bar1")[0].style.backgroundColor="#f3ca20";
        document.getElementsByClassName("bar2")[0].style.backgroundColor="#f3ca20";
        document.getElementsByClassName("bar3")[0].style.backgroundColor="#f3ca20";
        
    }
    else{
        document.getElementById("pseudoNav").style.backgroundColor="transparent";
        document.getElementById("pseudoNav").style.height="60px";
        document.getElementById("pseudoNav").style.color="black";
        document.getElementsByClassName("bar1")[0].style.backgroundColor="black";
        document.getElementsByClassName("bar2")[0].style.backgroundColor="black";
        document.getElementsByClassName("bar3")[0].style.backgroundColor="black";
        

    }
    if(window.scrollY>=600){
       document.getElementById("gototop").style.opacity="1";
        
    }
    else{
        document.getElementById("gototop").style.opacity="0";
    }
 },
   observe(){
      const options = {
     
      threshold: 0.5,
    }
           this.sectionObserver = new IntersectionObserver(this.sectionObserverHandler, options)
  
    // Observe each section
    const sections = document.querySelectorAll('.section')
    sections.forEach(section => {
      this.sectionObserver.observe(section)
    })
  },
  sectionObserverHandler (entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
         const sectionId = entry.target.id
         // Push sectionId to router here 
         this.$router.push({ name: this.$route.name, hash: `#${sectionId}` })
      }
    }
   },
goto(refName) {
    const position = document.getElementById(refName).offsetTop;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });    
  this.$router.push({name: this.$route.name, hash:`#${refName}`})
    },
  toggleclass(){
  this.isActive = !this.isActive;
  },
  toggleNav(){
      this.isNav=!this.isNav;
  },
    toggle() {
      const body=document.querySelector('body');
      body.classList.toggle('hide');
      this.toggleclass();
      this.toggleNav();
    }
  }
}
</script>
<template>
  <div id="gototop" @click="goto('home')">
    <fa :icon="['fa','angles-up']" />
  </div>
  <div class="menu">
    <div class="container" @click="toggle" :class="{change: isActive}">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </div>
  <div id="myNav" class="overlay" v-bind:style='{"height" : (isNav? "100%" : "0" )}'>
    <div class="overlay-content">
      <a @click="toggle();goto('home')">Home</a>
      <a @click="toggle();goto('about')">About</a>
      <a @click="toggle();goto('projects')">Projects</a>
      <a @click="toggle();goto('achieve')">Achievements</a>
      <a @click="toggle();goto('contact')">Contact</a>
      <a href="https://drive.google.com/file/d/1brgRZH-6TIQJZ-PjdTEE4FPjWibr9Ted/view?usp=sharing" target="_blank"
        @click="toggle">Resume</a>
    </div>
  </div>
  <div id="pseudoNav">
    <div id="portfoliotext" @click="goto('home')" v-bind:style='{"cursor":"pointer"}'>
      Portfolio
    </div>
    <div id="navigation">
      <ul>
        <li><a @click="goto('home')">Home</a></li>
        <li><a  @click="goto('about')">About</a></li>
        <li><a  @click="goto('projects')">Projects</a></li>
        <li><a  @click="goto('achieve')">Achievements</a></li>
        <li><a  @click="goto('contact')">Contact</a></li>
      </ul>
    </div>
  </div>
  <home class="section" id='home' />
  <about class="section" id='about' />
  <projects class="section" id='projects' />
  <achieve class="section" id='achieve' />
  <contact class="section" id='contact' />
  <div class="car">
    <h1>My Skills</h1>
    <div class="logos">
      <img src="https://cdn.svgporn.com/logos/css-3.svg">
      <img src="https://cdn.svgporn.com/logos/vue.svg">
      <img src="https://cdn.svgporn.com/logos/html-5.svg">
      <img src="https://cdn.svgporn.com/logos/javascript.svg">
      <img src="https://cdn.svgporn.com/logos/firebase.svg">
      <img src="https://cdn.svgporn.com/logos/git.svg">
      <img src="https://cdn.svgporn.com/logos/mongodb.svg">
      <img src="https://cdn.svgporn.com/logos/nodejs.svg">
      <img src="https://cdn.svgporn.com/logos/express.svg">
      <img src="https://cdn.svgporn.com/logos/flutter.svg">
      <img src="https://cdn.svgporn.com/logos/postman.svg">
      <img src="https://cdn.svgporn.com/logos/flask.svg">
      <img src="https://cdn.svgporn.com/logos/heroku.svg">
      <img src="https://cdn.svgporn.com/logos/github.svg">
    </div>
  </div>
  <footer id="footer">
    <div class="footer-text">
      <div class="name-foot">
        <VueWriter :array='["Created By Mohammad Zaid Shamshad | 2022 All rights reserved.©"]' :typeSpeed="30"
          :eraseSpeed="30" :delay="3000" />
      </div>
    </div>
    <div class="social-media">
      <div class="facebook">
        <fa :icon="['fab','linkedin']" />
      </div>
      <div class="instagram">
        <fa :icon="['fab','instagram']" />
      </div>
      <div class="twitter">
        <fa :icon="['fab','twitter']" />
      </div>
      <div class="github">
        <fa :icon="['fab','github']" />
      </div>
    </div>
  </footer>

</template>
<style>


@import url('https://fonts.googleapis.com/css2?family=Exo+2&family=Roboto:wght@500&family=Zen+Old+Mincho&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Exo+2&family=Indie+Flower&family=Roboto:wght@500&family=Zen+Old+Mincho&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
@media screen and (min-width: 850px) {
 .menu{
    display:none;
  }
}
@media screen and (max-width: 850px) {
  #navigation{
    display: none;
  }
}


.car{
  height:50vh;
  width:100%;
  background-color:#f3ca20;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  align-content: center;

}
.car h1{
   font-family: 'Source Code Pro', monospace;
   padding-bottom:40px;
}
.logos{
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  align-content: center;
  flex-wrap: wrap;

}
.logos img{
  width:50px;
  padding:10px;
  height:50px;
}

#gototop{
   transition:all 1s;
   background-color:#000000;
   border-radius: 8px;
    position:fixed;
    bottom:20px;
    right:20px;
    z-index:1;
    cursor:pointer;
    color:#f3ca20;
    font-size:30px;
    transition:0.5s;
    padding:8px;
    box-shadow:  0px 0px 10px rgb(0, 0, 0);
}
.sticky{
  background-color:rgb(0, 0, 0);
}

#portfoliotext{
  display:flex;
  align-items: center;
   font-family: 'Source Code Pro', monospace;
 font-weight: bold;
}
::-webkit-scrollbar {
  width: 15px;
}
::-webkit-scrollbar-track {
  background: #000000;
}
::-webkit-scrollbar-thumb {
  background:#f3ca20 ;
}
::-webkit-scrollbar-thumb:hover {
   background:#d3af20 ;
}
#pseudoNav{
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100vw;
  height:60px;
  padding:15px;
  color:rgb(0, 0, 0);
  font-size:20px;
  background-color:transparent;
  transition:all 0.3s ease-in-out;
   font-family: 'Source Code Pro', monospace;
  display:flex;
  justify-content:space-around;
  flex-direction:row;
}
#pseudoNav a{
  color:inherit;
  text-decoration:none;
}
#pseudoNav ul{
  display:flex;
  justify-content:space-around;
  flex-direction:row;
  align-content: center;
  align-items: center;
  
}
#pseudoNav ul li{
  list-style: none;
  padding:20px;
  transition:all 0.25s ease-in-out;
}
#pseudoNav ul li:hover{
  
  border-radius:3px;
  color:rgb(255, 255, 255);
 
}

html{
    scroll-behavior: smooth;
}

.hide{
  overflow: hidden;
}
.menu{
    position:fixed;
    top:20px;
    right:20px;
    z-index: 3;
}
.container {
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color:black;
  margin: 6px 0;
  transition: 0.5s;
}

.change .bar1 {
  background-color:#f3ca20;
  transform: rotate(-45deg) translate(-9px, 6px) ;
}
.change .bar2 {
  
 background-color:#f3ca20;
    transform: translateX(3000%)
}

.change .bar3 {
   background-color:#f3ca20;
  transform: rotate(+45deg) translate(-8px, -8px);
}


.overlay {

  height: 0;
  width: 100%;
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  background-color:black;
  overflow-x: hidden;
  transition: 0.5s;
}


.overlay-content {
  position: relative;
  top: 25%; 
  width: 100%; 
  text-align: center; 
  margin-top: 30px; 
}


.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  font-family: "Source Code Pro", monospace;
  color: #f3ca20 ;
  display: block; 
  transition: 0.3s; 
}


.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}


.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
  
}
@media screen and (max-width: 450px) {
  .car {
     font-size:13px;
   
          height: 35vh;
  
    }
     .name-foot {
       font-size: 15px;
     }
    .logos img {
      width: 30px;
      padding: 10px;
      height: 30px;
    }
    #gototop{
      display:none;
    }
        .menu {
          position: fixed;
          top: 20px;
          right: 7px;
          z-index: 3;
        }
                .contact-card {
                  width:90vw;
                
                }
                .contact-card iframe{
                  width:85vw;

                }

}
  

</style>
