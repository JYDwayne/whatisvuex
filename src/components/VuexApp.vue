<template>
	<div>
		click times:{{clickNum}}
	</div>
</template>

<script>
export default {

  name: 'VuexApp',

  data() {
    return {

    };
  },
  computed: {
  	clickNum() {
  		// console.log(this.$store.state)
  		return this.$store.state.count
  	}
  }
};
</script>

<style lang="css" scoped>
</style>
