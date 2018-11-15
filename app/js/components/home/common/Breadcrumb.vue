<template>
  <div :class="{ [$props.overlayclass]: $props.overlayclass }">
    <slot :path="$props.path">
      <b-breadcrumb v-show="$props.path.length" class="__heima__breadcrumb">
        <b-breadcrumb-item v-for="p in $props.path" :key="p.name" :to="{ name: p.name }">{{ p.label }}</b-breadcrumb-item>
      </b-breadcrumb>
    </slot>
  </div>
</template>
<script>
  import bBreadcrumb from "bootstrap-vue/es/components/breadcrumb/breadcrumb";
  import bBreadcrumbItem from "bootstrap-vue/es/components/breadcrumb/breadcrumb-item";

  export default {
    name: "breadcrumb",
    components: {
      bBreadcrumb,
      bBreadcrumbItem
    },
    mixins: [],
    directives: {},
    props: {
      overlayclass: String,
      path: Array
    },
    data: function(){
      return {};
    },
    computed: {},
    watch: {},
    filters: {},
    methods: {},
    beforeCreate: function(){},
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
  @media (max-width: 576px){
    .__heima__breadcrumb{
      display: none;
    }
  }
  .__heima__breadcrumb{
    background-color: #ffffff;
    border: 1px solid #98aed7;
  }
  .__heima__breadcrumb .breadcrumb-item a{
    color: #454545;
  }
  .__heima__breadcrumb .breadcrumb-item a:hover,
  .__heima__breadcrumb .breadcrumb-item a:active,
  .__heima__breadcrumb .breadcrumb-item a:focus{
    text-decoration: none;
  }
</style>
