!function(a){var b=a.$rootScope,c=b.$scope.fn;rootfn=b.fn,c.CollisionBody=function(){return CollisionBody=function(a){c.Component.call(this);var b=this;if(this.data.colliderType=a.colliderType||"rectangle",void 0===rootfn.colliderTesters[this.data.colliderType])throw new Error('Invalid colliderType "'+this.data.colliderType+'"');this.on("setEntity",function(c){switch(b.entity=c,b.data.bounds={},b.data.bounds.x=(a.x||0)-(c.getComponentData("Renderer","anchor").x||0),b.data.bounds.y=(a.y||0)-(c.getComponentData("Renderer","anchor").y||0),b.data.colliderType){case"rectangle":b.data.bounds.width=void 0===a.width?c.width:a.width,b.data.bounds.height=void 0===a.height?c.height:a.height;break;case"cricle":b.data.bounds.radius=void 0===a.radius?c.width:a.radius;break;default:throw new Error("Unrecognized colliderType")}},!0)},c.Component.extend(CollisionBody),CollisionBody}(),c.components.add("CollisionBody",function(a){return new c.CollisionBody(a)})}($sr=window.$sr=window.$sr||{});
//# sourceMappingURL=../CollisionBody.js.map