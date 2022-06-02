<template>
<div class="outer-about">
    <div class="second-home" >
        <div class="textbox">
       My Achievements
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

</style>