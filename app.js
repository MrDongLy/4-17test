define(["jquery"],function($){
	function createApp(){
		console.log("createApp")
		$("#box").css("background","red")
	}
	function build(){
		console.log("build")
	}
	return {
		create:createApp,
		build:build
	}
})