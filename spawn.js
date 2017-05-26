//define var
var nbCivilianMax = 5;
var nbMilitaryMax = 0;


var spawn = {
    run : function(){
        var nbCreeps    = Memory.nbCreeps;
        console.log('total civilian  = '+nbCreeps);
        //comparison between all of our creep with ratio
        if (nbCreeps < nbCivilianMax)
        {
            var newCreep = Game.spawns['NagotoQg'].createCreep( [WORK, CARRY, CARRY, MOVE], null,{role: 'civilian', origin: 'NagotoQg'});
        }
    }
}

module.exports = spawn;