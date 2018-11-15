<template>
  <div
  class="__heima__background-container"
  :class="{ [$props.overlayclass]: $props.overlayclass }">
    <slot>
      <b-container>
        <b-row>
          <b-col sm="12" class="text-center">
            <div class="__heima__login-container">
              <b-container>
                <b-row>
                  <b-col sm="12" class="__heima__top-30">
                    <div class="__heima__login-header">
                      <h2>Heima for Vue</h2>
                      <h3><small>Ingresa tus datos para continuar</small></h3>
                    </div>
                  </b-col>
                  <b-col sm="12">
                    <div class="__heima__login-body">
                      <b-row>
                        <b-col sm="12" class="__heima__top-20 text-left">
                          <label
                          :class="{'__heima__wrong': errormessage !== '' && valid !== 1}"
                          for="username">Usuario:</label>
                          <b-form-input
                          v-on:keydown.native.space.prevent
                          v-on:keydown.native.enter="validate()"
                          v-model="username"
                          :class="{'__heima__wrong': errormessage !== '' && valid !== 1}"
                          class="__heima__login-input"
                          id="username"
                          ref="username"
                          maxlength="64">
                          </b-form-input>
                        </b-col>
                        <b-col sm="12" class="__heima__top-20 text-left">
                          <label
                          :class="{'__heima__wrong': errormessage !== '' && valid !== 0}"
                          for="password">Contraseña:</label>
                          <b-form-input
                          v-on:keydown.native.space.prevent
                          v-on:keydown.native.enter="validate()"
                          v-model="password"
                          :class="{'__heima__wrong': errormessage !== '' && valid !== 0}"
                          class="__heima__login-input"
                          id="password"
                          ref="password"
                          type="password"
                          maxlength="64">
                          </b-form-input>
                        </b-col>
                      </b-row>
                      <div :class="{'active': errormessage !== ''}" class="__heima__error __heima__top-20">
                        <p>{{ errormessage }}</p>
                      </div>
                    </div>
                  </b-col>
                  <b-col sm="12">
                    <div class="__heima__login-footer">
                      <b-button v-on:click="validate()" :disabled="loading" size="lg" class="__heima__login-button" block>
                        <span v-show="loading"><i class="fa fa-spin fa-spinner"></i></span>
                        Iniciar sesión
                      </b-button>
                      <b-button :disabled="loading" size="sm" class="__heima__recover-button float-right">
                        ¿Olvidaste tu contraseña?
                      </b-button>
                    </div>
                  </b-col>
                </b-row>
              </b-container>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </slot>
  </div>
</template>
<script>
  import bContainer from "bootstrap-vue/es/components/layout/container";
  import bRow from "bootstrap-vue/es/components/layout/row";
  import bCol from "bootstrap-vue/es/components/layout/col";
  import bFormInput from "bootstrap-vue/es/components/form-input/form-input";
  import bButton from "bootstrap-vue/es/components/button/button";

  export default {
    components: {
      bContainer,
      bRow,
      bCol,
      bFormInput,
      bButton
    },
    mixins: [],
    directives: {},
    props: {
      overlayclass: String,
      loading: Boolean,

      errormessage: String,
      valid: Number
    },
    data: function(){
      return {
        username: null,
        password: null
      };
    },
    computed: {},
    watch: {
      username: function(){
        this.press();
      },
      password: function(){
        this.press();
      }
    },
    filters: {},
    methods: {
      press(){
        this.$emit("update", {
          username: this.username,
          password: this.password
        });
      },
      validate(){
        this.$emit("validate");
      },
      setAuth(){
        this.$emit("setAuth");
      }
    },
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
  };
</script>
<style scoped>
  @media (min-height: 540px) {
    div.__heima__background-container{
      position: fixed;
    }
  }
  div.__heima__background-container{
    width: 100%;
    height: 100%;
    background: url(./../../../../../image/background.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  div.__heima__login-container{
    margin-top: 5%;
    min-height: 450px;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 20px;
    border-top-left-radius: 15px;
    background-color: rgba(255, 255, 255, 0.65);
    box-shadow: 10px 10px 5px 5px rgba(0, 0, 0, 0.6);
    border-bottom-right-radius: 15px;
  }

  div.__heima__login-container div.__heima__login-header{
    background: linear-gradient(rgba(255, 255, 255, 0), #f19217, rgba(255, 255, 255, 0));
    padding-bottom: 5px;
    margin-left: -15px;
    margin-right: -15px;
    color: #d8d8d8;
    text-shadow: 3px 3px 5px #2f2f2f;
  }

  div.__heima__login-container div.__heima__login-body input.__heima__login-input{
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-left: 6px solid #692c00;
  }
  div.__heima__login-container div.__heima__login-body input.__heima__login-input.__heima__wrong{
    border-left: 6px solid #bf0811;
    border-bottom: 2px solid #bf0811;
  }
  div.__heima__login-container div.__heima__login-body label{
    color: #692c00;
    text-shadow: 3px 3px 5px rgba(255, 255, 255, 0.6);
    font-weight: bold;
  }
  div.__heima__login-container div.__heima__login-body label.__heima__wrong{
    color: #bf0811;
  }
  div.__heima__login-container div.__heima__login-body div.__heima__error{
    color: #bf0811;
    text-shadow: 1px 1px 2px #000000;
    opacity: 0;
    -webkit-animation: opacity 0.5s ease;
    transition: opacity 0.5s ease;
  }
  div.__heima__login-container div.__heima__login-body div.__heima__error.active{
    opacity: 1;
  }

  div.__heima__login-container div.__heima__login-footer button{
    text-shadow: 1px 1px 2px #000000;
  }
  div.__heima__login-container div.__heima__login-footer button.__heima__login-button{
    background-color: #f19217;
    border-color: #ffffff;
    color: #ffffff;
  }
  div.__heima__login-container div.__heima__login-footer button.__heima__login-button:active,
  div.__heima__login-container div.__heima__login-footer button.__heima__login-button:focus,
  div.__heima__login-container div.__heima__login-footer button.__heima__login-button:hover{
    border-color: #e6e6e6;
    color: #e6e6e6;
  }
  div.__heima__login-container div.__heima__login-footer button.__heima__recover-button{
    margin-top: 20px;
    background-color: rgba(0, 0, 0, 0);
    border-color: #f19217;
    border-width: 0px 0px 1px 0px;
  }
  div.__heima__login-container div.__heima__login-footer button.__heima__recover-button:hover,
  div.__heima__login-container div.__heima__login-footer button.__heima__recover-button:active,
  div.__heima__login-container div.__heima__login-footer button.__heima__recover-button:focus{
    background-color: rgba(255, 193, 7, 0);
    color: #f19217;
    box-shadow: none;
  }
</style>
