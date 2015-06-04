var Console = function(container) {
	var self = this;

	var init = function() {
		Component.call(self, container, "console.html", "console", {class:"section"});
		self.loadContent();
		registerListeners();
	}

	var onRunCode = function(event) {

	};

	var registerListeners = function() {

	};

	var unregisterListeners = function() {

	};

	init();
};

Console.prototype = new Component();
Console.prototype.constructor=Console;