<template>
  <button @click="log()"><slot></slot></button>
</template>
<script>
export default{
methods:{
  log(){
    console.log('logged');
  }
}

}
</script>
<style>
button{
  background-color: rgba(231,136,136,0.62); /* Green */
  border: none;
  color: white;
  font-weight: 500;
  padding: 0.2em 1em;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 0.8em;
  border-radius:41px;
  transition: 0.3s ease-in;
}
button:hover{
  background-color: #FFF0F4;
  color:rgba(231,136,136);
  border: solid 1px rgba(231,136,136);
}

</style>