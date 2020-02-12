<template>
  <div>
    <el-col :span="8">
      <el-card>
        <div class="content-aling">
          <img class="imgavatar" :src="src" >
          <h3>Rio: {{title}}</h3>
          <p class="country">Pais de origen: {{country}}</p>
          <p class="lenghRiver">Longitud: {{lenghRiver}}</p>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "ComfirmCard",
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
</style>