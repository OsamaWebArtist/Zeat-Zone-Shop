<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="home">

    <homeBody />
  </div>
</template>
<script>

// @ is an alias to /src
/*eslint-disable*/
import homeBody from '../components/website head body footer/home/homeBody.vue';

export default {
  name: 'home',

  data() {
    return {

    }
  },

  components: {
    'homeBody': homeBody,
  },
  created() {

  },
  methods: {

  }
};
</script>
<style lang="scss"></style>