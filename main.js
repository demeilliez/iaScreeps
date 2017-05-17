var roleManager         = require('role.manager');
var constructionManager = require('construction.manager');
var spawn               = require('spawn');

module.exports.loop = function () {
    
        console.log(JSON.stringify(Game.spawns['NagotoQg'].room.name));

    //we run our roleManager
    roleManager.run();
    
    //constructionManager.run();

    //we spawn newest creed
    try 
    {
        spawn.run();
    }
    catch (e) {
       console.log(e);
    }
}