!function(a){var b=a.$rootScope,c=b.$scope.fn;utilfn=b.$scope.util,c.Physics=function(){return Physics=function(a){c.Component.call(this),this.config=a},c.Component.extend(Physics),Physics.prototype.init=function(){var a=this,b=this.config,c=this.data.speed=new utilfn.Vec2(0,0),d={},e=1/30,f=void 0===b.mass?1:b.mass,g=this.data.imass=0===f?0:1/f;inertia=void 0===b.inertia?.99:b.inertia,restitution=this.data.restitution=1e-4,b.forces=b.forces||[];for(key in b.forces)d[key]=new utilfn.Vec2(b.forces[key].x,b.forces[key].y);this.on("tick",function(b){for(key in d)c.add(utilfn.Vec2.multiply(utilfn.Vec2.divide(d[key],f),b.delta*e));c.multiply(inertia),a.entity.x+=c.x*b.delta*e,a.entity.y+=c.y*b.delta*e}),this.on("setForce",function(a){d[a.name]=new utilfn.Vec2(a.x,a.y)}),this.on("collision",function(b){if(void 0!==b.other.components.Physics){var d=b.other.getComponentData("Physics","speed"),e=b.other.getComponentData("Physics","restitution"),f=b.other.getComponentData("Physics","imass"),h=new utilfn.Vec2(b.collision.normal.x,b.collision.normal.y);if(d&&e&&f){var i=utilfn.Vec2.sub(d,c),j=utilfn.Vec2.dot(i,h);if(!(j>0)){var k=Math.min(restitution,e),l=-(1+k)*j/(g+f),m=utilfn.Vec2.multiply(h,l);if(c.sub(utilfn.Vec2.multiply(m,g)),d.add(utilfn.Vec2.multiply(m,f)),b.collision.penetration>1){var n=b.collision.penetration/(g+f);n*=.8,a.entity.x-=g*n*h.x,a.entity.y-=g*n*h.y,b.other.x+=f*n*h.x,b.other.y+=f*n*h.y}}}}})},Physics}(),c.components.add("Physics",function(a){return new c.Physics(a)})}($sr=window.$sr=window.$sr||{});
//# sourceMappingURL=../Physics.js.map