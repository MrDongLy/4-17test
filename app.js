define(["jquery"],function($){
	function createApp(){
		console.log("createApp")
		$("#box").css("background","red")
	}
	return {
		create:createApp
	}
})