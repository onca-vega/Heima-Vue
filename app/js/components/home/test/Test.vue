<template>
  <b-row>
    <b-col sm="12">
      <b-input-group prepend="Valor">
        <b-form-input v-model="value" type="number"></b-form-input>
        <b-input-group-append>
          <b-button variant="info">Valor al cuadrado: {{ square }}</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row>
</template>
<script>
  import bRow from "bootstrap-vue/es/components/layout/row";
  import bCol from "bootstrap-vue/es/components/layout/col";
  import bFormInput from "bootstrap-vue/es/components/form-input/form-input";
  import bInputGroup from "bootstrap-vue/es/components/input-group/input-group";
  import bInputGroupAppend from "bootstrap-vue/es/components/input-group/input-group-append";
  import bButton from "bootstrap-vue/es/components/button/button";

  export default {
    name: "test",
    components: {
      bRow,
      bCol,
      bFormInput,
      bInputGroup,
      bInputGroupAppend,
      bButton
    },
    mixins: [],
    directives: {},
    props: {},
    data: function(){
      return {
        value: 0
      };
    },
    computed: {
      square: function(){
        return this.value * this.value;
      }
    },
    watch: {},
    filters: {},
    methods: {},
    beforeCreate: function(){},
    created: function(){},
    beforeMount: function(){},
    mounted: function(){},
    beforeUpdate: function(){},
    updated: function(){},
    activated: function(){},
    deactivated: function(){},
    beforeDestroy: function(){},
    destroyed: function(){}
  }
</script>
<style></style>
