<template>
<div id="pseudoNav">
  Mohammad Zaid Shamshad
  <button @click="goto('second-home')">scroll</button>
</div>
<div class="outer-home">

<div class="home">
    <div @mousemove="onMousemove" class="home-div" id="one">
    </div>
    <div @mousemove="onMousemove" class="home-div" id="two">
    </div>
    <div @mousemove="onMousemove" class="home-div" id="three">
    </div>
</div>
</div>
<div class="outer-about">
<div class="second-home" ref="second-home" >
     <div class="textbox">
     this is my about page
    </div>
 </div>
 <div class="emptybox">
 </div>
 <div class="second-home" >
     <div class="textbox">
    this is contact page
    </div>
 </div>
</div>
</template>
<script>
export default {
  name: 'home',
  data(){
      return {
          x:0,
      }
  },
  mounted(){
      this.observer();
      this.update();
  }
  ,
  methods:{
      onMousemove(e) {
      this.x = e.clientX;
      document.getElementById('one').style.backgroundColor= 'hsl('+this.x+', 100%, 50%)';
      document.getElementById('two').style.backgroundColor= 'hsl('+this.x+', 100%, 50%)';
      document.getElementById('three').style.backgroundColor= 'hsl('+this.x+', 100%, 50%)';
    },
       observer(){
           const cards=document.getElementsByClassName("second-home");
           const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                     entry.target.classList.toggle("animation",entry.isIntersecting);
                }
                )
              }
              ,{
                   threshold:0.5,
                }
              );
              for(var i=0;i<cards.length;i++){
                   observer.observe(cards[i]);
              }
      },
  goto(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
}
}
</script>
<style>
.navtwo{
    height:100px;
    width:100vw;
    background-color:rgb(255, 255, 255);
    position:fixed;
}
.textbox{
    font-size: 3rem;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   background-image: linear-gradient(to right, rgb(170, 102, 202),rgb(82, 136, 243), rgb(255, 234, 72));
   background-size: 300%;
   background-clip: text;
   background-position: left;
   color:transparent;
   animation: change-bg 4s infinite alternate;
  
}
#pseudoNav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:5vh;
  background-color: rgba(251, 251, 251, 0.7);
  padding:20px;
  color:rgb(255, 255, 255);
  font-size:20px;
  font-weight:bold;
  font-family: 'Roboto', sans-serif;
}
.outer-home{
    height:100vh;
    display: block;
    background-color: rgb(105, 105, 105);
    overflow: hidden;
}
.home{
display:flex;
flex-direction:row;
padding-top:15vh;
margin:0;
justify-content: center;
}
.home div{
    width:30.33%;
    transition: 0.3s background-color ease;
}
#one{
    background-color: rgba(20, 20, 20,0.5);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height:75vh;
    transform:translateY(100%);
    animation:slideup 1.5s ease-in-out;
    animation-delay: 0s;
    animation-duration:0.5s;
    animation-fill-mode: forwards;
}
#two{
    background-color: rgba(20, 20, 20,0.5);
    transform:translateY(100%);
    animation:slideup 1.5s ease-in-out;
    animation-delay: 0.2s;
    animation-duration:0.5s;
    animation-fill-mode: forwards;
  
}

#three{
    background-color: rgba(20, 20, 20,0.5);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    transform:translateY(100%);
    animation:slideup 1.5s ease-in-out;
    animation-delay: 0.4s;
    animation-duration:0.5s;
    animation-fill-mode: forwards;
    
}
.emptybox{
   width:100vw;
    height:30vh;
    background-color:rgb(255, 255, 255);
}
.outer-about{
    background-color: rgb(105, 105, 105);
    overflow: hidden;
    height:350vh;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
}
.second-home{
    height:50vh;
    background-image: linear-gradient(to right, rgb(170, 102, 202),rgb(82, 136, 243), rgb(255, 234, 72));
    background-position: left;
    background-size: 300%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: 0.325s;
    opacity: 0;
    transform: translateX(150px);
    animation:change-bg 4s infinite alternate;

}
.animation{
   transform: translateX(0%);
   opacity: 1;
}
#pseudoNav button{
  background-color:rgb(255, 0, 0);
  color:rgb(255, 255, 255);
  font-size:20px;
  font-weight:bold;
  font-family: 'Roboto', sans-serif;
  border:none;
  padding:10px;
  border-radius:5px;
  cursor:pointer;

}
html{
    scroll-behavior: smooth;
}
@keyframes change-bg{
    0%{
        background-position: left;
    }
    100%{
        background-position: right;
    }
}
@keyframes slideup{
    0%{
        transform:translateY(100%);
        opacity: 0;
    }
    100%{
        transform:translateY(0);
        opacity: 1;
    }
}
</style>