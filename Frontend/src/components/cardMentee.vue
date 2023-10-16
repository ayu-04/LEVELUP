
<template>
  
 <div class="card custom-card transition-transform ease-in-out duration-500" style="width: 18rem;">
  <div class="image">
   <img class="card-img-top" :src="url">
   </div>
   <div class="card-body d-flex flex-column gap-3">
      <router-link :to="{ name: 'AboutMentee', params: { username: username, menteename: name} }" class="card-text"> <h3>{{name}}</h3></router-link>
      <p1 class="card-text"> Skills: <span v-for="i in skills">{{i +' '}} </span></p1>
      <p1 class="card-text"> Weaknesses: <span v-for="i in weaknesses">{{i +' '}} </span></p1>
   </div>
   <div class="chat-button text-center">
   <a :href="' https://wa.me/'+ phno" target="_blank" ><pinkBtn>Chat on WhatsApp</pinkBtn></a>
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
    weaknesses: Array,
    phno: Number,
  }, 
  data(){
    return{
      url: '',
    }
  },
  methods:{
    getImgUrl(){
      const path = `http://localhost:5000/api/id/${this.name}`
      axios.get(path)
      .then((res)=>{ 
         this.url= 'https://picsum.photos/id/'+res.data.id+'/300/300'
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

.custom-card{
  /* height: 75vh; */
  background-color: #FFD8D8 !important;
  color: #FB6363;
  padding: 10px;
  border: solid 2px #FB6363 !important;
  box-shadow: var(--boxShadow);
  font-weight: 500;
  border-radius: 5px;
}
h3{
  padding-top: 50px;
  text-align: center;
  color:#FB6363;
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
.card-img-top{
  border-radius: 50%;
  width: 50%
}
.im{
  border-radius: 50%;
  width: 50%
}
.custom-card:hover{
  transform: scale(1.1);

}

.transition-transform {
    transition-property: transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .25s;
}
.duration-500 {
    transition-duration: .5s;
}
.ease-in-out {
    transition-timing-function: cubic-bezier(.4,0,.2,1);
} 
</style>