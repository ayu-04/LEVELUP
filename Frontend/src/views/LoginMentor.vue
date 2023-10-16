<template>
<div class="login-form">
  <div class="login-form-left d-flex flex-column gap-3"  >
    <div><custInput :type="type.text" :placeholder="'USERNAME'" v-model="username"></custInput></div>
    <div><custInput :type="type.password" :placeholder="'PASSWORD'" v-model="password"></custInput></div>
    <div><button class="login" @click="post()">Login</button></div>
  </div>
  <div class="login-form-right d-flex flex-column gap-3" style="color:#FB6363;text-align: center">
    <div><h4> Mentor Sign In</h4></div> 
    <div style="font-size:20px">Don't have an account?
    <br>
    <router-link to="/signup/mentor" style="color:#FB6363"><b>CREATE ONE</b></router-link>
    </div>
  </div> 
</div> 
</template>
<style>
.login-form {
   height:90vh; 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
 
}

.login{
  width:9em;
  height:3em;
  font-size: 0.8em;
}

.login-form-left{
background-color: #FFFFFF;
height: 350px;
width: 25%;
display: flex;
justify-content: center;
align-items: center;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
font-family:'Poppins', sans-serif; ;
box-shadow: var(--boxShadow);
border: solid 1.5px rgba(241,57,57,0.62);


}
.login-form-right{
background-color: #ffd8d8;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
width: 25%;
height: 350px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: var(--boxShadow);
border: solid 1.5px rgba(241,57,57,0.62);

}


.login-form-left, .login-form-right{
box-shadow: var(--boxShadow);

}

</style>
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
  data(){
    return {
      type:{
        password: 'password',
        text:'text',
      },
      error: '',
      role: 'mentor',
      username: '',
      password: '',
    };
  },
  methods:{
    post(){
      const path=`http://localhost:5000/api/login`;
      const payload={
        role: this.role,
        username: this.username, 
        password: this.password
      };
      console.log(payload);
      axios.post(path, payload)
        .then(() => {
          this.$router.push({name:'MyMentees', params: {username:this.username,} });
          })
        .catch((error) => {
          if(error.response.status=='401'){
            this.error = "Invalid Password";
            alert(this.error);
          }
          if(error.response.status=='404'){
            this.error = "Invalid Username";
            alert(this.error);
          }
          console.log(error);
          });
    }
  }
}
</script>