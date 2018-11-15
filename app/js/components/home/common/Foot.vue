<template>
  <footer
  :class="{ [$props.overlayclass]: $props.overlayclass }"
  class="__heima__footer">
    <slot :text="$props.text">
      <b-row>
        <b-col cols="12" class="text-center">
          <b-badge pill class="__heima__footer-text" v-html="$props.text"></b-badge>
        </b-col>
      </b-row>
    </slot>
  </footer>
</template>
<script>
  import bRow from "bootstrap-vue/es/components/layout/row";
  import bCol from "bootstrap-vue/es/components/layout/col";
  import bBadge from "bootstrap-vue/es/components/badge/badge";

  export default {
    name: "foot",
    components: {
      bRow,
      bCol,
      bBadge
    },
    mixins: [],
    directives: {},
    props: {
      text: String,
      overlayclass: String
    },
    data: function(){
      return {};
    },
    computed: {},
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
<style scoped>
  @media (min-width: 576px) {
    .__heima__footer{
      margin-left: 190px;
    }
  }
  @media (max-width: 575px) {
    .__heima__footer{
      margin-left: 0px;
    }
  }
  .__heima__footer{
    height: 56px;
    background-color: #f19217;
    padding: 0px 15px 0px 15px;
  }
  .__heima__footer div.row{
    padding-top: 15px;
  }
  .__heima__footer span{
    color: #692c00;
    background-color: #ffffff;
  }
</style>
