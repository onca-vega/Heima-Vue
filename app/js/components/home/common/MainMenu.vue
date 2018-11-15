<template>
  <div v-show="$props.menu.view">
    <slot :menu="$props.menu">
      <div
      :class="{ [$props.overlayclass]: $props.overlayclass }"
      class="__heima__sidebar responsive">
        <b-button v-b-toggle.responsiveMenu class="__heima__heading-button" right block>
          <span class="when-opened"><i class="fas fa-angle-up"></i></span>
          <span class="when-closed"><i class="fas fa-angle-down"></i></span>
        </b-button>
        <b-collapse id="responsiveMenu" class="mt-2">
          <b-nav pills vertical>
            <b-nav-item
            v-for="(m, menuIndex) in $props.menu.options"
            :key="m.name"
            :title="m.title"
            exact-active-class="bg-warning"
            :to="{ name: m.name }"
            v-b-toggle.responsiveMenu>{{ m.title }}</b-nav-item>
          </b-nav>
        </b-collapse>
      </div>
      <div class="__heima__sidebar">
        <b-navbar>
          <div class="__heima__nav-header" :style="{ 'opacity': opacity }">
            <slot name="icon"></slot>
          </div>
        </b-navbar>
        <b-nav pills vertical>
          <b-nav-item
          v-for="(m, menuIndex) in $props.menu.options"
          :key="m.name"
          :title="m.title"
          exact-active-class="__heima__menu-link"
          :to="{ name: m.name }">
            {{ m.title }}
            <div class="__heima__active-indicator"></div>
          </b-nav-item>
        </b-nav>
      </div>
    </slot>
  </div>
</template>
<script>
  import bButton from "bootstrap-vue/es/components/button/button";
  import bNav from "bootstrap-vue/es/components/nav/nav";
  import bNavItem from "bootstrap-vue/es/components/nav/nav-item";
  import bNavbar from "bootstrap-vue/es/components/navbar/navbar";
  import bCollapse from "bootstrap-vue/es/components/collapse/collapse";

  import bToggle from 'bootstrap-vue/es/directives/toggle/toggle';

  export default {
    name: "mainMenu",
    components: {
      bButton,
      bCollapse,
      bNav,
      bNavItem,
      bNavbar
    },
    mixins: [],
    directives: {
      bToggle
    },
    props: {
      overlayclass: String,
      menu: Object
    },
    data: function(){
      return {
        opacity: 0
      };
    },
    computed: {},
    watch: {},
    filters: {},
    methods: {
      doOpacity() {
        const scroll = window.scrollY;
        const state = (1 - 0)*(scroll - 25)/(35 - 25);
        let opacity = 0;
        if(state > 1){
          opacity = 1;
        }
        else if(state >= 0){
          opacity = state;
        }
        this.$set(this, "opacity", opacity);
      }
    },
    beforeCreate: function(){},
    created: function(){},
    beforeMount: function(){},
    mounted: function(){
       window.addEventListener('scroll', this.doOpacity);
    },
    beforeUpdate: function(){},
    updated: function(){},
    activated: function(){},
    deactivated: function(){},
    beforeDestroy: function(){},
    destroyed: function(){}
  }
</script>
<style scoped>
  /* Style */
  div.__heima__sidebar{
    background-color: #ffffff;
  }
  div.__heima__sidebar:not(.responsive){
    border: 1px solid #f19217;
    position: fixed;
    top: 56px;
    bottom: 0px;
    width: 190px;
    overflow-y: auto;
  }
  @media (min-width: 576px) {
    div.__heima__sidebar.responsive{
      display: none;
    }
  }
  @media (max-width: 576px){
    div.__heima__sidebar:not(.responsive){
      display: none;
    }
  }
  div.__heima__sidebar button.__heima__heading-button{
    background-color: #ffffff !important;
    color: #98aed7 !important;
    border-color: #98aed7 !important;
  }
  div.__heima__sidebar button.__heima__heading-button:active,
  div.__heima__sidebar button.__heima__heading-button:focus,
  div.__heima__sidebar button.__heima__heading-button:hover{
    background-color: #98aed7 !important;
    color: #ffffff !important;
    border-color: #ffffff !important;
  }
  div.__heima__sidebar div.__heima__nav-header{
    position: fixed;
    top: 8px;
  }
  div.__heima__sidebar .nav-pills a{
    position: relative;
  }
  div.__heima__sidebar .nav-pills a.__heima__active{
    background: none;
  }
  div.__heima__sidebar.responsive a{
    border-radius: 0px;
  }
  div.__heima__sidebar .nav-pills a div.__heima__active-indicator{
    position: absolute;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    right: 0;
    top: 13px;
    opacity: 1;
    border-right: 5px solid #ffffff;
  }
  div.__heima__sidebar .nav-pills a:not(.active) div.__heima__active-indicator{
    opacity: 0;
  }
  div.__heima__sidebar ul li a:not(.active){
    color: #f19217;
  }
  div.__heima__sidebar ul li a:hover,
  div.__heima__sidebar ul li a:active,
  div.__heima__sidebar ul li a:focus,
  div.__heima__sidebar ul li a.active{
    background-color: #f19217;
    color: #ffffff;
  }
  div.__heima__sidebar ul li a:hover,
  div.__heima__sidebar ul li a:active,
  div.__heima__sidebar ul li a:focus{
    background-color: #98aed7;
    color: #ffffff;
  }
  .collapsed > .when-opened,
  :not(.collapsed) > .when-closed {
    display: none;
  }
  /* Transition */
  div.__heima__sidebar .nav-pills a div.__heima__active-indicator{
    transition: opacity 0.5s linear;
    -webkit-transition: opacity 0.5s linear;
    -o-transition: opacity 0.5s linear;
  }
</style>
