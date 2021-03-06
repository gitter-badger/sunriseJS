/**
 * @license sunriseJS Game Engine
 * @copyright (C) 2014 - 2014 Jonas Gerdes, Jonathan Wiemers
 * http://www.sunrisejs.net
 *
 * sunriseJS is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

/*
 * ComponentDescription
 * Jump'n'Run Controller
 * Manage key inputs for a Jump'n'Run Character
 *
 * emits:
 *
 * receives:
 * tick
 *
*/


(function($sr){	
	var $rootScope = $sr.$rootScope,
		srfn = $rootScope.$scope.fn;
	
	srfn.SimpleInventory = (function(){ 

		SimpleInventory = function(config_){
			srfn.Component.call(this);
			this.config = config_;
		}

		srfn.Component.extend(SimpleInventory);

		SimpleInventory.prototype.init = function(){
			var self = this;
			var config = this.config || {};
			config.keys = config.keys || {};

			this.data['inventory'] = [];

			this.on('addToInventory', function(data){
				self.addItem(data);
			});

			this.on('useItem', function(){
				if(self.data['inventory'].length > 0){
                    console.log(self.data);
					var functionName = self.data['inventory'][0].use,
						useFunction = game[functionName]; 
					if(typeof useFunction !== "function"){
						throw new Error("Can't use item! "+functionName+" is not a function!");
					}
					game[functionName]($rootScope.$scope);
				}
			});

			SimpleInventory.prototype.addItem = function(item){
                console.log("Add to Inventory: ",item);
				this.data.inventory.push(item);
				console.log("After adding");
				return this.data.inventory;
			};

			SimpleInventory.prototype.getInventory = function(){
				return this.data.inventory;
			};
		}

		return SimpleInventory

	})();


	srfn.components.add('SimpleInventory', function(config){
		return new srfn.SimpleInventory(config);
	});

	
})($sr = window.$sr = window.$sr || {});