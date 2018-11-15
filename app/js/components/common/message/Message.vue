<template>
  <div
  class="__heima__message-container"
  :class="{
    'info': $store.state.message.status,
    'danger': !$store.state.message.status
  }">
    <b-row>
      <b-col cols="12" class="text-center">
        <span><small>{{ $store.state.message.text }}</small></span>
      </b-col>
    </b-row>
  </div>
</template>
<script>
  import bCol from "bootstrap-vue/es/components/layout/col";
  import bRow from "bootstrap-vue/es/components/layout/row";

  export default {
    name: "loader",
    components: {
      bCol,
      bRow
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
      show(status){
        const o = {
          name: "message",
          status,
          text: status ? "Ahora tienes conexión" : "Estás sin conexión"
        }
        this.$store.commit("open", o);
        setTimeout(() => this.$store.commit("close", { name: "message" }), 3000);
      }
    },
    beforeCreate: function(){},
    created: function(){},
    beforeMount: function(){},
    mounted: function(){
      if(navigator){
        this.show(navigator.onLine);
      }
      window.addEventListener('online',  () => this.show(true));
      window.addEventListener('offline', () => this.show(false));
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
  div.__heima__message-container{
    position: fixed;
    z-index: 10030;
    height: 50px;
    border-radius: 6px;
  }
  @media(min-width: 576px){
    div.__heima__message-container{
      width: 400px;
      bottom: 40px;
      right: 10px;
    }
  }
  @media(max-width: 575px){
    div.__heima__message-container{
      width: 100%;
      bottom: 0;
      right: 0;
    }
  }
  div.__heima__message-container div.row{
    height: 100%;
  }
  div.__heima__message-container div.row div.col-12{
    margin-top: auto;
    margin-bottom: auto;
  }
  div.__heima__message-container{
    background-color: #ffc107;
    box-shadow: 8px 8px 20px 5px rgba(0, 0, 0, 0.6);
    border: 1px solid #212529;
  }
  div.__heima__message-container span{
    color: #212529;
  }
  div.__heima__message-container.danger{
    background-color: #dc3545;
    border: 1px solid #ffffff;
  }
  div.__heima__message-container.danger span{
    color: #ffffff;
  }
  div.__heima__message-container.info{
    background-color: #75ad74;
    border: 1px solid #ffffff;
  }
  div.__heima__message-container.info span{
    color: #ffffff;
  }
</style>
