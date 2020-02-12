<template>
  <div class="grid-content bg-purple-light">
    <h4>Foto</h4>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-camera avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "UploadImage",
  components: {},
  data() {
    return {
      imageUrl: null
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      this.$emit("SendImagen", this.imageUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("La imagen debe estar en formato JPG!");
      }
      if (!isLt2M) {
        this.$message.error("La imagen excede los 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style scoped>
.preview-image {
  background-color: #349dce;
  margin: 15px 0px;
  max-width: 40%;
  display: flex;
}
h4 {
  color: #409eff;
  margin: 2% 0;
}
</style>