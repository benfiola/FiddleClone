var Toolbar = function(container) {
	var toReturn = new Component(container, "toolbar.html", "toolbar", {class:"toolbar"});
	var self = toReturn;
	
	toReturn.registerListeners = function() {
		var toolbar = document.getElementById("toolbar");
		var buttons = toolbar.getElementsByTagName("button");
		for(var index = 0; index < buttons.length; index++) {
			var button = buttons[index];
			button.addEventListener("click", handleButton);
		}
	};

	toReturn.unregisterListeners = function() {
		
	};

	var handleButton = function(event) {
		var button = event.target;
		var action = button.getAttribute("action");
		if(action == "run-code") {
			var event = new FiddleEvent(Main.Events.consts.EVENT_RUN, "");
			Main.Events.publish(event);
		}
	}

	toReturn.registerListeners();
	return self;
};
