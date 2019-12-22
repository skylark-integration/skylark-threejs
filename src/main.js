define([
    "./three"
], function(langx,webgl,threejs) {
    langx.mixin(webgl,threejs);

    return skylark.attach("intg.threejs",threejs);
});
