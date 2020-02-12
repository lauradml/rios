<template>
  <div class="main-body">
    <el-row :gutter="20" style="margin: 0% 10%">
      <a name="arriba"></a>
      <h2>Hay actulmente {{contador}} rios agregados</h2>
      <el-button type="primary" @click="accept">Ver Rios</el-button>
      <el-row :gutter="20" style="margin: 0% 10% " v-if="showEdit" class="main-body-form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
          <main class="main-block">
            <h2 class="sub-title">Editar rio</h2>
            <section class="main-body">
              <div class="form-edit">
                <div class="main-column">
                  <h4 prop="title">* Nombre del rio</h4>
                  <Input
                    v-model="ruleForm.tile"
                    :textValue="ruleForm.title"
                    @saveInputValue="getTitle"
                    class="input"
                  />
                </div>
                <div class="main-column">
                  <h4 prop="country">* Pais de origen</h4>
                  <Input
                    v-model="ruleForm.tile"
                    :textValue="ruleForm.country"
                    @saveInputValue="getCountry"
                    class="input-country"
                  />
                </div>
                <div class="main-column">
                  <h4 prop="lenghRiver">* Longitud del rio</h4>
                  <Input
                    v-model="ruleForm.tile"
                    :textValue="ruleForm.lenghRiver"
                    @saveInputValue="getlenghRiver"
                    class="input-country"
                  />
                </div>
              </div>
              <div>
                <UploadImage :urlimagen="ruleForm.src" @SendImagen="getUrlImagen" />
              </div>
              <el-button type="primary" @click="closeEdit">Cerrar edición</el-button>
            </section>
          </main>
        </el-form>
      </el-row>
      <ul v-if="accepted">
        <li class="item">
          <Card
            v-for="(card, index) in listRivers"
            :key="index"
            :src="card.src"
            :title="card.title"
            :country="card.country"
            :lenghRiver="card.lenghRiver"
            @clickDelete="deleteRiver"
            @clickEdit="editRiver"
          ></Card>
        </li>
      </ul>
    </el-row>

    <!-- <pre> {{$data}}</pre> -->
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import UploadImage from "@/components/UploadImage";
import Input from "@/components/Input.vue";

export default {
  name: "Rios",
  components: {
    Card,
    UploadImage,
    Input
  },
  data() {
    return {
      listRivers: [],
      accepted: false,
      ruleForm: {
        src: "",
        title: "",
        country: "",
        lenghRiver: ""
      },
      showEdit: null,
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
    this.listRivers = this.$store.state.listRivers;
    this.contador = this.listRivers.length;
    // this.ruleForm = this.$store.state.cardForm;
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
    closeEdit() {
      this.showEdit = false;
    },
    // deleteRiver(item) {
    //   debugger;
    //   let datosdelete = this.listRivers.find(e => e.title === item);
    //   this.listRivers.splice(datosdelete, 1);
    //   this.contador = this.listRivers.length;
    // },

    // deleteRiver(item){
    //   debugger
    //   let datosdelete = this.listRivers.find(element => element.title === item);
    //   let deleteIndex = this.listRivers.findIndex(datosdelete);
    //   this.listRivers.splice(deleteIndex,1)
    //  },

    deleteRiver(item) {
      let encontrado = false;
      let contador = 0;
      let posicion = "";
      while (!encontrado && contador < this.listRivers.length) {
        if (this.listRivers[contador].title == item) {
          encontrado = true;
          posicion = contador;
        }
        contador++;
      }
      this.listRivers.splice(posicion, 1);
      this.contador = this.listRivers.length;
    },
    editRiver(item) {
      this.showEdit = true;
      let encontrado = false;
      let contador = 0;
      let posicion = "";
      while (!encontrado && contador < this.listRivers.length) {
        if (this.listRivers[contador].title == item) {
          encontrado = true;
          posicion = contador;
        }
        contador++;
      }
      this.ruleForm = this.listRivers[posicion];
    },

    accept() {
      if (this.accepted == false) {
        this.accepted = true;
      } else {
        this.accepted = false;
      }
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
.main-block {
  line-height: -40px;
  margin-bottom: 2px;
}
.form-edit {
  display: flex;
  border-top: 1px solid #409eff;
  justify-content: space-around;
}
</style>
