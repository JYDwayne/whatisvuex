<template>
	<div>
		<div>click times:{{countAlias}}</div>
		<button @click="increment({number: 2})">点击了(同步操作):{{countAlias}}</button>
		<button @click="addNumAsync({number: 2})">异步操作,点击了:{{countAlias}}次</button>
		<button @click="getInitList()">点击获取列表</button>
		<div>渲染列表</div>
		<template v-for="(item, index) in infoList">
			<div>{{index}}, {{item.name}}</div>
		</template>
	</div>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'
console.log(mapState)
export default {

  name: 'VuexApp',

  data() {
    return {

    };
  },
  computed: {
  	...mapState({
  		countAlias: 'count',
  		infoList: 'carInfoList'
  	})
  },
  mounted() {
  	this.getInitList()
  },
  methods: {
  	...mapMutations(['increment']),
  	...mapActions({
  		addNumAsync: 'incrementAsync'
  	}),
  	//获取列表数据
  	getInitList() {
  		var self = this
  		this.$axios.get('http://localhost:8888/localapi/api/project/list')
		  .then(function (response) {
		  	let dataForRender = response.data.result.list
		    console.log(response);
		    self.$store.commit({
		    	type: 'saveCarlist',
		    	carInfoList: dataForRender
		    })
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
  	}
  }
};
</script>

<style lang="css" scoped>
</style>
