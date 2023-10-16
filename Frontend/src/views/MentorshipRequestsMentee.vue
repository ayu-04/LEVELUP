<template>
<div class="mentorshiprequestsmentee d-flex align-items-center justify-content-center">
<div id ="menteeReq" class="mentee-req  d-flex flex-column justify-content-space-between align-items-center">

<div id="mySidenav" class="sidenav flex-row align-items-center justify-content-center">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav" style="color: #F64646" >&times;</a>
  <router-link class="pinklink" :to="{ name: 'Mentors', params: { username: $route.params.username } }">Mentors</router-link>
  <router-link class="pinklink" :to="{ name: 'MyMentors', params: { username: $route.params.username } }">My Mentors</router-link>
  <router-link class="pinklink" :to="{ name: 'AboutMeMentee', params: { username: $route.params.username } }">About Me</router-link>
  <router-link class="pinklink" :to="{ name: 'MentorshipRequestsMentee', params: { username: $route.params.username } }">Mentorship Requests</router-link>
  <router-link class="pinklink" :to="{ name: 'Home', }">Logout</router-link>

</div>

<span style="font-size:30px;cursor:pointer; color:#F64646;position: absolute; left:0; top:3em;" @click="openNav" ><b>&nbsp;&nbsp;&#9776;</b></span>

<h1> Mentorship Requests</h1>
<div class="d-flex flex-row justify-content-space-evenly card-container flex-wrap gap-3">
<div v-if="!mentorlist.length">
  <h3 class="text-center">You didn't send any requests yet</h3>
</div>
<div v-for="(i, idx) in mentorlist" :key="idx">
  <mentorshipCardMentor  class="grid-item" :mentor="i.username" :status="i.status" :username="$route.params.username" />
</div>
</div>
</div>
</div>
</template>
<script>
import pinkBtn from '../components/pinkBtn.vue';
import mentorshipCardMentor from '../components/mentorshipCardMentor.vue';
import axios from "axios";
export default{
  components: {
    pinkBtn,
    mentorshipCardMentor,
  },
  data(){
    return{
      mentorlist: [],
      
    }
  },

  methods:{
    logged(v){
      console.log(v)
    },
    openNav(){
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("menteeReq").style.width = "75%";

      document.querySelectorAll(".pinklink")[0].classList.add("transitioned");
      document.querySelectorAll(".pinklink")[1].classList.add("transitioned");
      document.querySelectorAll(".pinklink")[2].classList.add("transitioned");
      document.querySelectorAll(".pinklink")[3].classList.add("transitioned");
      document.querySelectorAll(".pinklink")[4].classList.add("transitioned");
    },

    closeNav(){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("menteeReq").style.width = "100%";

      document.querySelectorAll(".pinklink")[0].classList.remove("transitioned");
      document.querySelectorAll(".pinklink")[1].classList.remove("transitioned");
      document.querySelectorAll(".pinklink")[2].classList.remove("transitioned");
      document.querySelectorAll(".pinklink")[3].classList.remove("transitioned");
      document.querySelectorAll(".pinklink")[4].classList.remove("transitioned");

    },
    get() {
      const path = `http://localhost:5000/api/mentorshiprequest/mentee/${this.$route.params.username}`;
      axios.get(path)
        .then((res) => {
          this.mentorlist = res.data.mentorlist;
          console.log(this.mentorlist);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    logout() {
      const path = `http://localhost:5000/api/logout/${this.$route.params.username}`;
      axios.get(path)
        .then(() => {
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
.mentorshiprequestsmentee{
 transition: width 0.3s linear;

  
} 
.mentee-req{
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