<template>
	<div>在showVuex组件中显示点击数量:{{count}}</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'showVuex',

  data() {
    return {

    };
  },

  computed: {
  	...mapState(['count'])
  }
};
</script>

<style lang="css" scoped>
</style>
