
<template>
  <div class="home">
  <a>Nombre: </a>

    <input v-model="nom" data-test-id="number-to-calculate-fibonacci ">

    <br><a>Descripcion: </a>
    <input v-model="desc" data-test-id="number-to-calculate-fibonacci">
    <br><a>Tasa de interes:</a>
    <input v-model="inter" data-test-id="number-to-calculate-fibonacci">
    <br><a>Cantidad inicial:</a>
    <input v-model="cantini" data-test-id="number-to-calculate-fibonacci">
    <br><a>Duracion: </a>
     <input v-model="duracion" data-test-id="number-to-calculate-fibonacci">
     <br><a>Fecha de inicio: </a>
     <input type="date" id="start" name="trip-start"
min="2018-01-01" max="2018-12-31" v-model="fecha" data-test-id="number-to-calculate-fibonacci">
    <p>El resultado es: <span data-test-id="result">{{ result }}</span></p>
    <button data-test-id="calculate-button" @click="addInvestment">Calcular</button>
  </div>
</template>

<script>
import axios from 'axios';
import { Investment } from './Investment';
export default {
  name: 'Home',

  data() {

    return {
     nom:"",
      desc:"",
      inter: 0,
      cantini:0,
      duracion:0,
      fecha: '2021-01-02',
      number: 0,
      result: null,

    };
  },
  methods: {
    addInvestment() {
      axios.post('http://localhost:3000/add-investment', {
        name: this.nom,
        description: this.desc,
        interest: this.inter,
        startingAmount: this.cantini,
        duration: this.duracion,
        startDate: this.fecha,
            }).then((result) => {
              this.result = result.data.finalAmount;
      });
   
    },
  },

};

</script>
