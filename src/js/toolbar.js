var Toolbar = function(container) {
	var toolboar;
	
	var self = this;

	var init = function() {
		Component.call(self, container, "toolbar.html", "toolbar", {class:"toolbar"});
		self.loadContent();
		toolbar = self.node;
		registerListeners();
	}

	var registerListeners = function() {
		var buttons = toolbar.getElementsByTagName("button");
		for(var index = 0; index < buttons.length; index++) {
			var button = buttons[index];
			button.addEventListener("click", handleButton);
		}
	};

	var unregisterListeners = function() {
		var buttons = toolbar.getElementsByTagName("button");
		for(var index = 0; index < buttons.length; index++) {
			var button = buttons[index];
			button.removeEventListener("click", handleButton);
		}
	};

	var handleButton = function(event) {
		var button = event.target;
		var action = button.getAttribute("action");
		if(action == "run-code") {
			var event = new FiddleEvent(Main.Events.consts.EVENT_PRE_RUN, "");
			Main.Events.publish(event);
			event = new FiddleEvent(Main.Events.consts.EVENT_RUN, "");
			Main.Events.publish(event);
		}
		if(action == "start-over") {
			var event = new FiddleEvent(Main.Events.consts.EVENT_CLEAR, "");
			Main.Events.publish(event);
		}
	}

	init();
};

Toolbar.prototype = new Component();
Toolbar.prototype.constructor=Toolbar;