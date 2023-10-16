const { default: axios } = require("axios")

<template>
<div class="mentorshiprequestsmentor d-flex align-items-center justify-content-center">
<div id ="mentorReq" class="mentor-req  d-flex flex-column justify-content-space-between align-items-center">

<div id="mySidenav" class="sidenav flex-row align-items-center justify-content-center">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav" style="color: #F64646" >&times;</a>
  <router-link class="pinklink" :to="{ name: 'MyMentees', params: { username: $route.params.username } }">My Mentees</router-link>
  <router-link class="pinklink" :to="{ name: 'AboutMeMentor', params: { username: $route.params.username } }">About Me</router-link>
  <router-link class="pinklink" :to="{ name: 'MentorshipRequestsMentor', params: { username: $route.params.username } }">Mentorship Requests</router-link>
  <router-link class="pinklink" :to="{ name: 'Home', }">Logout</router-link>

</div>

<span style="font-size:30px;cursor:pointer; color:#F64646;position: absolute; left:0; top:3em;" @click="openNav" ><b>&nbsp;&nbsp;&#9776;</b></span>
<h1> Mentorship Requests</h1>
<div class="d-flex flex-row justify-content-space-evenly card-container flex-wrap gap-3">
  <div v-for="(i, idx) in menteelist" :key="idx">
    <mentorshipCard  class="grid-item" :mentee="i.username" :username="$route.params.username" />
  </div>
  <div v-if="!menteelist.length">
    <h3 class="text-center">You don't have any new requests</h3>
  </div>
</div>
</div>
</div>
</template>
<script>
import pinkBtn from '../components/pinkBtn.vue';
import mentorshipCard from '../components/mentorshipCard.vue';
import axios from "axios";
export default{
  components: {
    pinkBtn,
    mentorshipCard,
  },
  data(){
    return{
      menteelist: [],
      list: [],
    }
  },

  methods:{
    logged(v){
      console.log(v)
    },
    openNav(){
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mentorReq").style.width = "75%";
      sideLinks =  document.querySelectorAll(".pinklink");
      sideLinks =  document.querySelectorAll(".pinklink");
      for (let i = 0; i < sideLinks.length; i++) {
        sideLinks.classList.add("transitioned");
      }

    },

    closeNav(){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mentorReq").style.width = "100%";

      sideLinks =  document.querySelectorAll(".pinklink");
      for (let i = 0; i < sideLinks.length; i++) {
        sideLinks.classList.remove("transitioned");
      }
    },
    get() {
      const path = `http://localhost:5000/api/mentorshiprequest/mentor/${this.$route.params.username}`;
      axios.get(path)
        .then((res) => {
          this.list = res.data.menteelist;
            for(let i of this.list){
              if (i.status=="pending"){
                this.menteelist.push(i);
              }
            }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    logout() {
      const path = `http://localhost:5000/api/logout/${this.$route.params.username}`;
      axios.get(path)
        .then(() => {
          // eslint-disable-next-line
          console.log("logged out");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.get();
  },
}
</script>


<style>
.mentorshiprequestsmentor{
 transition: width 0.3s linear;
} 

.mentor-req{
  row-gap: 6em;
  padding:2em;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  transition: width 0.3s linear;
}

h1{
  color: #FB6363;
}

.grid-container {
  display: grid;
}

.sidenav {
  height: 90vh;
  width: 0;
  position: absolute;
  z-index: 1;
  bottom: 0;
  left: 0;
  background-color: #FFEAF0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align: center;
  font-weight: 500;
}

.snav{
  width: 250px;
}

.pinklink {
  padding: 20px 8px 20px 8px;
  text-decoration: none;
  font-size: 25px;
  color: #EF7272;
  display: block;
  transition: 0.3s;
}

.pinklink:hover {
  color: #F64646;
}
.pinklink:on-click{
	color: #F64646;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

</style>