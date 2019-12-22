define([
	"skylark-langx/skylark",
    "./three"
], function(skylark,threejs) {
    return skylark.attach("intg.threejs",threejs);
});
