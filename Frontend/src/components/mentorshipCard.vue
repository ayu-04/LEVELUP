<template>
  
 <div class="card custom-card-mentorship" style="width: 18rem;">
  <div class="image">
   <img class="card-img-top im_small" :src="url">
   </div>
   <div class="card-body d-flex flex-column gap-3">
      <router-link :to="{ name: 'AboutMentee', params: { username: username, menteename: mentee} }" class="card-text"> <h3>{{mentee}}</h3></router-link>
   </div>
   <div class="d-flex justify-content-around">
   <pinkBtn :disabled="disable" @click="AcceptRequest"> Accept </pinkBtn>
   <pinkBtn :disabled="disable" @click="RejectRequest"> Reject </pinkBtn>
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
    mentee: String, 
  }, 
  data(){
    return{
      disable: false,
      url: '',
    }
  },
  methods: {
    AcceptRequest(){
        const path= `http://localhost:5000/api/mentorshiprequest/mentor/${this.username}`;
        const payload={
            menteename: this.mentee, 
            decision: "accepted"
        }
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        };
        axios.post(path, payload, axiosConfig)
        .then(()=>console.log("Accepted"))
        .catch((error)=>console.log(error));
        alert("You accepted the request")
        this.disable=true;
    },
    RejectRequest(){
        const path= `http://localhost:5000/api/mentorshiprequest/mentor/${this.username}`;
        const payload={
            menteename: this.mentee, 
            decision: "rejected"
        }
        let axiosConfig = {
          headers: {
              'Content-Type': 'application/json;charset=UTF-8',
              "Access-Control-Allow-Origin": "*",
          }
        };
        axios.post(path, payload, axiosConfig)
        .then(()=>console.log("Rejected"))
        .catch((error)=>console.log(error));
        alert("You rejected the request");
        this.disable=true;
    },
    getImgUrl(){
      const path = `http://localhost:5000/api/id/${this.mentee}`
      axios.get(path)
      .then((res)=>{ 
         this.url= 'https://picsum.photos/id/'+res.data.id+'/400/400'
      })
      .catch((error)=>{
        console.log(error)
      });
    },
  },
  beforeMount(){
    this.getImgUrl();
  }
}
</script>

<style>

.custom-card-mentorship{
  height: 50vh;
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
  text-align: center;
}
.im_small{
  border-radius: 50%;
  width: 30%;
}

</style>