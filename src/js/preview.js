var Preview = function(container) {
	var toReturn = new Component(container, "preview.html", "preview", {class:"section"});

	var getFrame = function() {
		return window.frames['preview-iframe'];
	}

	var getFrameWindow = function() {
		return getFrame().contentWindow;
	}

	var getFrameDocument = function() {
		var frame = getFrame();
		var doc = (frame.contentDocument) ? frame.contentDocument : frame.contentWindow.document;
		return doc;
	}

	var onChange = function(event) {
		var doc = getFrameDocument();
		var htmlNode = doc.getElementsByTagName("html")[0];
		htmlNode.innerHTML=event.data;
	};

	var onRun = function(event) {
		var doc = getFrameDocument();
		var loadEvent = doc.createEvent('Event');
		loadEvent.initEvent('load', false, false);
		getFrameWindow().dispatchEvent(loadEvent);
	}

	toReturn.registerListeners = function() {
		Main.Events.subscribe(Main.Events.consts.EVENT_CHANGE, onChange);
		Main.Events.subscribe(Main.Events.consts.EVENT_RUN, onRun);
	};

	toReturn.unregisterListeners = function() {
		node.removeEventListener("keyPress", onKeyPress);
	};

	toReturn.registerListeners();
	return toReturn;
};