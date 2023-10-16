<template>
  <label>{{label}}</label>
  <input :type="type" :placeholder="placeholder" v-model="inVal" required :pattern="pattern" :title="title" :min="min" :minlength="minlen">
</template>

<script>
export default{
props:['type','label','modelValue','placeholder','value','name','pattern','title','min', 'minlen'],
emits: ['update:modelValue'], 
data(){
  return{
    input:'',
    
  }
},

computed:{
    inVal:{
      get(){
        return this.modelValue
      },
      set(inp){
        this.$emit('update:modelValue', inp);
      }

    }

  }

}
</script>

<style>
  input{
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
input:focus{
  outline: none;
  border: solid 1px rgb(250, 118, 182) ;
}
::placeholder{
  color: #FB6363;
  text-align: center;
}

</style>