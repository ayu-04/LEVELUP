<template>
<div class="edit-mentor ">
<form class="d-flex flex-row align-items-center justify-content-center" validate="true" onsubmit="return false">
<div class="form d-flex flex-column align-items-center gap-3">
<div class="email text-center">
<h6>Your Email Id</h6>
  <custInput  :type="type.email" v-model="emailid"></custInput>
</div>
<div class="age-loc d-flex justify-content-evenly gap-3">
  <div class="w-75 text-center">
  <h6>Your Age</h6>
    <custInput :type="type.number" v-model="age" :min="15"></custInput>
  </div>
  <div class="w-75 text-center">
    <h6>Your Location</h6>
    <select v-model="location" required>
      <option v-for="(i, idx) in location_options" :key="idx">{{i}}</option>
    </select>
  </div>
</div>
<div class="phone text-center">
  <h6>Your Phone Number</h6>
  <custInput :type="type.tel" v-model="phno" :pattern="'[0-9]{10}'" :title="'phone number should be 10 digits'"></custInput>
</div>
<div class="language text-center flex-column align-items-center">
  <h6>Your Languages</h6>
    <div class=" d-flex gap-2">
    <label class="container">English
    <input type="checkbox" v-model="languages" value="English">
    <span class="checkmark"></span>
    </label>
    <label class="container">Hindi
    <input type="checkbox" v-model="languages" value="Hindi">
    <span class="checkmark"></span>
    </label>
    <label class="container">French
    <input type="checkbox" v-model="languages" value="French">
    <span class="checkmark"></span>
    </label>
    <label class="container">Spanish
    <input type="checkbox" v-model="languages" value="Spanish">
    <span class="checkmark"></span>
    </label>
    <label class="container">Arabic
    <input type="checkbox" v-model="languages" value="Arabic">
    <span class="checkmark"></span>
    </label>
    </div>
  </div>
  <div class="links d-flex justify-content-evenly gap-3">
<div class="w-75 text-center">
<h6>Your LinkedIn Link</h6>
  <custInput :type="type.url" v-model="linkedin_link"></custInput>

</div>
<div class="w-75 text-center">
<h6>Your Calendly Link</h6>
  <custInput :type="type.url" v-model="calendly_link"></custInput>
</div>
</div>
</div>
<div class="form-1 d-flex flex-column align-items-center gap-3 pt-3">
<div class="level text-center">
<h6>Your Current Level</h6>
<select v-model="current_level" required>
    <option v-for="(i, idx) in levels_options" :key="idx">{{i}}</option>
</select>
</div>
<div class="language text-center flex-column align-items-center">
<h6>Your skills</h6>
  <div class=" d-flex gap-2">
    <label class="container">Python
      <input type="checkbox" v-model="skills" value="Python">
      <span class="checkmark"></span>
    </label>
    <label class="container">Java
      <input type="checkbox" v-model="skills" value="Java">
      <span class="checkmark"></span>
    </label>
    <label class="container">DSA
      <input type="checkbox" v-model="skills" value="DSA">
      <span class="checkmark"></span>
    </label>
    <label class="container">Web-Dev
      <input type="checkbox" v-model="skills" value="Web-Dev">
      <span class="checkmark"></span>
    </label>
    <label class="container">ML
      <input type="checkbox" v-model="skills" value="ML">
      <span class="checkmark"></span>
    </label>
  </div>
</div>
<div class="language text-center flex-column align-items-center">
<h6>Levels you have completed</h6>
  <div class=" d-flex  gap-2">
  <label class="container">Foundation
      <input type="checkbox" v-model="levels_completed" value="Foundation">
      <span class="checkmark"></span>
  </label>
  <label class="container">Diploma
      <input type="checkbox" v-model="levels_completed" value="Diploma">
      <span class="checkmark"></span>
  </label>
  <label class="container">Bsc-Degree
      <input type="checkbox" v-model="levels_completed" value="BSc-Degree">
      <span class="checkmark"></span>
  </label>
  <label class="container">BS-Degree
      <input type="checkbox" v-model="levels_completed" value="BS-Degree">
      <span class="checkmark"></span>
  </label>
  </div>
</div>

<div class="level text-center">
  <h6>Your Description</h6>
  <textarea required v-model="description"></textarea>
  
</div>
<button type="submit" @click.prevent="validate()"><b>DONE</b></button>

</div>
</form>
</div>
</template>

<script>
import pinkBtn from '../components/pinkBtn.vue';
import custInput from '../components/custInput.vue';
import axios from "axios";
export default{
  components: {
    pinkBtn: pinkBtn,
    custInput: custInput,
  },
  data() {
    
    return {
      location_options:[
        'Andhra Pradesh',
        'Arunachal Pradesh',
        'Assam',
        'Bihar',
        'Chhattisgarh',
        'Goa',
        'Gujarat',
        'Haryana',
        'Himachal Pradesh',
        'Jharkhand',
        'Karnataka',
        'Kerala',
        'Madhya Pradesh',
        'Maharashtra',
        'Manipur',
        'Meghalaya',
        'Mizoram',
        'Nagaland',
        'Odisha',
        'Punjab',
        'Rajasthan',
        'Sikkim',
        'Tamil Nadu',
        'Telangana',
        'Tripura',
        'Uttar Pradesh',
        'Uttarakhand',
        'West Bengal'
      ],
      levels_options:[
        'Foundation', 
        'Diploma', 
        'Bsc-Degree', 
        'Bs-Degree'
      ],
      type:{
        email: 'email',
        password: 'password',
        text:'text',
        number:'number',
        file:'file',
        url:'url',
        checkbox:'checkbox'
        },
      emailid: '',
      age: null,
      location: '',
      phno: null,
      languages: [],
      skills: [],
      levels_completed: [],
      current_level: '',
      linkedin_link: '',
      calendly_link: '',
      description: '',
    };
  },
  methods:{
    validate(){
      const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if (!this.emailid.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        alert("Please enter a valid Email Id")
      }
      else if (!String(this.phno).match(/^\d{10}$/)){
        alert("Please enter a valid phone number")
      }
      else if (this.age == null || this.age <15){
        alert("Your age should be greater than 14")
      }
      else if (this.location == ''){
        alert("Please select a location")
      }
      else if (this.languages.length==0){
        alert("Please select a language")
      }
      else if (!regexp.test(this.linkedin_link)){
        alert("Please enter a valid LinkedIn link")
      }
      else if (!regexp.test(this.calendly_link)){
        alert("Please enter a valid Calendly link")
      }
      else if (this.current_level==''){
        alert("Please select a level")
      }
      else if (this.skills.length==0){
        alert("Please select a skill")
      }
      else if (this.levels_completed.length==0){
        alert("Please select a level completed")
      }
      else if (this.description==''){
        alert("Please enter description")
      }
      else{
        this.put()
      }
    },
    put(){
      const path=`http://localhost:5000/api/mentor/${this.$route.params.username}/${this.$route.params.username}`;
      const payload = {
        'emailid': this.emailid,
        'age': this.age,
        'location': this.location,
        'phno': this.phno,
        'languages': this.languages,
        'skills': this.skills,
        'levels_completed': this.levels_completed,
        'current_level': this.current_level,
        'linkedin_link': this.linkedin_link,
        'calendly_link': this.calendly_link,
        'description': this.description
      }
      console.log(payload);
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      axios.put(path, payload, axiosConfig)
      .then(() => {
        this.$router.push({name:'AboutMeMentor', params: {username:this.$route.params.username} });
        })
      .catch((error) => {
        console.log(error);
        });
    },
    get() {
      const path = `http://localhost:5000/api/mentor/${this.$route.params.username}/${this.$route.params.username}`;
      axios.get(path)
        .then((res) => {
          this.emailid = res.data.emailid;
          this.skills = res.data.skills;
          this.age = res.data.age;
          this.location = res.data.location;
          this.languages = res.data.languages;
          this.levels_completed = res.data.levels_completed;
          this.linkedin_link = res.data.linkedin_link;
          this.calendly_link = res.data.calendly_link;
          this.description = res.data.description;
          this.phno = res.data.phno;
          this.current_level=res.data.current_level;
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

.edit-mentor{
  font-weight: 500;
} 
.form,.form-1{
  width: 50%;
  
}


.email, .phone,.age-loc,.language,.links,.level{
  color: #FB6363;
  width: 80%;
}
select{
     width: 100%;
     padding: 8px;
     font-size: 18px;
     border: none;
     width:100%;
     box-sizing: border-box;
     background-color:#FFEAF0;
     color: #000000;
     border-radius: 6px;
      transition: all ease-in 0s;
}
select:focus{
  outline: none;
  border: solid 1px rgb(250, 118, 182) ;
}
.container {
  color: #FB6363;
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #ffffff;
  border-style: solid;
  border-color: #FB6363;
  border-radius: 5px;
}

.container:hover input ~ .checkmark {
  background-color: #FFB1B1;
}

.container input:checked ~ .checkmark {
  background-color: #FB6363;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

textarea{
     width: 100%;
     padding: 8px;
     font-size: 18px;
     border: none;
     width:100%;
     box-sizing: border-box;
     background-color:#FFEAF0;
     color: #000000;
     border-radius: 6px;
      transition: all ease-in 0s;
}
textarea:focus{
  outline: none;
  border: solid 1px rgb(250, 118, 182) ;
}
option{
  color: #FB6363;
}
select{
  color: #FB6363;
}
label, h6{
  color: #FB6363;

}

.uploadFile{
  cursor: pointer;
    background-color: #FFEAF0;
    border: none;
    color: #FB6363;
    height: 2em;
    padding: 0.25em;
    text-align: center;
    width: 100%;
    text-decoration: none;
    display: inline-block;
    font-size: 1em;
    border-radius: 5px;
    transition: 0.3s ease-in;
}
</style>