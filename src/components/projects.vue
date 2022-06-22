<template>
  <div class="outer-about">
    <div class="second-home">
      <div class="textbox">
        <h4> Projects</h4>
      </div>
        <div class="projectcardbox">
          <projectcard description="is a movie recommendation system" image="../assets/github.jpg"
            title="movie-recommendation" link="https://zayed-shamshad.github.io/Movie-recommendation-system/">
          </projectcard>
          <projectcard description="is a personality system" image="../assets/github.jpg" title="movie-recommendation"
            link="https://zayed-shamshad.github.io/Movie-recommendation-system/">
          </projectcard>
          <projectcard description="is chat app" image="../assets/github.jpg" title="movie-recommendation"
            link="https://zayed-shamshad.github.io/Movie-recommendation-system/">
          </projectcard>
          <projectcard description="sorting visualiser" image="../assets/github.jpg" title="movie-recommendation"
            link="https://zayed-shamshad.github.io/Movie-recommendation-system/">
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
}
}
</script>


<style>

.projectcardbox{

    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    justify-content: space-evenly;

    width:100%;

}


</style>