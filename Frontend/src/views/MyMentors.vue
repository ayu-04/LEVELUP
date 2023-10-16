const { onMounted } = require("vue")

const { default: axios } = require("axios")

<template>
<div class="d-flex align-items-center justify-content-center main-mentor">
<div id ="mentors" class="mentors  d-flex flex-column justify-content-space-between align-items-center">
<div id="mySidenav" class="sidenav flex-row align-items-center justify-content-center">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav" style="color: #F64646" >&times;</a>
  <router-link class="pinklink" :to="{ name: 'Mentors', params: { username: $route.params.username } }">Mentors</router-link>
  <router-link class="pinklink" :to="{ name: 'MyMentors', params: { username: $route.params.username } }">My Mentors</router-link>
  <router-link class="pinklink" :to="{ name: 'AboutMeMentee', params: { username: $route.params.username } }">About Me</router-link>
  <router-link class="pinklink" :to="{ name: 'MentorshipRequestsMentee', params: { username: $route.params.username } }">Mentorship Requests</router-link>
  <router-link class="pinklink" :to="{ name: 'Home', }">Logout</router-link>
</div>

<span style="font-size:30px;cursor:pointer; color:#F64646; position:absolute; left:0px;" @click="openNav" ><b>&nbsp;&nbsp;&#9776;</b></span>
<h1 class="">My Mentors</h1>
<div class="d-flex flex-row justity-content-space-evenly card-container flex-wrap gap-5">
<div v-for="(i, idx) in list" :key="idx">
  <cardMentor  class="grid-item" :name="i.username" :skills="i.skills" :languages="i.languages" :levels_completed="i.levels_completed" :phno=i.phno :calendly_link=i.calendly_link :username="$route.params.username"/>
</div>
<div v-if="!list.length">
  <h3 class="text-center">You don't have any mentors</h3>
</div>
</div>
</div>
</div>
</template>
<script>
import pinkBtn from '../components/pinkBtn.vue';
import cardMentor from '../components/cardMentor.vue';
import axios from "axios";
export default{
  components: {
    pinkBtn,
    cardMentor,
  },
  data(){
    return{
      mentor_list: [],
      mymentor_list: [],
      list: [],
      randInt: null ,
      skill: "no", 
      language: "no",
    }
  },

  methods:{
    logged(v){
      console.log(v)
    },
    openNav(){
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("mentors").style.width = "75%";
      
    },

    closeNav(){
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("mentors").style.width = "100%";

    },
    reset(){
      this.skill="no";
      this.language="no";
      this.get();
    }, 
    get() {
      console.log('in get')
      const path = `http://localhost:5000/api/dashboard/mentee/${this.$route.params.username}/${this.skill}/${this.language}`;
      console.log('got path')
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      axios.get(path)
        .then((res) => {
          this.mentor_list = res.data.mentor_list;
          const path2 = `http://localhost:5000/api/mentorshiprequest/mentee/${this.$route.params.username}`
          axios.get(path2)
            .then((res)=>{
              this.mymentor_list=res.data.mentorlist;
              for (let i of this.mymentor_list){
                if (i.status=="accepted"){
                  for(let j of this.mentor_list){
                    if (j.username==i.username){
                      this.list.push(j);
                    }
                  }
                }
              }
            })
            .catch((error)=>{
              console.log(error)
            });
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
  mounted() {
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