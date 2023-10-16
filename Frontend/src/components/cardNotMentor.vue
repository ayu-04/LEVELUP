
<template>
  
  <div class="card custom-card" style="width: 18rem;">
   <div class="image">
    <img class="card-img-top im" :src="url">
    </div>
    <div class="card-body d-flex flex-column gap-3">
       <router-link :to="{ name: 'AboutMentor', params: { username: username, mentorname: name} }" class="card-text"> <h3>{{name}}</h3></router-link>
       <p1 class="card-text"> Skills: <span v-for="i in skills">{{i +' '}} </span></p1>
       <p1 class="card-text"> Levels completed: <span v-for="i in levels_completed">{{i +' '}} </span></p1>
       <p1 class="card-text"> Languages: <span v-for="i in languages">{{i +' '}} </span></p1>
 
    </div>
    <div class="chat-button text-center">
    <pinkBtn :disabled="disable" @click="sendRequest">Send Mentorship Request</pinkBtn>
    </div>
   </div>
 
 </template>
 
 <script>
 import pinkBtn from './pinkBtn.vue';
 import axios from 'axios';
 export default {
  components: {
       pinkBtn: pinkBtn,
     },  
  props: {
     username: String,
     name: String, 
     skills: Array, 
     levels_completed: Array,
     languages: Array,
   }, 
  data(){
     return{
       disable: false,
       url: '',
     }
  },
  methods:{
    getImgUrl(){
      const path = `http://localhost:5000/api/id/${this.name}`
      axios.get(path)
      .then((res)=>{ 
         this.url= 'https://picsum.photos/id/'+res.data.id+'/400/400'
      })
      .catch((error)=>{
        console.log(error)
      });
    },
     sendRequest(){
        const path = `http://localhost:5000/api/mentorshiprequest/mentee/${this.$route.params.username}`;
        const payload = {
            'mentorname' : this.name,
        };
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        };
        axios.post(path, payload, axiosConfig)
          .then(()=>{
            console.log("request sent")
            alert("Your request has been sent");
            this.disable = true;})
          .catch((error)=>{
            if (error.response.status == '500'){
              alert("You have already sent "+ this.name +" a request")
            }
            console.log(error)});
    }
  },
  beforeMount(){
    this.getImgUrl();
  }
}
 </script>
 
 <style>
 
 .custom-card{
   background-color: #FFD8D8 !important;
   color: #FB6363;
   padding: 10px;
   border: solid 2px #FF6666 !important;
   font-weight: 500;
   border-radius: 5px;
 }
 h3{
   text-align: center;
 }
 .chat-button{
   top: 50px;
 }
 .image{
   border-radius: 50%;
   width: 100%;
   height: 100%;
   margin: auto;
 }
 .im{
   border-radius: 50%;
   width: 50%;
 }
 
 </style>