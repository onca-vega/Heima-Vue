<template>
  <div :class="{ [$props.overlayclass]: $props.overlayclass }">
    <slot name="header" :name="$props.name">
      <b-navbar toggleable="sm" type="dark">
        <slot name="icon"></slot>
        <b-navbar-toggle target="customCollapse" right></b-navbar-toggle>
        <b-collapse id="customCollapse" is-nav>
          <b-navbar-nav>
            <b-nav-text>{{ $props.name }}</b-nav-text>
          </b-navbar-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-on:click="$emit('logout')" class="__heima__nav-item" right>Cerrar Sesión</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </slot>
  </div>
</template>
<script>
  import bNavbar from "bootstrap-vue/es/components/navbar/navbar";
  import bNavbarToggle from "bootstrap-vue/es/components/navbar/navbar-toggle";
  import bCollapse from "bootstrap-vue/es/components/collapse/collapse";
  import bNavbarNav from "bootstrap-vue/es/components/navbar/navbar-nav";
  import bNavText from "bootstrap-vue/es/components/nav/nav-text";
  import bNavItem from "bootstrap-vue/es/components/nav/nav-item";

  export default {
    name: "heading",
    components: {
      bNavbar,
      bNavbarToggle,
      bCollapse,
      bNavbarNav,
      bNavText,
      bNavItem
    },
    mixins: [],
    directives: {},
    props: {
      overlayclass: String,
      name: String
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
  nav.navbar{
    background-color: #f19217;
  }
  @media (max-width: 576px){
    nav.navbar div.navbar-collapse{
      margin-top: 8px;
    }
  }
  .navbar-text{
    color: #ffffff !important;
  }
  li.__heima__nav-item a.nav-link{
    color: #ffffff;
  }
  li.__heima__nav-item a.nav-link:hover,
  li.__heima__nav-item a.nav-link:active,
  li.__heima__nav-item a.nav-link:focus{
    color: #e6e6e6;
  }
</style>
