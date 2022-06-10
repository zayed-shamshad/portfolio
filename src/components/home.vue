<script>
export default {
  name: 'home',

//   methods:{
//      /* onMousemove(e) {
//       this.x = e.clientX;
//       document.getElementById('one').style.backgroundColor= 'hsl('+this.x+', 100%, 50%)';
//       document.getElementById('two').style.backgroundColor= 'hsl('+this.x+', 100%, 50%)';
//       document.getElementById('three').style.backgroundColor= 'hsl('+this.x+', 100%, 50%)';
     
//     },*/
// }
}
</script>
<template>

    <div class="outer-home">

        <div class="home">
            <div class="hometext">
            <h4> Hello ! I am Zaid</h4>,<span :style="{'font-size':'19px'}"> A tech enthusiast, a web developer, flutter developer
               and a designer. I develop websites and web
                applications & mobile apps. I am a self-taught developer with a passion for learning and problem solving.</span>
            </div>

            <div @mousemove="onMousemove" class="home-div" id="one">
            </div>
            <div @mousemove="onMousemove" class="home-div" id="two">
            </div>
            <div @mousemove="onMousemove" class="home-div" id="three">
            </div>
        </div>
    </div>
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
.name-foot {
    font-size: 18px;
}
.name,.emailid,.mobile{
    font-size:1.3rem;
    font-family: 'Source Code Pro', monospace;
    
}
.footer-text{
    height:15vh;
    width: 100vw;
    color:rgb(0, 0, 0);
    font-size:0.7rem;
    text-align:center;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    align-items:center;
    align-content: center;
    letter-spacing: 1px;
    font-family: 'Source Code Pro', monospace;
}
#footer{
    bottom:0;
    width:100%;
    height:20vh;
    background:#f3ca20 ;
    color:rgb(0, 0, 0);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    box-shadow: 0px 0px 10px rgb(0, 0, 0);
    overflow: hidden;
}
.social-media{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    width:20vw;
}
.facebook{
    font-size:2.4rem;
    display: flex;
    flex-direction: column;
    color:#f3ca20;
    width:80px;
    height:100px;
    background-color: black;
    padding:5px;
    bottom: 0;
    transition:all 0.25s ease-in-out;
    transform: translateY(50%);
}
.facebook:hover{
    font-size: 3rem;
  transform: translateY(5%);
 
}
.github{
    font-size:2.4rem;
    display: flex;
    flex-direction: column;
    color:#f3ca20;
    width:80px;
    height:100px;
    background-color: black;
 
    bottom: 0;
    transition:all 0.25s ease-in-out;
    transform: translateY(50%);
    padding:5px;
}
.github:hover{
    font-size:3rem;
  transform: translateY(5%);
}
.instagram{
    font-size:2.4rem;
    display: flex;
    flex-direction: column;
   color:#f3ca20;
    width:80px;
    height:100px;
    background-color: black;
  
    bottom: 0;
    transition:all 0.25s ease-in-out;
    transform: translateY(50%);
    padding:5px;
}
.instagram:hover{
     font-size:3rem;
  transform: translateY(0%);
}
.twitter{
   font-size:2.4rem;
   display: flex;
   flex-direction: column;
   color:#f3ca20;
   width:80px;
   height:100px;
   background-color:black;
   padding:5px;
   bottom: 0;
   transition:all 0.25s ease-in-out;
   transform: translateY(50%);
   padding:5px;
}
.twitter:hover{
     font-size:3rem;
  transform: translateY(0%);
}

.navtwo{
    height:100px;
    width:100vw;
    background-color:rgb(255, 255, 255);
    position:fixed;
}


.outer-home{
    height:100vh;
    display: block;
    background-color: #f3ca20 ;
    overflow: hidden;
}
.home{
display:flex;
flex-direction:row;
padding-top:15vh;
margin:0;
justify-content: center;
}

#one{
    width: 32.33%;
        transition: 0.3s background-color ease;
    background-color: black;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    height:80vh;
    transform:translateY(100%);
    animation:slideup 1.5s ease-in-out;
    animation-delay: 0s;
    animation-duration:0.5s;
    animation-fill-mode: forwards;
}
#two{
    width: 32.33%;
        transition: 0.3s background-color ease;
    background-color:black;
    transform:translateY(100%);
    animation:slideup 1.5s ease-in-out;
    animation-delay: 0.2s;
    animation-duration:0.5s;
    animation-fill-mode: forwards; 
}

#three{
    width: 32.33%;
        transition: 0.3s background-color ease;
    background-color:black;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    transform:translateY(100%);
    animation:slideup 1.5s ease-in-out;
    animation-delay: 0.4s;
    animation-duration:0.5s;
    animation-fill-mode: forwards;
    
}
@media screen and (max-width: 450px) {
    #footer{
        height:10vh;
    }
        .footer-text {
           height:5vh;
        }
    .social-media{
        height: 5vh;
    }
    .footer-text {
        font-size: 0.7rem;
    }
    .instagram, .facebook,.github,.twitter{
       transform:translate(0,40%);
       font-size: 1.7rem;
    }
        .instagram:hover,
        .facebook:hover,
        .github:hover,
        .twitter:hover {
            transform: translate(0, 35%);
        }
       
    

}
.hometext {
    width:90vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 2.5rem;
    height: 200px;
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    position: absolute;
    color: #f3ca20;
    font-family: 'Source Code Pro', monospace;
    z-index: 1;
    line-height: 35px;
}
</style>