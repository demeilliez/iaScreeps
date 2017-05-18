//we clean our memory

var memoryClean = {
    /** @param {Creep} creep **/
    run: function(creep) {
        for(var i in Memory.creeps) {
            if(!Game.creeps[i]) {
                delete Memory.creeps[i];
            }
        }
    }
}

module.exports = memoryClean;