//define var
var nbCivilianMax = 5;
var nbMilitaryMax = 0;


var spawn = {
    run : function(){
        var nbCreeps    = Memory.nbCreeps;
        console.log('total civilian  = '+nbHarverst);
        console.log('total military  = '+nbUpgrader);
        //comparison between all of our creep with ratio
        if (nbCreeps < nbCivilian)
        {
            var newCreep = Game.spawns['NagotoQg'].createCreep( [WORK, CARRY, CARRY, MOVE], null,{role: 'civilian', origin: 'NagotoQg'});
        }
    }
}

module.exports = spawn;