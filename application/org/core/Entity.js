/**
 * @license sunriseJS Game Engine
 * @copyright (C) 2014 - 2014 Jonas Gerdes, Jonathan Wiemers
 * http://www.sunrisejs.net
 *
 * sunriseJS is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function($sr){	
	var $rootScope = $sr.$rootScope;
	

	
	$sr.Entity = (function(){ 

		//private Data
	    var components = [];

	    


	    //constructor
	    function Entity(){
	    	if(arguments.length < 4){
	    		throw new Error('Define at least x, y, width and height!');
	    	}
	    	this.x = arguments[0];
	    	this.y = arguments[1];
	    	this.width = arguments[2];
	    	this.height = arguments[3];
	 		for(var i=4; i<arguments.length; i++){
	 			components.push(arguments[i]);
	 			arguments[i].receive('setEntity', this);
	 		}
		} 

		$sr.CoreObject.extend(Entity);


		Entity.prototype.emit = function(what, data){
			components.forEach(function(component){
				component.receive(what, data);
			});
		}	    

	    return Entity;
	})();

	
})($sr = window.$sr = window.$sr || {});