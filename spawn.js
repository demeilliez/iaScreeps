//Define const %
const harvest     = 30;
const upgrader    = 50;
const builder     = 20;

//define var
var nbHarverst    = Memory.nbCreepsHarvester;
var nbUpgrader    = Memory.nbCreepsUpgrader;
var nbBuilder     = Memory.nbCreepsBuilder;
var totalCreep    = nbHarverst + nbUpgrader + nbBuilder;

//define const max creep
const totalMax    = 8;

var spawn = {
    run : function(){
    	var percentHarvest  	= (harvest * totalMax)/100;
    	var percentUpgrader 	= (upgrader * totalMax)/100;
    	var percentBuilder      = (builder * totalMax)/100;

    	console.log('total haverst  = '+nbHarverst);
    	console.log('total upgrader = '+nbUpgrader);
    	console.log('total builder  = '+nbBuilder);
    	//comparison between all of our creep with ratio
    	if (totalCreep <= totalMax) {
    		if (nbHarverst < percentHarvest)
	        {
				var newCreep = Game.spawns['NagotoQg'].createCreep( [WORK, CARRY, CARRY, MOVE], null,{role: 'harvester', origin: 'NagotoQg'});
	        }else if (nbUpgrader < percentUpgrader)
	        {
				var newCreep = Game.spawns['NagotoQg'].createCreep( [WORK, CARRY, CARRY, MOVE], null ,{role: 'upgrader', origin: 'NagotoQg'} );
	        }else if (nbBuilder < percentBuilder)
	        {
				var newCreep = Game.spawns['NagotoQg'].createCreep( [WORK, CARRY, CARRY, MOVE], null ,{role: 'builder', origin: 'NagotoQg'} );
	        }
    	}
    }
}

module.exports = spawn;