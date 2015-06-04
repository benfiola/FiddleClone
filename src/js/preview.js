var Preview = function(container) {
	var iframe;
	var iframeDocument;
	var iframeWindow;

	var self = this;

	var init = function() {
		Component.call(self, container, "preview.html", "preview", {class:"section"});
		self.loadContent();
		iframe = window.frames['preview-iframe'];
		iframeWindow = iframe.contentWindow;
		iframeDocument = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
		registerListeners();
	}

	var onClear = function(event) {
		var htmlNode = iframeDocument.getElementsByTagName("html")[0];
		htmlNode.innerHTML = "";
	}

	var onChange = function(event) {
		var htmlNode = iframeDocument.getElementsByTagName("html")[0];
		htmlNode.innerHTML=event.data;
	};

	var onRun = function(event) {
		var loadEvent = iframeDocument.createEvent('Event');
		loadEvent.initEvent('load', false, false);
		iframeWindow.dispatchEvent(loadEvent);
	}

	var registerListeners = function() {
		Main.Events.subscribe(Main.Events.consts.EVENT_CHANGE, onChange);
		Main.Events.subscribe(Main.Events.consts.EVENT_RUN, onRun);
		Main.Events.subscribe(Main.Events.consts.EVENT_CLEAR, onClear);
	};

	var unregisterListeners = function() {
		Main.Events.unsubscribe(Main.Events.consts.EVENT_CHANGE, onChange);
		Main.Events.unsubscribe(Main.Events.consts.EVENT_RUN, onRun);
		Main.Events.unsubscribe(Main.Events.consts.EVENT_CLEAR, onClear);
	};

	init();
};

Preview.prototype = new Component();
Preview.prototype.constructor=Preview;