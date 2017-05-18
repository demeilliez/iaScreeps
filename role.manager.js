//Include role
var roleHarvester = require('role.harvester');
var roleUpgrader  = require('role.upgrader');
var roleBuilder   = require('role.builder');

var moduleManager = {
	run : function(){
		//define nbCreeps at 0
		Memory.nbCreepsHarvester   = 0;
	    Memory.nbCreepsUpgrader    = 0;
	    Memory.nbCreepsBuilder     = 0;
        
	    //we gave a role for our creeps
	    for(var name in Game.creeps) {
	        var creep = Game.creeps[name];
	        if(creep.memory.role == 'harvester') {
	            roleHarvester.run(creep);
	            Memory.nbCreepsHarvester = Memory.nbCreepsHarvester +1;
	        }else if(creep.memory.role == 'upgrader') {
	            roleUpgrader.run(creep);
	            Memory.nbCreepsUpgrader = Memory.nbCreepsUpgrader +1;
	        }else if(creep.memory.role == 'builder'){
	            roleBuilder.run(creep);
	            Memory.nbCreepsBuilder = Memory.nbCreepsBuilder +1;
	        }
	    }
	}
}

module.exports = moduleManager;