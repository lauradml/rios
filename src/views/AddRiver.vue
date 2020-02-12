<template>
  <div class="home">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <main class="main-block">
        <h2 class="sub-title">{{ welcomeMssg }}</h2>
        <section class="main-body">
          <div class="main-column">
            <el-form-item prop="title">
              <h4>* Nombre del rio</h4>
              <Input
                v-model="ruleForm.tile"
                :textValue="ruleForm.title"
                @saveInputValue="getTitle"
                class="input"
              />
            </el-form-item>
          </div>
          <div class="main-column">
            <el-form-item prop="country">
              <h4>* Pais de origen</h4>
              <Input
                v-model="ruleForm.tile"
                :textValue="ruleForm.country"
                @saveInputValue="getCountry"
                class="input-country"
              />
            </el-form-item>
          </div>
          <div class="main-column">
            <el-form-item prop="lenghRiver">
              <h4>* Longitud del rio</h4>
              <Input
                v-model="ruleForm.tile"
                :textValue="ruleForm.lenghRiver"
                @saveInputValue="getlenghRiver"
                class="input-country"
              />
            </el-form-item>
          </div>

          <div>
            <UploadImage :urlimagen="ruleForm.src" @SendImagen="getUrlImagen" />
          </div>
          <el-button type="primary" icon="el-icon-s-promotion" @click="add('ruleForm')">Mandar</el-button>
        </section>
        <section class="main-block"></section>
      </main>
    </el-form>
    <!-- <pre> {{$data}}</pre> -->
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import UploadImage from "@/components/UploadImage";

export default {
  name: "addRiver",
  components: {
    Input,
    UploadImage
  },
  data() {
    return {
      welcomeMssg: "Añade un rio",
      listRivers: [],
      ruleForm: {
        src: "",
        title: "",
        country: "",
        lenghRiver: "",
      },
      rules: {
        title: [
          {
            required: true,
            message: "El nombre es obigatorio",
            trigger: "change"
          }
        ],
        country: [
          {
            required: true,
            message: "El Pais de origen esobigatorio",
            trigger: "change"
          }
        ],

        lenghRiver: [
          {
            required: true,
            message: "La longitud del rio es obligatoria",
            trigger: "change"
          }
        ]
      }
    };
  },
  created() {
    this.ruleForm = this.$store.state.cardForm;
  },
  methods: {
    getTitle(event) {
      this.ruleForm.title = event;
    },
    getCountry(event) {
      this.ruleForm.country = event;
    },
    getlenghRiver(event) {
      this.ruleForm.lenghRiver = event;
    },
    getUrlImagen(event) {
      this.ruleForm.src = event;
    },

    add(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/ComfirmCard");
          this.ruleForm = {};
        } else {
          console.log("error al mandar rio");
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.main-block {
  width: 900px;
  margin: auto;
}
.main-body {
  color: #409eff;
  border-top: 1px solid #409eff;
}

.main-title {
  margin: 10px 0 50px 0;
  color: #7f7f7f;
}

.sub-title,
h4 {
  color: #409eff;
  margin: 2% 0;
}

.main-column {
  flex: 50%;
  width: 100%;
  margin-left: -120px;
  line-height: -20px;
}

.input-name {
  background-color: aqua;
  border: 3px solid red;
}
</style>