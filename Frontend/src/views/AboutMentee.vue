const { default: axios } = require("axios")

<template>
  <div class="aboutme">
    <div
      class="aboutmecard container d-flex flex-column gap-3 px-5"
      style="width: 55rem"
    >
      <div class="text-center">
        <h2 class="about">{{ mentee_name }}</h2>
        <router-link
          style="
            position: absolute;
            top: 0;
            right: 0;
            margin-top: 5px;
            margin-right: 10px;
          "
          :to="{
            name: 'MyMentees',
            params: { username: $route.params.username },
          }"
          ><pinkBtn><b>BACK</b></pinkBtn></router-link
        >
      </div>

      <div class="d-flex flex-row">
        <div class="d-flex flex-column gap-3" style="width: 40%">
          <p1
            >Skills: <span v-for="i in skills">{{ i + " " }}</span></p1
          >
          <p1
            >Weaknesses: <span v-for="i in weaknesses">{{ i + " " }}</span></p1
          >
          <p1>Age: {{ age }}</p1>
          <p1>Location: {{ location }}</p1>
          <p1
            >Languages: <span v-for="i in languages">{{ i + " " }}</span></p1
          >
          <a :href="' https://wa.me/' + phno" target="_blank"
            ><pinkBtn>Chat on WhatsApp</pinkBtn></a
          >
        </div>
        <div class="d-flex flex-column gap-3" style="width: 60%">
          <div class="d-flex justify-content-center w-100 px-5">
            <img class="img" :src="url" />
          </div>
          <div class="description-box text-center">
            <p1>Description</p1>
            <br />
            <p1 style="font-size: 20px">{{ description }}</p1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pinkBtn from '../components/pinkBtn.vue';
import axios from "axios";
export default{
  components: {
    pinkBtn,
  },
  data(){
    return{
      mentee_name: '',
      skills: [],
      age: null,
      location: '',
      languages: [],
      weaknesses: [],
      description: '',
      phno: null,
      url:'',
    }
  },

  methods:{
    logged(v){
      console.log(v)
    },
    getImgUrl(){
      const path = `http://localhost:5000/api/id/${this.mentee_name}`
      axios.get(path)
      .then((res)=>{
         this.url= 'https://picsum.photos/id/'+res.data.id+'/400/400'
      })
      .catch((error)=>{
        console.log(error)
      });
    },
    get() {
      const path = `http://localhost:5000/api/mentee/${this.$route.params.username}/${this.$route.params.menteename}`;
      axios.get(path)
        .then((res) => {
              this.mentee_name = res.data.username;
              this.age = res.data.age;
              this.location = res.data.location;
              this.languages = res.data.languages;
              this.weaknesses = res.data.weaknesses;
              this.description = res.data.description;
              this.phno = res.data.phno;
              this.getImgUrl();
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
  created(){
    this.get()
    }
}
</script>

<style>
.aboutme {
  font-weight: 500;
  align-items: center;
  justify-content: center;
  padding: 2em;
}
.aboutmecard {
  background-color: #ffd8d8 !important;
  color: #fb6363;
  padding: 5px;
  border: solid 2px #ff6666 !important;
  font-weight: 500;
  border-radius: 15px;
  padding: 1em;
}
.description-box {
  background-color: #ffeaf0;
  border-radius: 5px;
  width: 50%;
  height: 200px;
  margin: auto;
  float: left;
}
.about {
  color: #fb6363;
}
.image {
  border-radius: 50%;
  width: 100%;
  height: 100%;
  margin: auto;
  float: right;
  text-align: center;
}
.img {
  border-radius: 50%;
  width: 50%;
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
  background-color: #ffeaf0;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align: center;
  font-weight: 500;
}

.pinklink {
  padding: 20px 8px 20px 8px;
  text-decoration: none;
  font-size: 25px;
  color: #ef7272;
  display: block;
  transition: 0.3s;
}

.pinklink:hover {
  color: #f64646;
}
.pinklink:on-click {
  color: #f64646;
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
