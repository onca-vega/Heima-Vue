<template>
  <div>
    <transition name="__heima__slide-fade">
      <router-view></router-view>
    </transition>
    <transition name="__heima__modal-fade">
      <message v-show="$store.state.message.state">
      </message>
    </transition>
  </div>
</template>
<script>
  (() => import("bootstrap/dist/css/bootstrap.css"))();
  (() => import("bootstrap-vue/dist/bootstrap-vue.css"))();
  (() => import("babel-polyfill"))();
  (() => import("@fortawesome/fontawesome-free/css/all.min.css"))();

  import "./../css/style.css";
  import "./../css/animations.css";

  import message from "./components/common/message/Message.vue";

  export default {
    name: "app",
    components: {
      message
    },
    mixins: [],
    directives: {},
    props: {},
    data: function(){
      return {};
    },
    computed: {},
    watch: {},
    filters: {},
    methods: {
      getToken(){
        return this.$store.state.neysla.config.token.value;
      }
    },
    beforeCreate: function(){},
    created: function(){
      this.$store.dispatch("autoAuth");
    },
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
<style>
  .__heima__top-100{
    margin-top: 100px;
  }
  .__heima__top-90{
    margin-top: 90px;
  }
  .__heima__top-80{
    margin-top: 80px;
  }
  .__heima__top-70{
    margin-top: 70px;
  }
  .__heima__top-60{
    margin-top: 60px;
  }
  .__heima__top-50{
    margin-top: 50px;
  }
  .__heima__top-40{
    margin-top: 40px;
  }
  .__heima__top-30{
    margin-top: 30px;
  }
  .__heima__top-20{
    margin-top: 20px;
  }

  /* Vue Transitions */
  .__heima__slide-fade-enter-active {
    -webkit-animation: __heima__slide-fade-in 0.5s ease;
    transition: __heima__slide-fade-in 0.5s ease;
  }
  @keyframes __heima__slide-fade-in {
    0% {
      -ms-transform: translate(5%, 0%);
      -webkit-transform: translate(5%, 0%);
      transform: translate(5%, 0%);
      opacity: 0;
    }
    100% {
      -ms-transform: translate(0%, 0%);
      -webkit-transform: translate(0%, 0%);
      transform: translate(0%, 0%);
      opacity: 1;
    }
  }

  .__heima__modal-fade-enter-active {
    -webkit-animation: __heima__modal-fade-in 0.5s ease;
    transition: __heima__modal-fade-in 0.5s ease;
  }
  .__heima__modal-fade-leave-active {
    -webkit-animation: __heima__modal-fade-in 0.5s reverse;
    animation: __heima__modal-fade-in 0.5s reverse;
  }
  @keyframes __heima__modal-fade-in {
    0% {
      -ms-transform: rotate(10deg);
      -webkit-transform: rotate(10deg);
      transform: rotate(10deg);
      opacity: 0;
    }
    100% {
      -ms-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      opacity: 1;
    }
  }
</style>
