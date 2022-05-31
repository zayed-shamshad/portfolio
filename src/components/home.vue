<script>
import axios from 'axios';
export default {
  name: 'home',
  data(){
      return {
          name:"",
          x:0,
          email:"",
          message:"",
      }
  },
  mounted(){
      this.observer();
  }
  ,
  methods:{
      sendMessage(){
            const messageFrom = { name: this.name, email: this.email, message: this.message };
            axios.post("http://localhost:8000", messageFrom)
            .then(response => console.log(response));
            this.name="";
            this.email="";
            this.message="";
    },
      /*onMousemove(e) {
      this.x = e.clientX;
      document.getElementById('one').style.backgroundColor= 'hsl('+this.x+', 100%, 50%)';
      document.getElementById('two').style.backgroundColor= 'hsl('+this.x+', 100%, 50%)';
      document.getElementById('three').style.backgroundColor= 'hsl('+this.x+', 100%, 50%)';
     
    }, */
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
<template>
<div id="pseudoNav">
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
    <div class="second-home">
        <div class="textbox">
        this is contact page
        </div>
    </div>
</div>
<div class="contact">
    <div class="contact-card">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2049065854026!2d81.19078201497052!3d26.928717783120774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399960443eaf3409%3A0x99a7ac7c12ce321c!2sINFO-WORLD%20BEGUMGUNJ%20BARABANKI!5e0!3m2!1sen!2sin!4v1653818347555!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="contact-form">
        <h1>Contact Me</h1>
        
        <form action="" @submit.prevent="submit" @reset="onReset">
                <div class="form-field">
                    <label for="name">Your Name(Required)</label>
                
                    <input required type="text" v-model="name" placeholder="name" >
                    <label for="email">Your Email(Required)</label>
                
                    <input type="text" v-model="email" placeholder="email">
                    <textarea v-model="message" placeholder="message"></textarea>
                    <button @click="sendfcMessage">send</button>
                </div>
        </form>
    </div>
</div>
<footer id="footer">
    <div class="footer-text">
         <div class="name">
            MOHAMMAD ZAID SHAMSHAD
         </div>
    </div>

    <div class="social-media">
    <div class="facebook">
    <fa :icon="['fab','linkedin']"/>
    </div>
    <div class="instagram">
         <fa :icon="['fab','instagram']"/>
    </div>
    <div class="twitter">
         <fa :icon="['fab','twitter']"/>
    </div>
     <div class="github">
    <fa :icon="['fab','github']"/>
    </div>
    </div>

</footer>
</template>

<style>

.body{
    margin:0;
    padding:0;
}
*{
    margin:0;
    padding:0;
}
.form-field label{
    color:white;
}
.form-field input{
    padding: 10px;
    width:100%;
    height:30px;
    border:none;
    color:rgb(0, 0, 0);
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    background-color: rgb(255, 255, 255);
    outline:none;
    margin:10px;
    border-bottom:0px solid rgb(0, 0, 0);
}
.form-field input:focus{
   border-bottom: 5px solid rgb(28, 64, 208);;
}
.form-field button::before{
    content:"";
    width:0px;
    height:53px;
    top:0;
    left:0;
    bottom:0;
    right:0;
    position: absolute;
   
    transition: all 0.3s ease-in-out;
    background-color: rgb(43, 43, 207);
    opacity:0;
    z-index: -999;
}
.form-field button{
    line-height: 50px;
    position: relative;
    width:200px;
    height:50px;
    color:white;
    background-color: transparent;
    border:4px solid rgb(43, 43, 207);
    border-radius: 5px;
    margin:10px;
    overflow: hidden;
    z-index: 10000;
}
.form-field button:hover::before{
    opacity:1;
    width:200px;
}
.form-field textarea{
    padding: 10px;
    color:rgb(0, 0, 0);
    border-radius: 5px;
    width:100%;
    border:none;
    background-color: rgb(255, 255, 255);
    outline:none;
    height: 100px;
    resize: vertical;
}
.form-field{
    width:300px;
    padding: 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
}
.name,.emailid,.mobile{
    font-size:1.3rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
}
.footer-text{
    height:15vh;
    width: 100vw;
    color:white;
    font-size:1rem;
    text-align:center;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    align-items: center;
    letter-spacing: 3px;
}
#footer{
    bottom:0;
    width:100%;
    height:20vh;
    background-color:rgb(25, 56, 180);
    color:rgb(255, 255, 255);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    overflow: hidden;
}
.social-media{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    width:15vw;
}
.facebook{
    font-size:2rem;
    display: flex;
    flex-direction: column;
    color:rgb(43, 43, 207);
    width:50px;
    height:100px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    bottom: 0;
    transition:all 0.25s ease-in-out;
    transform: translateY(60%);
}
.facebook:hover{
   
  transform: translateY(5%);
}
.github{
    font-size:2rem;
    display: flex;
    flex-direction: column;
    color:rgb(43, 43, 207);
    width:50px;
    height:100px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    bottom: 0;
    transition:all 0.25s ease-in-out;
    transform: translateY(60%);
}
.github:hover{
   
  transform: translateY(5%);
}
.instagram{
    font-size:2rem;
    display: flex;
    flex-direction: column;
    color:rgb(43, 43, 207);
    width:50px;
    width:50px;
    height:100px;
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
    bottom: 0;
    transition:all 0.25s ease-in-out;
    transform: translateY(60%);
}
.instagram:hover{
  transform: translateY(0%);
}
.twitter{
   font-size:2rem;
   display: flex;
   flex-direction: column;
   color:rgb(43, 43, 207);
   width:50px;
   height:100px;
   background-color: rgb(255, 255, 255);
   border-radius: 5px;
   bottom: 0;
   transition:all 0.25s ease-in-out;
   transform: translateY(60%);
}
.twitter:hover{
  transform: translateY(0%);
}
.contact-card{
    width:500px;
    height:50vh;
    border:2px solid black;
    background-color:black;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    border-radius: 5px;


}
.contact{
    background-color: #000000;
    height: 100vh;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
}
.contact-form{
    width:50%;
    height:300px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    color:white;
}

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
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height:35px;
  padding:15px;
  background-color: rgb(255, 255, 255);
  color:rgb(0, 0, 0);
  font-size:20px;
  font-weight:bold;
  font-family: 'Roboto', sans-serif;
}
.outer-home{
    height:100vh;
    display: block;
    background-color: rgb(0, 0, 0);
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
    background-color: rgb(40, 43, 196);
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
    background-color: rgb(40, 43, 196);
    transform:translateY(100%);
    animation:slideup 1.5s ease-in-out;
    animation-delay: 0.2s;
    animation-duration:0.5s;
    animation-fill-mode: forwards; 
}

#three{
    background-color: rgb(40, 43, 196);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    transform:translateY(100%);
    animation:slideup 1.5s ease-in-out;
    animation-delay: 0.4s;
    animation-duration:0.5s;
    animation-fill-mode: forwards;
    
}

.outer-about{
    background-color: rgb(28, 64, 208);
    overflow: hidden;
    height:300vh;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;

}
/*.emptybox{
    width:100vw;
    height:20vh;
    background-color:rgb(255, 255, 255);
}*/
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