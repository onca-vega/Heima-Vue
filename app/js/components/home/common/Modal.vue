<template>
  <div
  :class="{ [$props.overlayclass]: $props.overlayclass }"
  class="__heima__modal">
    <div
    :class="{ [$props.containerclass]: $props.containerclass }"
    class="__heima__modal-container">
      <slot name="header" :title="$props.title">
        <div class="__heima__modal-title">
          <h3 v-html="$props.title"></h3>
        </div>
      </slot>
      <div class="__heima__modal-body">
        <slot name="body"></slot>
      </div>
      <slot name="buttons" :buttons="buttons">
        <div class="__heima__modal-buttons text-right">
          <b-button
          v-for="(b, i) in $props.buttons"
          :key="b.text"
          v-on:click="interact(i)"
          :class="{ 'outline': !b.action }">
            <span v-html="b.text"></span>
          </b-button>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
  import bButton from "bootstrap-vue/es/components/button/button";

  export default {
    name: "modal",
    components: {
      bButton
    },
    mixins: [],
    directives: {},
    props: {
      overlayclass: String,
      containerclass: String,
      title: String,
      buttons: Array
    },
    data: function(){
      return {
        interact(i){
          if(!this.buttons[i].action){
            this.$emit("cancel");
            return;
          }
          this.buttons[i].action();
        }
      };
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
  div.__heima__modal{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    top: 0;
    left: 0;
    z-index: 10000;
    overflow-y: auto;
  }
  @media(min-width: 767px){
  	div.__heima__modal-container{
  		width: 75%;
  	}
  }

  @media(max-width: 767px){
  	div.__heima__modal-container{
  		width: auto;
  	}
  }
  div.__heima__modal-container{
    background-color: #ffffff;
    border: 1px solid white;
    border-radius: 6px;
    top: 10%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 8px 8px 20px 5px rgba(0, 0, 0, 0.6);
  }
  div.__heima__modal-title{
    background-color: #98aed7;
    color: #ffffff;
    border-radius: 5px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
  div.__heima__modal-title h3{
    padding: 18px 25px;
  }
  div.__heima__modal div.__heima__modal-body{
    margin: 40px 20px;
  }
  div.__heima__modal-buttons{
    padding: 0px 15px 15px 0px;
  }
  div.__heima__modal-buttons button:not(.outline){
    background-color: #98aed7;
    color: #ffffff;
    border-color: #ffffff;
  }
  div.__heima__modal-buttons button:not(.outline):hover,
  div.__heima__modal-buttons button:not(.outline):focus,
  div.__heima__modal-buttons button:not(.outline):active{
    background-color: #98aed7;
    color: #e6e6e6;
    border-color: #e6e6e6;
  }
  div.__heima__modal-buttons button.outline{
    background-color: #ffffff;
    color: #98aed7;
    border-color: #98aed7;
  }
  div.__heima__modal-buttons button.outline:hover,
  div.__heima__modal-buttons button.outline:focus,
  div.__heima__modal-buttons button.outline:active{
    background-color: #e6e6e6;
    color: #98aed7;
    border-color: #98aed7;
  }
</style>
