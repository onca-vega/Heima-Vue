<template>
  <div
  :class="{ [$props.overlayclass]: $props.overlayclass }"
  class="__heima__modal-overlay __heima__loader">
    <slot :message="$props.message">
      <b-container>
        <b-row>
          <b-col md="4"></b-col>
          <b-col
          :class="{ [$props.containerclass]: $props.containerclass }"
          class="__heima__loader-container">
            <div class="text-center">
              <i class="fa fa-spinner __heima__spin-icon" aria-hidden="true"></i>
              <p class="__heima__spin-p">{{ $props.message }}</p>
            </div>
          </b-col>
          <b-col md="4"></b-col>
        </b-row>
      </b-container>
    </slot>
  </div>
</template>
<script>
  import bContainer from "bootstrap-vue/es/components/layout/container";
  import bRow from "bootstrap-vue/es/components/layout/row";
  import bCol from "bootstrap-vue/es/components/layout/col";

  export default {
    name: "loader",
    components: {
      bContainer,
      bRow,
      bCol
    },
    mixins: [],
    directives: {},
    props: {
      message: String,
      overlayclass: String,
      containerclass: String
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
  /* Style */
  div.__heima__loader{
    padding-top: 85px;
    z-index: 10020;
  }
  .__heima__loader-container div{
    position: relative;
    padding: 20px;
    padding-bottom: 10px;
    width: 125px;
    height: 125px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10%;
    border: 5px outset #98aed7;
    border-radius: 40%;
    background-color: white;
    box-shadow: 8px 8px 20px 5px rgba(0, 0, 0, 0.6);
  }
  .__heima__loader-container div i.__heima__spin-icon{
    position: absolute;
    left: 38px;
    font-size: 40px;
    color: #98aed7;
  }
  .__heima__loader-container div p.__heima__spin-p{
    position: absolute;
    left: 25px;
    color: #98aed7;
  }
  /* Animations */
  @keyframes __heima__loader-pos-1{
    0% {
      top: 65px;
      -ms-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    25% {
      top: 45px;
      -ms-transform: scale(0.5);
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    50% {
      top: 20px;
      -ms-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
    75% {
      top: 45px;
      -ms-transform: scale(0.5);
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      top: 65px;
      -ms-transform: scale(1.2);
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }
  }
  @keyframes __heima__loader-pos-2{
    0% {
      top: 20px;
      -ms-transform: scale(0.5) rotate(0deg);
      -webkit-transform: scale(0.5) rotate(0deg);
      transform: scale(0.5) rotate(0deg);
    }
    25% {
      top: 40px;
      -ms-transform: scale(0.95) rotate(180deg);
      -webkit-transform: scale(0.95) rotate(180deg);
      transform: scale(0.95) rotate(180deg);
    }
    50% {
      top: 55px;
      -ms-transform: scale(0.5) rotate(360deg);
      -webkit-transform: scale(0.5) rotate(360deg);
      transform: scale(0.5) rotate(360deg);
    }
    75% {
      top: 40px;
      -ms-transform: scale(0.95) rotate(540deg);
      -webkit-transform: scale(0.95) rotate(540deg);
      transform: scale(0.95) rotate(540deg);
    }
    100% {
      top: 20px;
      -ms-transform: scale(0.5) rotate(720deg);
      -webkit-transform: scale(0.5) rotate(720deg);
      transform: scale(0.5) rotate(720deg);
    }
  }
  div.__heima__loader div p.__heima__spin-p{
    -webkit-animation: __heima__loader-pos-1 2s infinite ease;
    animation: __heima__loader-pos-1 2s infinite ease;
  }
  div.__heima__loader div i.__heima__spin-icon{
    -webkit-animation: __heima__loader-pos-2 2s infinite linear;
    animation: __heima__loader-pos-2 2s infinite linear;
  }
</style>
