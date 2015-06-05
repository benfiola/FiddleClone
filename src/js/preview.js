var Preview = function(container) {
	var iframe;
	var iframeHtmlNode;
	var iframeDocument;
	var iframeWindow;
	var state;
	var self = this;

	var STATES = {
		preview:"preview",
		running:"running"
	};

	var init = function() {
		Component.call(self, container, "preview.html", "preview", {class:"section"});
		self.loadContent();
		iframe = window.frames['preview-iframe'];
		iframeWindow = iframe.contentWindow;
		iframeDocument = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
		setState(STATES.preview);
		registerListeners();
	}

	var onClear = function(event) {
		setState(STATES.preview);
		var htmlNode = getHtmlNode();
		htmlNode.innerHTML = "";
	}

	var onChange = function(event) {
		setState(STATES.preview);
		var htmlNode = getHtmlNode();
		htmlNode.innerHTML=event.data;
	};

	var onRun = function(event) {
		if(state == STATES.preview) {
			setState(STATES.running);
			var htmlNode = getHtmlNode();
			iframeDocument.open('text/htmlreplace');
			iframeDocument.write(htmlNode.innerHTML);
			iframeDocument.close();
		} else {
			var loadEvent = iframeDocument.createEvent('Event');
			loadEvent.initEvent('load', false, false);
			iframeWindow.dispatchEvent(loadEvent);
		}
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

	var getHtmlNode = function() {
		return iframeDocument.getElementsByTagName("html")[0];
	}

	var setState = function(s) {
		state = s;
	}

	init();
};

Preview.prototype = new Component();
Preview.prototype.constructor=Preview;