<template>
    <div class="main">
    
    <div class="hero">
        <div class= "text container-fluid">
        <h3 style="padding-bottom: 50px; color: white;font-weight:600;">MENTORSHIP PLATFORM <span style="color:#EF7272;font-weight:700;">EXCLUSIVELY</span> FOR <br><b>THE IITM COMMUNITY</b></h3>
        <div>
            <h4 style="color: #EF7272;padding-bottom: 50px;"> WHAT ARE YOU LOOKING FOR?</h4>
        </div>
        <div class="d-flex justify-content-around">
          <router-link to="/login/mentor" style="color:white"><pinkBtn>I AM A MENTOR</pinkBtn></router-link>
          <router-link to="/login/mentee" style="color:white"><pinkBtn>I WANT A MENTOR</pinkBtn></router-link>
        </div>
        </div>
    </div>
    </div>
</template>

<style>

a{
  text-decoration: none;
}
.hero{
  background-image: url('../assets/BackgroundOne.jpg');
  background-size: cover;
  background-position: center;
  width:100%;
  height: 90vh;
}
.hero::before{
  content:'';
  background-color:var(--overlay); 
  position: absolute;
  top:6,2em;
  left:0;
  width:100%;
  height:90vh;

}

.text{
  position: absolute;
  top: 25%;
  color: white;
  font-size:42px;
  font-family: var(--nunito);
  text-align: center;
}
.text h3{
  font-size: 60px;
}
.text h4{
  font-size: 50px;
}
</style>
<script>
import pinkBtn from '../components/pinkBtn.vue';
export default{
  components: {
    pinkBtn  
  },
  methods:{
    
  }
}
</script>