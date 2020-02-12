<template>
  <div class="home">
    <el-row>
      <h1>{{welcomeMssg}}</h1>
    </el-row>
    <el-row>
      <h2>{{descriptionMssg}}</h2>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{
        welcomeMssg: 'Rios',
        descriptionMssg: 'Aplicación para facilitar el estudio hidrográfico global.'
      }
    
  }
}
</script>
<style  scoped>
.home {
  color: #409eff;
}

</style>