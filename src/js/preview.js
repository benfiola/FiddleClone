var Preview = function(container) {
	var iframe;
	var consoleScriptlet;
	var iframeHtmlNode;
	var iframeDocument;
	var iframeWindow;
	var self = this;

	var init = function() {
		Component.call(self, container, "preview.html", "preview", {class:"section"});
		self.loadContent();
		iframe = window.frames['preview-iframe'];
		iframeWindow = iframe.contentWindow;
		iframeDocument = (iframe.contentDocument) ? iframe.contentDocument : iframeWindow.document;
		consoleScriptlet = new FileLoader().load("resources/console-scriptlet.js");
		registerListeners();
	}

	var onClear = function(event) {
		var htmlNode = getHtmlNode();
		htmlNode.innerHTML = "";
	}

	var onChange = function(event) {
		var htmlNode = getHtmlNode();
		htmlNode.innerHTML=event.data;
	};

	var onRun = function(event) {
		var htmlNode = getHtmlNode();
		iframeDocument.open('text/htmlreplace');
		iframeDocument.write(process(htmlNode.innerHTML));
		iframeDocument.close();
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
	
	var process = function(data) {
		var toReturn = consoleScriptlet + data;
		return toReturn;
	}

	init();
};

Preview.prototype = new Component();
Preview.prototype.constructor=Preview;