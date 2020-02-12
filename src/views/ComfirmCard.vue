<template>
  <div class="main-body">
    <el-row :gutter="20" style="margin: 0% 10%">
      <h2>¿Está seguro que quiere añadir este rio?</h2>

      <CardComfirm
        :src="cardForm.src"
        :title="cardForm.title"
        :country="cardForm.country"
        :lenghRiver="cardForm.lenghRiver"
      ></CardComfirm>
    </el-row>
    <el-row :gutter="20" style="margin: 2% 10%">
      <el-button type="primary" icon="el-icon-circle-check" @click="add">Añadir</el-button>
      <el-button type="success" plain icon="el-icon-error" @click="noAdd">Cancelar</el-button>
    </el-row>
  </div>
</template>
<script>
import CardComfirm from "@/components/CardComfirm.vue";

export default {
  name: "ComfirmCard",
  components: {
    CardComfirm
  },
  data() {
    return {
      listRivers: [],
      cardForm: {}
    };
  },
  created() {
    this.cardForm = this.$store.state.cardForm;
    this.listRivers = this.$store.state.listRivers;
  },
  methods: {
    add() {
      this.$store.state.listRivers.push(this.cardForm);
      this.$router.push("/Rios");
      this.$store.state.cardForm = {
        src: "",
        title: "",
        country: "",
        lenghRiver: ""
      };
    },
    noAdd() {
      this.$router.push("/AddRiver");
    }
  }
};
</script>
<style  scoped>
.main-body {
  color: #409eff;
}
.item {
  list-style: none;
}
</style>
