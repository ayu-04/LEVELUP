<template>
<nav class="hstack px-5">
    <div class="brand">
      <img src="./assets/logo.png">
    </div>
    <div class="nav-list ms-auto">
      <ul class="hstack gap-3">
        <li><a>About</a></li>
        <li><a>Contact</a></li>
        <router-link to="/signup/mentor" style="color:white"><li><pinkBtn>Sign up Mentor</pinkBtn></li></router-link>
        <router-link to="/signup/mentee" style="color:white"><li><pinkBtn>Sign up Mentee</pinkBtn></li></router-link>
      </ul>
    </div>
  </nav>
<router-view/>
</template>

<script>
import pinkBtn from './components/pinkBtn.vue';
export default{
  components: {
    pinkBtn  
  },
  methods:{
    logged(v){
      console.log(v)
    }
  }
}
</script>

<style>

:root{
  --background: linear-gradient(120deg, rgba(255,177,177,0.72),rgba(241,161,161,0.65),rgba(246,169,169,0.6),rgba(251,162,162,0.35));
  --secondary: #FFEAF0;
  --nunito:'Nunito', sans-serif;
  --text:#E78888;
  --overlay:rgba(217,177,175,0.5);
  --border: solid 2px rgba(205,102,102,0.62);
  --boxShadow: 5px 4px 4px 4px rgba(224,138,138,0.12);
}

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: var(--background);
  
}


#app{
  height: 100vh;
  width:100%;

}

ul{
 column-gap:6rem;
 font-family: var(--nunito);
 font-weight: 800;
 color:var(--text);
 padding-top: 20px;
}
ul li{
  font-size: 1.2em;
  list-style-type: none;
}

 
a{
  text-decoration: none;
}
nav{
  background-color: var(--secondary);
  height: 10%;
  box-shadow: 1px 7px 14px -6px rgba(224,138,138);
  border-bottom: solid 2px #FB6363;
}
.brand img{
  height: 70px;
  
}
.brand{
  text-align: center;
  padding-bottom: 10px;

}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background:#F7C4C4; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background:#FB6363; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #F73134; 
}

.sidenav > routerlinks{
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 0.3s;
}

.transitioned{
  opacity: 1 !important;
}

.sidenav:nth-child(1){
  transition-delay: 0.6s;
}
.sidenav:nth-child(2){
  transition-delay: 1.2s;
}
.sidenav:nth-child(2){
  transition-delay: 1.8s;
}
.sidenav:nth-child(2){
  transition-delay: 2.4s;
}
.sidenav:nth-child(2){
  transition-delay: 3s;
}
</style>