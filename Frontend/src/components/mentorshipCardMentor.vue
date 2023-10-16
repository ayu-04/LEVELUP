<template>
  
 <div class="card custom-card-mentorship" style="width: 18rem;">
  <div class="image">
   <img class="card-img-top im_small" :src="url">
   </div>
   <div class="card-body d-flex flex-column gap-2">
       <router-link :to="{ name: 'AboutMentor', params: { username: username, mentorname: mentor} }" class="card-text"> <h3>{{mentor}}</h3></router-link>
      <h5 style="text-align: center">{{status}}</h5>
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
    mentor: String, 
    status: String,
  }, 
  data(){
    return{
      randInt: null,
      url: '',
    }
  },
  methods: {
    getImgUrl(){
      const path = `http://localhost:5000/api/id/${this.mentor}`
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
  width: 30%
}

</style>