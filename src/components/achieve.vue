<template>
    <div class="outer-about">
        <div class="second-home-achieve">
            <div class="textbox">
                My Experience & Achievements
            </div>
            <div class="exp-box">
                <div class="exp-card">
                    <img src="../assets/logo-dim.png" class="intern-card">
                    <div> Worked as an intern at a IIT Jodhpur Ed-tech startup as a Web & Flutter Developer, where I
                        developed a signup-page for the mobile application, 
                        developed and integrated a whiteboard in the web app, 
                        enhanced the ui of the web app, and worked on various other features of the app.
                    </div>
                </div>
                <div class="exp-list">
                    <ul>
                        <li>Achieved AIR 8343 in JEE Advanced</li>
                        <li>Achieved city rank 1 in the ISC Examination (12th)</li>
                        <li>In the top 0.1% of the ISC examination</li>
                        <li>In the top 10% of the candidates who upgraded their branch</li>
                        <li>Qualified internal hackathon for Smart India Hackathon</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
  name: 'achieve',
  mounted(){
      this.observer();
  },
  methods:{
   observer(){
           const cards=document.getElementsByClassName("second-home-achieve");
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

.intern-card{
   width:200px;
    height:200px;
}
.exp-box{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    color:#f3ca20;
}
.exp-card{
    background-color: #f3ca20;
    color:black;
    width:40%;
    height:40vh;
    border-radius: 5px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-family: Source Code Pro, monospace;
}
.exp-list{
    width: 40%;
    display: flex;
    font-size:1.3rem;
    font-family: Source Code Pro, monospace;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #f3ca20;
}
</style>