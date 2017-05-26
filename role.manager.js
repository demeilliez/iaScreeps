//Include role
var roleHarvester = require('role.harvester');
var roleUpgrader  = require('role.upgrader');
var roleBuilder   = require('role.builder');

var moduleManager = {
	run : function(){

		Memory.nbCreeps   = 0;
		var needHarvester = 0;
		var needUpgrader  = 0;
        
	    //we must define the number of creeps we need to upgrade or harvest





	    /*for(var name in Game.creeps) {
	    	Memory.nbCreeps   = Memory.nbCreeps +1;
	        var creep = Game.creeps[name];
	        if(creep.memory.role == 'harvester') {
	            roleHarvester.run(creep);
	        }else if(creep.memory.role == 'upgrader') {
	            roleUpgrader.run(creep);
	        }
	    }*/
	}
}

module.exports = moduleManager;