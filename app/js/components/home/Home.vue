<template>
  <div class="__heima__total-container">

    <transition name="__heima__modal-fade">
      <loader
      v-show="$store.state.loader.state"
      message="Cargando..."
      overlayclass
      containerclass>
      </loader>
    </transition>

    <transition name="__heima__modal-fade">
      <alert
      v-show="$store.state.alert.state"
      :title="$store.state.alert.description.title"
      :text="$store.state.alert.description.text"
      :buttons="$store.state.alert.buttons"
      overlayclass
      containerclass>
      </alert>
    </transition>

    <heading
    v-on:logout="logout"
    :name="$store.state.profile.name"
    overlayclass>
      <template slot="icon">
        <heading-icon
        v-on:click="setDasboard()"
        overlayclass></heading-icon>
      </template>
    </heading>

    <main-menu
    :menu="menu"
    overlayclass>
      <template slot="icon">
        <heading-icon
        v-on:click="setDashboard()"
        overlayclass></heading-icon>
      </template>
    </main-menu>

    <div
    :class="{ '__heima__no-menu': !menu.view }"
    class="__heima__main-container">
      <b-row>
        <b-col cols="12">
          <main-title
          :title="'Sección <small>' + $route.meta.name + '</small>'"
          overlayclass>
          </main-title>
        </b-col>
        <b-col cols="12">
          <breadcrumb
          :path="$route.meta.breadcrumb"
          overlayclass>
          </breadcrumb>
        </b-col>
      </b-row>
      <b-row class="__heima__top-20">
        <b-col cols="12">
          <transition name="__heima__slide-fade">
            <router-view></router-view>
          </transition>
        </b-col>
      </b-row>
    </div>

    <foot
    :overlayclass="menu.view ? '' : '__heima__no-menu'"
    :text="$store.state.year + '. Powered by onca-vega'"></foot>
  </div>
</template>
<script>
  import bRow from "bootstrap-vue/es/components/layout/row";
  import bCol from "bootstrap-vue/es/components/layout/col";

  import "./../../../css/style-home.css";
  import loader from "./common/Loader.vue";
  import alert from "./common/Alert.vue";
  import heading from "./common/Heading.vue";
  import headingIcon from "./common/HeadingIcon.vue";
  import mainMenu from "./common/MainMenu.vue";
  import mainTitle from "./common/MainTitle.vue";
  import breadcrumb from "./common/Breadcrumb.vue";
  import foot from "./common/Foot.vue";

  export default {
    name: "home",
    components: {
      bRow,
      bCol,

      loader,
      alert,
      heading,
      headingIcon,
      mainMenu,
      mainTitle,
      breadcrumb,
      foot
    },
    mixins: [],
    directives: {},
    props: {},
    data: function(){
      return {
        menu: {
          view: true,
          options:  [
            {
              title: "Inicio",
              name: "dashboard"
            },
            {
              title: "Test",
              name: "test"
            }
          ]
        }
      };
    },
    computed: {},
    watch: {},
    filters: {},
    methods: {
      logout(){
        this.$store.commit("logout", { finish: true });
      },
      setDashboard(){
        this.$router.push({ name: 'dashboard' });
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
  }
</script>
<style scoped>
  .__heima__total-container{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  .__heima__no-menu{
    margin-left: 0px !important;
  }
  div.__heima__main-container{
    background-color: #f9f9f9;
  }
  @media (min-width: 576px){
    div.__heima__main-container{
      margin-left: 190px;
      padding: 30px 25px 30px 25px;
      min-height: calc(100% - 112px);
    }
  }
  @media (max-width: 576px) {
    div.__heima__main-container{
      padding: 15px 15px 30px 15px;
    }
    div.__heima__main-container:not(.__heima__no-menu){
      min-height: calc(100% - 150px);
    }
    div.__heima__main-container.__heima__no-menu{
      min-height: calc(100% - 112px);
    }
  }
  .__heima__modal-overlay{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>
