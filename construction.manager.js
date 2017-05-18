var constructionManager = {
	run: function(room) {
	    const myRoomName  = Game.spawns['NagotoQg'].pos.roomName;
		const exits = Game.map.describeExits(myRoomName);
		console.log(JSON.stringify(exits));
		var salle = new Array();
		/*for()
		{
			salle[i] = new Array();
		}*/
	}
};

module.exports = constructionManager;