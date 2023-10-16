<template>

<form class="signup d-flex flex-row" validate="true">
<div class="form d-flex flex-column align-items-center gap-3">
<div class="username">
  <custInput :type="type.text" :placeholder="'USERNAME'" v-model="username"></custInput>
</div>
<div class="email-pass d-flex justify-content-evenly gap-3">
  <div class="w-75">
    <custInput  :type="type.email" :placeholder="'EMAIL'" v-model="emailid"></custInput>
  </div>
  <div class="w-75">
    <custInput  :type="type.password" :placeholder="'PASSWORD'" v-model="password" :minlen="6"></custInput>
  </div>
</div>
<div class="phone">
  <custInput :type="type.tel" :placeholder="'PHONE NUMBER'" v-model="phno" :pattern="'[0-9]{10}'" :title="'phone number should be 10 digits'"></custInput>
</div>
<div class="age-loc d-flex justify-content-evenly gap-3">
  <div class="w-75">
    <custInput :type="type.number" :placeholder="'AGE'" v-model="age" :min="15"></custInput>
  </div>
  <div class="w-75">
    <select v-model="location" required>
      <option disabled value="">Please select location</option>
      <option v-for="(i, idx) in location_options" :key="idx">{{i}}</option>
    </select>
  </div>
</div>
<div class="level">
  <textarea required placeholder="DESCRIPTION" v-model="description"></textarea>
</div>
  <div class="links d-flex justify-content-evenly gap-3">
</div>
</div>
<div class="form-1 d-flex flex-column align-items-center gap-3">
<div class="language text-center flex-column align-items-center">
  <h6>Your Languages</h6>
    <div class=" d-flex gap-2">
    <label required class="container">English
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
  <h6>Your weaknesses</h6>
  <div class=" d-flex gap-2">
    <label class="container">Python
      <input type="checkbox" v-model="weaknesses" value="Python">
      <span class="checkmark"></span>
    </label>
    <label class="container">Java
      <input type="checkbox" v-model="weaknesses" value="Java">
      <span class="checkmark"></span>
    </label>
    <label class="container">DSA
      <input type="checkbox" v-model="weaknesses" value="DSA">
      <span class="checkmark"></span>
    </label>
    <label class="container">Web-Dev
      <input type="checkbox" v-model="weaknesses" value="Web-Dev">
      <span class="checkmark"></span>
    </label>
    <label class="container">ML
      <input type="checkbox" v-model="weaknesses" value="ML">
      <span class="checkmark"></span>
    </label>
  </div>
</div>
<button class="submit" @click.prevent="validate()"><b>SUBMIT</b></button>
</div>
</form>
</template>

<script>
import pinkBtn from '../components/pinkBtn.vue';
import custInput from '../components/custInput.vue';
import axios from "axios";
import FormData from "form-data";
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
      type:{
        email: 'email',
        password: 'password',
        text:'text',
        number:'number',
        file:'file',
        url:'url',
        checkbox:'checkbox'
        },
      error: '',
      username: '',
      password: '',
      emailid: '',
      age: null,
      location: '',
      phno: null,
      languages: [],
      skills: [],
      weaknesses: [],
      description: '',
    };
  },
  methods:{ 
    validate(){
      const regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if (this.username == ''){
        alert("Please enter a username")
      }
      else if (!this.emailid.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        alert("Please enter a valid Email Id")
      }
      else if (this.password.length < 6){
        alert("Please enter a password of 6 or more characters")
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
      else if (this.skills.length==0){
        alert("Please select a skill")
      }
      else if (this.weaknesses.length==0){
        alert("Please select a weakness")
      }
      else if (this.description==''){
        alert("Please enter description")
      }
      else{
        this.post()
      }
    },
    post(){
      const path=`http://localhost:5000/api/signup/mentee`;
      const payload = {
        'username': this.username,
        'password': this.password,
        'emailid': this.emailid,
        'age': this.age,
        'location': this.location,
        'phno': this.phno,
        'languages': this.languages,
        'skills': this.skills,
        'weaknesses': this.weaknesses,
        'description': this.description
      }
      let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };
      axios.post(path, payload, axiosConfig)
        .then(() => {
          this.$router.push({name:'Mentors', params: {username:this.username} });
          })
        .catch((error) => {
          if (error.response.status == '404'){
            this.error="User already exists. Please use a different username";
            alert(this.error);
          }
          console.log(error);
          });
    }
  }
}
</script>

<style>

.signup{
  font-weight: 500;
  margin-top:5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
} 
.form,.form-1{
  width: 50%;
  
}


.username, .email-pass,.phone,.age-loc,.language,.links,.level{
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


</style>