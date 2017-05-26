var roleManager         = require('role.manager');
var constructionManager = require('construction.manager');
var spawn               = require('spawn');
var memoryClean         = require('memory.clean');

module.exports.loop = function () {
    
    //we clean the memory
    memoryClean.run();

    //Incoming feature
    //constructionManager.run();

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