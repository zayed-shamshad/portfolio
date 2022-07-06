<template>
  <div class="outer-project">
    <div class="second-home-project">
      <div class="textbox">
        <h4> Projects</h4>
      </div>
      <div class="projectcardbox">
        <projectcard
          description="Performed KNN and feature engineering on movie ratings, and combined predictions from various models,developed & Deployed a web app for the same that recommends 10-movies to a user on the basis of the searched movie title,a user can save the displayed movie to their favourites, can read the plot and summary, and can add/delete movies from his favourites. Developed a custom REST Api for the same"
          image="../assets/github.jpg" title="movie-recommendor"
          link_web="https://zayed-shamshad.github.io/Movie-recommendation-system/"
          link_github="https://github.com/zayed-shamshad/Movie-recommendation-system" tags1=" Firebase" tags2="Vue.js">
        </projectcard>
        <projectcard
          description="Performed NLP on social media posts of various personality types, developed and Deployed a web app for the same, that predicts the personality of the user on the basis of the various questions and answers given by the user, It displays the Myers-Briggs (INTP,ENFJ etc.) personality type of the user. Developed a custom REST Api for the same using Flask and Python"
          image="../assets/github.jpg" title="personality-predictor"
          link_web="https://zayed-shamshad.github.io/personality-test/"
          link_github="https://github.com/zayed-shamshad/personality-test" tags1="Vue.js" tags2="Flask">
        </projectcard>
        <projectcard description="Developed and deployed a web app to visualize the various Sorting algorithms like Merge, Selection, Bubble."
          image="../assets/github.jpg" title="sorting visualizer"
          link_web="https://zayed-shamshad.github.io/algo-visualizer/"
          link_github="https://github.com/zayed-shamshad/algo-visualizer" tags1="DSA" tags2="Vue.js">
        </projectcard>
        <projectcard description="Developed and Deployed a realtime web-chat app using React and Firebase ,with google signup and authentication,and realtime database " image="../assets/github.jpg"
          title="chat-app" link_web="http://chat-app-mzs.herokuapp.com/"
          link_github="https://github.com/zayed-shamshad/chat-app" tags1="React.js" tags2="Firebase">
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