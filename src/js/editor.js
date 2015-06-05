var Editor = function(container) {
	var textAreaNode;
	
	var self = this;

	var init = function() {
		Component.call(self, container, "editor.html", "editor", {class:"section"});
		self.loadContent();
		textAreaNode = self.node.getElementsByTagName("textarea")[0];
		registerListeners();
	}

	var onClear = function() {
		textAreaNode.value = "";
	}

	var onKeyPress = function() {
		var evt = new FiddleEvent(Main.Events.consts.EVENT_CHANGE, textAreaNode.value);
		Main.Events.publish(evt);
	};

	var registerListeners = function() {
		textAreaNode.addEventListener("keyup", onKeyPress);
		Main.Events.subscribe(Main.Events.consts.EVENT_CLEAR, onClear);
	};

	var unregisterListeners = function() {
		textAreaNode.removeEventListener("keyPress", onKeyPress);
		Main.Events.unsubscribe(Main.Events.consts.EVENT_CLEAR, onClear);
	};

	init();
};

Editor.prototype = new Component();
Editor.prototype.constructor=Editor;