const { onMounted } = require("vue")

const { default: axios } = require("axios")

<template>
<div class="d-flex align-items-center justify-content-center main-mentee">
<div id ="mentees" class="mymentees  d-flex flex-column justify-content-space-between align-items-center">
<div id="mySidenav" class="sidenav flex-row align-items-center justify-content-center">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav" style="color: #F64646" >&times;</a>
  <router-link class="pinklink" :to="{ name: 'MyMentees', params: { username: $route.params.username } }">My Mentees</router-link>
  <router-link class="pinklink" :to="{ name: 'AboutMeMentor', params: { username: $route.params.username } }">About Me</router-link>
  <router-link class="pinklink" :to="{ name: 'MentorshipRequestsMentor', params: { username: $route.params.username } }">Mentorship Requests</router-link>
  <router-link class="pinklink" :to="{ name: 'Home', }">Logout</router-link>

</div>

<span style="font-size:30px;cursor:pointer; color:#F64646; position: absolute; left:0; top:3em;" @click="openNav" ><b>&nbsp;&nbsp;&#9776;</b></span>
<h1 class=""> My Mentees</h1>
<div class="d-flex flex-row justify-content-space-evenly card-container flex-wrap gap-3">
  <div v-for="(i, idx) in mentee_list" :key="idx">
    <cardMentee  class="grid-item" :name="i.username" :skills="i.skills" :weaknesses="i.weaknesses" :phno="i.phone_number" :username="$route.params.username"/>
  </div>
 

  <div v-if="!mentee_list.length">
    <h3 class="text-center">You don't have any mentees yet</h3>
  </div> 
</div>
</div>
</div>
</template>
<script>
import pinkBtn from '../components/pinkBtn.vue';
import cardMentee from '../components/cardMentee.vue';
import axios from 'axios';
export default{
  components: {
    pinkBtn,
    cardMentee,
  },
  data(){
    return{
      mentee_list: [],
      randInt: null ,
    }
  },

  methods:{
    logged(v){
      console.log(v)
    },
    openNav(){
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mentees").style.width = "75%";
      
    },

    closeNav(){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mentees").style.width = "100%";

    },
    
    get() {
      console.log('in get')
      const path = `http://localhost:5000/api/dashboard/mentor/${this.$route.params.username}`;
      console.log('got path')
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      axios.get(path, axiosConfig)
        .then((res) => {
          this.mentee_list = res.data.mentee_list;
        })
        .catch((error) => {
          // eslint-disable-next-line
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
          // eslint-disable-next-line
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
.main-mentee{  transition: width 0.3s linear;}

.mymentees{
  row-gap: 6em;
  padding:2em;
  font-weight: 500;
  /* height:90vh; */
  /* background: var(--background); */
  display: flex;
  flex-direction: row;
  transition: width 0.3s linear;
  
} 
h1{
  color: #FB6363;
  /* text-align:right; */
  /* padding: 50px 490px  */
}
.grid-container {
  display: grid;
}
.sidenav {
  height: 100%;
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
.card-container{
    width: 100%;
    align-items: center;
    justify-content: center;
    /* column-gap: -35px; */
    column-gap: 25px;
    transition: width 0.3s linear;
}
</style>