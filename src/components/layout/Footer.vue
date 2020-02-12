<template>
  <div class="footer">
    <footer>
      <p>Dia {{day}} de {{month}} de {{year}} - Hora: {{hour}}:{{minutes}}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      day: "",
      month: "",
      year: "",
      hour: "",
      minutes: ""
    };
  },
  created() {
    var d = new Date();
    this.year = d.getFullYear();
    this.day = d.getDate();
    this.month = d.getMonth() + 1;
    this.hour = d.getHours();
    this.minutes = d.getMinutes();
  }
};
</script>

<style>
.footer {
  padding: 10px;
  margin-right: 10px;
  text-align: left;
  background-color: #409eff;
  position: fixed;
  bottom: 10px;
  height: 30px;
  width: 98.2%;
  color: #e2f8fc;
}
</style>