<template>
  <div id="app">
    <Layout>
      <div slot="contenido">
        <el-main>
          <router-view />
        </el-main>
      </div>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/layout/Layout.vue";

export default {
  components: {
    Layout
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
