<template>
  <div>
    <header id="nav">
      <h1 class="el-icon-light-rain titulo">{{titel}}</h1>
      <router-link to="/">Home</router-link>
      <router-link to="/rios">Rios</router-link>
      <router-link to="/addRiver">Añadir Rio</router-link>
    </header>
  </div>
</template>
<script>
export default {
  name: "Headers",
  data() {
    return {
      titel: " Estudio Hidrográfico Global."
    };
  }
};
</script>
<style scoped>
#nav {
  padding: 10px;
  text-align: left;
  background-color: #409eff;
}

#nav a {
  font-weight: bold;
  color: #e2f8fc;
  padding-right: 30px;
}

#nav a.router-link-exact-active {
  color: #a2e66a;
  font-weight: bold;
  text-decoration: underline;
}
.titulo {
  font-size: 34px;
  color: #e2f8fc;
  padding-right: 30px;
}
</style>