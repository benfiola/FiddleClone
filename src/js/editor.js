var Editor = function(container) {
	var toReturn = new Component(container, "editor.html", "editor", {class:"section"});

	var onKeyPress = function() {
		var node = document.getElementById("editor-textarea");
		var data = node.value;

		var evt = new FiddleEvent(Main.Events.consts.EVENT_CHANGE, data);
		Main.Events.publish(evt);
	};

	toReturn.registerListeners = function() {
		var node = document.getElementById("editor-textarea");
		node.addEventListener("keyup", onKeyPress);
	};

	toReturn.unregisterListeners = function() {
		node.removeEventListener("keyPress", onKeyPress);
	};

	toReturn.registerListeners();
	return toReturn;
};