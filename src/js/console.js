var Console = function(container) {
	var contentDiv;

	var self = this;

	var init = function() {
		Component.call(self, container, "console.html", "console", {class:"section"});
		self.loadContent();
		contentDiv = self.node.getElementsByClassName("content")[0];
		registerListeners();
	}

	var onPreRun = function(event) {
		clearConsole();
	}

	var onClear = function(event) {
		clearConsole();
	}

	var onConsole = function(event) {
		appendToConsole(event.data);
	}

	var registerListeners = function() {
		Main.Events.subscribe(Main.Events.consts.EVENT_PRE_RUN, onPreRun);
		Main.Events.subscribe(Main.Events.consts.EVENT_CONSOLE, onConsole);
		Main.Events.subscribe(Main.Events.consts.EVENT_CLEAR, onClear);
	};

	var unregisterListeners = function() {
		Main.Events.unsubscribe(Main.Events.consts.EVENT_PRE_RUN, onPreRun);
		Main.Events.unsubscribe(Main.Events.consts.EVENT_CONSOLE, onConsole);
		Main.Events.unsubscribe(Main.Events.consts.EVENT_CLEAR, onClear);
	};

	var clearConsole = function() {
		contentDiv.innerText = "";
	}

	var appendToConsole = function(data) {
		contentDiv.innerText = contentDiv.innerText + "\n" + data;
	}

	init();
};

Console.prototype = new Component();
Console.prototype.constructor=Console;