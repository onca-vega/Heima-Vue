<template>
  <div
  :class="{ [$props.overlayclass]: $props.overlayclass }"
  class="__heima__modal-overlay __heima__alert">
    <div
    :class="{ [$props.containerclass]: $props.containerclass }"
    class="__heima__alert-container">
      <slot name="header" :title="$props.title">
        <div class="__heima__alert-title">
          <h3 v-html="title"></h3>
        </div>
      </slot>
      <slot name="body" :text="$props.text">
        <p class="__heima__alert-paragraph" v-html="$props.text"></p>
      </slot>
      <slot name="buttons" :buttons="$props.buttons">
        <div class="__heima__alert-buttons text-right">
          <b-button
          v-for="(b, i) in $props.buttons"
          :key="b.text"
          v-on:click="$store.commit('accept', i)"
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
    name: "alert",
    components: {
      bButton
    },
    mixins: [],
    directives: {},
    props: {
      overlayclass: String,
      containerclass: String,
      title: String,
      text: String,
      buttons: Array
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
  div.__heima__alert{
    z-index: 10010;
  }
  @media(min-width: 767px){
  	div.__heima__alert-container{
  		width: 350px;
  	}
  }

  @media(max-width: 767px){
  	div.__heima__alert-container{
  		width: auto;
  	}
  }
  div.__heima__alert-container{
    background-color: #ffffff;
    border: 1px solid white;
    border-radius: 6px;
    top: 10%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 8px 8px 20px 5px rgba(0, 0, 0, 0.6);
  }

  div.__heima__alert-title{
    background-color: #98aed7;
    color: #ffffff;
    border-radius: 5px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }

  div.__heima__alert-title h3,
  p.__heima__alert-paragraph{
    padding: 18px 25px;
  }

  p.__heima__alert-paragraph{
  	background-color: #e6e6e6;
    color: #454545;
    border-radius: 5px;
  	word-wrap: break-word;
  }

  div.__heima__alert-buttons{
    padding: 0px 15px 15px 0px;
  }
  div.__heima__alert-buttons button:not(.outline){
    background-color: #98aed7;
    color: #ffffff;
    border-color: #ffffff;
  }
  div.__heima__alert-buttons button:not(.outline):hover,
  div.__heima__alert-buttons button:not(.outline):focus,
  div.__heima__alert-buttons button:not(.outline):active{
    background-color: #98aed7;
    color: #e6e6e6;
    border-color: #e6e6e6;
  }
  div.__heima__alert-buttons button.outline{
    background-color: #ffffff;
    color: #98aed7;
    border-color: #98aed7;
  }
  div.__heima__alert-buttons button.outline:hover,
  div.__heima__alert-buttons button.outline:focus,
  div.__heima__alert-buttons button.outline:active{
    background-color: #e6e6e6;
    color: #98aed7;
    border-color: #98aed7;
  }
</style>
