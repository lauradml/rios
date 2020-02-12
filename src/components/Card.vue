<template>
  <div>
    <el-col :span="8">
      <el-card>
        <div class="content-aling">
          <img class="imgavatar" :src="src" >
          <h3>Rio: {{title}}</h3>
          <p class="country">Pais de origen: {{country}}</p>
          <p class="lenghRiver">Longitud: {{lenghRiver}}</p>
          <el-button type="primary" icon="el-icon-delete" @click='$emit("clickDelete",title )' class="delete">borrar</el-button>
          <a href="#arriba"><el-button type="success" plain icon="el-icon-edit" @click='$emit("clickEdit", title )'>editar</el-button></a>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    src: {
      required: false,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    country: {
      required: true,
      type: String
    },
    lenghRiver: {
      required: true,
      type: String
    }
  }
};
</script>
<style scoped>
.content-aling {
  text-align: left;
}
.imgavatar {
  width: 100%;
  height: 200px;
  background-size: cover;
}
.delete{
  margin-right: 10px;
}
</style>