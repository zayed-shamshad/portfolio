<template>
    <div class="outer-about">
        <div class="second-home-achieve">
            <div class="textbox">
                My Experience & Achievements
            </div>
            <div class="exp-box">
                <div class="exp-card">
                </div>
                <div class="exp-list">
                    <ul>
                        <li>ds,md</li>
                        <li>ds,md</li>
                        <li>ds,md</li>
                        <li>ds,md</li>
                        <li>ds,md</li>
                        <li>ds,md</li>
                        <li>ds,md</li>
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
}
.exp-list{
    width: 40%;
    display: flex;
    font-size:2rem;
    font-family: Source Code Pro, monospace;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #f3ca20;
}
</style>