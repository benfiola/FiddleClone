var Preview = function(container) {
	var toReturn = new Component(container, "preview.html", "preview", {class:"section"});

	var onChange = function(event) {
		var frame = window.frames['preview-iframe'];
		var doc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document;
		doc.body.innerHTML=event.data;
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