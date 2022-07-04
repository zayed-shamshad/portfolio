<template>
<div class="contact">
    <div class="contact-card">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.2049065854026!2d81.19078201497052!3d26.928717783120774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399960443eaf3409%3A0x99a7ac7c12ce321c!2sINFO-WORLD%20BEGUMGUNJ%20BARABANKI!5e0!3m2!1sen!2sin!4v1653818347555!5m2!1sen!2sin" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="contact-form">
        <div v-bind:style='{"border-bottom" :"2px solid yellow","font-family":"Source Code Pro, monospace"}'><h1>Contact Me</h1>
        </div>
        <form action="mailto:shamshad.1@iitj.ac.in" @submit.prevent="submit" @reset="onReset">
                <div class="form-field">
                    <label for="name" v-bind:style='{"font-family":"Source Code Pro, monospace"}' >Your Name(Required)</label>

                    <input required type="text" v-model="name" placeholder="name" >
                    <label for="email" v-bind:style='{"font-family":"Source Code Pro, monospace"}'>Your Email(Required)</label>

                    <input required type="text" v-model="email" placeholder="email">
                    <textarea required v-model="message" placeholder="message"></textarea>
                    <button @click="sendMessage">send</button>
                </div>
        </form>
    </div>
</div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'contact',
   data(){
      return {
          name:"",
          x:0,
          email:"",
          message:"",
      }
  },
   methods:{
   sendMessage(){
            const messageFrom = { name: this.name, email: this.email, message: this.message };
            axios.post("http://localhost:8000", messageFrom)
            .then(response => console.log(response));
            this.name="";
            this.email="";
            this.message="";
    },
}
}

</script>


<style>
.contact-card{
    height:50vh;
    border:2px solid black;
    background-color: #f3ca20;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    border-radius: 5px;
}
.contact{
    background-color: #000000;
    min-height:80vh;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items:center;
}
@media screen and (max-width: 750px) {
    .contact{
        flex-direction: column;
        height:150vh; 
    }
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
   border-bottom: 5px solid #f3ca20 ;
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
    background-color: #f3ca20 ;
    z-index: -999;
}
.form-field button{
    display:flex;
    justify-content:center;
    align-items:center;
    line-height: 50px;
    position: relative;
    width:200px;
    height:50px;
    color:white;
    background-color: transparent;
    border:4px solid #f3ca20 ;
    border-radius: 5px;
    margin:10px;
    overflow: hidden;
    z-index: 0;
    transition:0.4s;
    font-size: 1.4rem;
   font-family: "Source Code Pro", monospace;
}
.form-field button:hover::before{
    opacity:1;
    width:200px;
    cursor: pointer;
}
.form-field button:hover{
    cursor: pointer;
    color:black;
}
.form-field textarea{
    padding: 10px;
    color:rgb(0, 0, 0);
    border-radius: 10px;
    width:100%;
    border:none;
    background-color: rgb(255, 255, 255);
    outline:none;
    height: 100px;
    resize: vertical;
    transition:0.3s;
    font-family: "Source Code Pro", monospace;
}
.form-field textarea:focus{
    border-bottom:5px solid #f3ca20 ;
}
.form-field{
    width:300px;
    padding: 20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
}
</style>