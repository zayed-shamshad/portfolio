<template>
    <div class="outer-about">
        <div class="second-home-about">
            <div class="textboxabout">
                <div class="abouttext">
                    <h4> About Me </h4>
                    Hey! I'm a web developer,
                    flutter developer
                    and a designer. I develop websites, web
                    applications & mobile apps. I am a self-taught developer with a passion for learning and problem
                    solving.
                </div>
                <img src="../assets/skills.svg" class="skillsimg">
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
.skillsimg{
    width:500px;
    height:500px;
}
.abouttext{
    font-size: 1.4rem;
    font-weight: 300;
    text-align: center;
    margin-top: 2rem;
    width:50vw;

}
.textbox {
    font-size: 3rem;
    font-family: 'Source Code Pro', monospace;
    color: #f3ca20;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
}

.textboxabout{
   font-size: 3rem;
   font-family: 'Source Code Pro', monospace;
   color:#f3ca20;
   flex-direction: row;
   justify-content: center;
    align-items: center;
    display: flex;
}
.outer-about{
    background-color: #f3ca20 ;
    overflow: hidden;
    min-height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: center;
}

.second-home-about{
    margin-top:10vh;
    min-height:75vh;
    background-color:black ;
    width: 100%;
    display:flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    transition: 1s;
    opacity: 0;
    transform: translateY(-150px);
    padding:15px;

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
.second-home-project {
    margin-top: 10vh;
    min-height: 90vh;
    background-color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: 1s;
    opacity: 0;
    transform: translateY(-150px);
    padding:10px;
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