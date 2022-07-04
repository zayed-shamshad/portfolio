<template>
  <div class="outer-project">
    <div class="second-home-project">
      <div class="textbox">
        <h4> Projects</h4>
      </div>
      <div class="projectcardbox">
        <projectcard description="A web app that recommends movies using ML models" image="../assets/github.jpg"
          title="movie-recommendor" link="https://zayed-shamshad.github.io/Movie-recommendation-system/" tags1="Firebase"
          tags2="Vue.js">
        </projectcard>
        <projectcard description="A web app that predicts the personality of the user using NLP"
          image="../assets/github.jpg" title="personality-predictor"
          link="https://zayed-shamshad.github.io/personality-test/" tags1="Vue.js" tags2="Flask">
        </projectcard>
        <projectcard description="A realtime web-chat app made using React and Firebase" image="../assets/github.jpg"
          title="sorting visualizer" link="https://zayed-shamshad.github.io/Movie-recommendation-system/"
          tags1="DSA" tags2="Vue.js">
        </projectcard>
        <projectcard description="A web app to visualize various Sorting algorithms" image="../assets/github.jpg"
          title="chat-app" link="https://zayed-shamshad.github.io/algo-visualizer/" tags1="React.js" tags2="Firebase">
        </projectcard>
      </div>
    </div>

  </div>
</template>
<script>
import projectcard from './projectcard.vue'
export default {
  name: 'projects',
    components: {
        projectcard
    },
  mounted(){
      this.observer();
  },
  methods:{
   observer(){
           const cards=document.getElementsByClassName("second-home-project");
           const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    entry.target.classList.toggle("animation",entry.isIntersecting);
                }
                )
              }
              ,{
                   threshold:0.0,
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


.projectcardbox{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    width:100%;
}
.outer-project {
  background-color: #f3ca20;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

</style>