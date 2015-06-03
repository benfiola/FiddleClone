var Preview = function() {
	var toReturn = new Component("preview");

	var onChange = function(event) {
		var main = document.getElementById("preview");
		var node = main.getElementsByClassName("content")[0];
		node.innerHTML = event.data;
	};

	toReturn.registerListeners = function() {
		Main.Events.subscribe(Main.Events.consts.EVENT_CHANGE, onChange);
	};

	toReturn.unregisterListeners = function() {
		node.removeEventListener("keyPress", onKeyPress);
	};

	toReturn.registerListeners();
	return toReturn;
};