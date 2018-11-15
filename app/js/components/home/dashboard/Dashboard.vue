<template>
  <b-row>
    <b-col sm="2" class="text-center">
      <b-badge pill variant="dark">{{ time }}</b-badge>
    </b-col>
    <b-col sm="10" class="text-center">
      <b-button
      v-on:click="open({name: 'loader'})"
      variant="info">Abrir cargador</b-button>
      <b-button
      v-on:click="confirm()"
      variant="warning">Abrir confirmación</b-button>
      <b-button
      v-on:click="alert()"
      variant="danger">Abrir alerta</b-button>
      <b-button
      v-on:click="open({name: 'message', status: false, text: 'Mensaje de prueba'})"
      variant="info">Abrir mensaje negativo</b-button>
      <b-button
      v-on:click="open({name: 'message', status: true, text: 'Mensaje de prueba'})"
      variant="warning">Abrir mensaje positivo</b-button>
      <b-button
      v-on:click="state = true"
      variant="danger">Abrir modal</b-button>
    </b-col>
    <transition name="__heima__modal-fade">
      <modal
      v-show="state"
      v-on:cancel="state = false"
      :buttons="[
        { text: 'Aceptar', action: accept },
        { text: 'Cancelar' }
      ]"
      title="Título del modal">
        <template slot="body">
          <b-row>
            <b-col sm="12" class="text-left">
              <label for="username">Usuario:</label>
              <b-form-input
              class="__heima__login-input"
              id="username"
              ref="username"
              maxlength="64">
              </b-form-input>
            </b-col>
            <b-col sm="12" class="text-left">
              <label for="password">Contraseña:</label>
              <b-form-input
              class="__heima__login-input"
              id="password"
              ref="password"
              type="password"
              maxlength="64">
              </b-form-input>
            </b-col>
          </b-row>
        </template>
      </modal>
    </transition>
  </b-row>
</template>
<script>
  import bRow from "bootstrap-vue/es/components/layout/row";
  import bCol from "bootstrap-vue/es/components/layout/col";
  import bBadge from "bootstrap-vue/es/components/badge/badge";
  import bButton from "bootstrap-vue/es/components/button/button";
  import bFormInput from "bootstrap-vue/es/components/form-input/form-input";

  import modal from "./../common/Modal.vue";

  export default {
    name: "dashboard",
    components: {
      bRow,
      bCol,
      bBadge,
      bButton,
      bFormInput,

      modal
    },
    mixins: [],
    directives: {},
    props: {},
    data: function(){
      return {
        time: 0,
        interval: null,
        state: false
      };
    },
    computed: {},
    watch: {},
    filters: {},
    methods: {
      open(o){
        this.$store.commit("open", o);
        if(o.name === "loader" || o.name === "message"){
          setTimeout(() => this.$store.commit("close", o), 1500);
        }
      },
      confirm(){
        this.$store.commit("open", {
          name: "alert",
          title: "Título de Confirmación",
          text: "Texto de confirmación",
          buttons: [
            {
              text: "Aceptar",
              action: () => console.log("Aceptamos")
            },
            {
              text: "Imprimir",
              action: () => console.log("Imprimimos")
            },
            { text: "Cancelar" }
          ]
        });
      },
      alert(){
        this.$store.commit("open", {
          name: "alert",
          title: "Título de Alerta",
          text: "Texto de Alerta",
          buttons: [ { text: "Aceptar" } ]
        });
      },
      accept(){
        console.log("Aceptamos por modal");
      }
    },
    beforeCreate: function(){},
    created: function(){
        this.interval = setInterval(() => ++this.time, 1000);
    },
    beforeMount: function(){},
    mounted: function(){},
    beforeUpdate: function(){},
    updated: function(){},
    activated: function(){},
    deactivated: function(){},
    beforeDestroy: function(){
      clearInterval(this.interval);
    },
    destroyed: function(){}
  }
</script>
<style></style>
