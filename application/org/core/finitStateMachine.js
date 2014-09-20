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
	
	$sr.StateMachine = (function(){ 
	    this.states = {};
	    this.currentState = 'default';

	    /**
	     * construktor
	     * @param {[type]} states min 1 = default
	     */
	    function StateMachine(states){
	    	this.states = states;	
	    };

	    StateMachine.getCurrentState = function(){
	    	return this.states[this.currentState];
	    };

		StateMachine.setCurrentState = function(name){
	    	return this.currentState = name;
	    };

		StateMachine.addStates = function(){
	    	for(var i = 0; i < arguments.length; ++i){
	    		console.log(arguments[i].name);
	    		if(this.states[arguments[i].name] != undefined){
	    			console.info('State: '+arguments[i].name+' overwrites a previously defined state!');
	    		}
	    		this.states[arguments[i].name] = arguments[i];
	    	}
	    };



	    return StateMachine;
	})();


})($sr = window.$sr = window.$sr || {});

