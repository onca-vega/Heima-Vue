<template>
  <div
  :class="{ [$props.overlayclass]: $props.overlayclass }"
  class="__heima__nav-icon">
    <slot>
      <b-navbar-brand v-on:click="$emit('click')">
        <img src="./../../../../image/icon/header.png" class="img-fluid" alt="Enemon">
      </b-navbar-brand>
    </slot>
  </div>
</template>
<script>
  import bNavbarBrand from "bootstrap-vue/es/components/navbar/navbar-brand";

  export default {
    name: "headingIcon",
    components: {
      bNavbarBrand
    },
    mixins: [],
    directives: {},
    props: {
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
  div.__heima__nav-icon{
    background-color: #ffffff;
    height: 56px;
    margin: -8px 8px -8px -16px;
  }
  @media (min-width: 576px) {
    div.__heima__nav-icon{
      width: 190px;
    }
  }
  @media (max-width: 575px){
    div.__heima__nav-icon{
      width: 180px;
    }
  }
  div.__heima__nav-icon div.navbar-brand{
    text-align: center;
    padding: 2px 0px;
    height: 56px;
    width: 100%;
  }
  div.__heima__nav-icon div.navbar-brand img{
    height: 50px;
  }
</style>
