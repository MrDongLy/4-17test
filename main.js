require.config({
	paths:{
		"jquery":"jquery"
	}
})
require(["app"],function(mod){
	mod.create();
})
