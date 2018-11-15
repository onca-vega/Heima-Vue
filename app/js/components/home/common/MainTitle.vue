<template>
  <div :class="{ [$props.overlayclass]: $props.overlayclass }">
    <slot :title="title">
      <h1
      class="__heima__title" v-html="title"></h1>
      <hr>
    </slot>
  </div>
</template>
<script>
  export default {
    name: "mainTitle",
    components: {},
    mixins: [],
    directives: {},
    props: {
      overlayclass: String,
      title: String
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
  h1.__heima__title{
    color: #454545;
  }
</style>
