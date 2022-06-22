<template>
    <div class="outer-about">
        <div class="second-home-about">
            <div class="textbox">
                <h4> About Me </h4>
                <div class="abouttext">
                    A tech enthusiast, a web developer,
                    flutter developer
                    and a designer. I develop websites and web
                    applications & mobile apps. I am a self-taught developer with a passion for learning and problem
                    solving
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'about',
  mounted(){
      this.observer();
  },
  methods:{
   observer(){
           const cards=document.getElementsByClassName("second-home-about");
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
}
}
</script>


<style>



.abouttext{
    font-size: 1.8rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    text-align: center;
    margin-top: 2rem;
    width:50vw;


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
.outer-about{
    background-color: #f3ca20 ;
    overflow: hidden;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
}

.second-home-about{
    margin-top:10vh;
    height:75vh;
    background-color:black ;
    width: 100%;
    display:flex;
    flex-direction: column;

    justify-content: space-evenly;
    align-items: center;
    transition: 1s;
    opacity: 0;
    transform: translateY(-150px);
   

}
.second-home-achieve {
    margin-top: 10vh;
    height: 75vh;
    background-color: black;
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
    align-items: center;
    transition: 1s;
    opacity: 0;
    transform: translateY(-150px);
}
.second-home {
    margin-top: 10vh;
    height: 95vh;
    background-color: black;
    width: 100%;
    display: flex;
    flex-direction: column;

    justify-content: space-evenly;
    align-items: center;
    transition: 1s;
    opacity: 0;
    transform: translateY(-150px);


}
.animation{
   transform: translateY(0%);
   opacity: 1;
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