
var App = function() {
	var container;
	this.Editor;
	this.Console;
	this.Preview;
	this.Toolbar;

	var self = this;

	this.Events = new function() {
		this.consts = {
			EVENT_CHANGE:"change",
			EVENT_CONSOLE:"console",
			EVENT_RUN:"run"
		};

		var subscribers = {};

		this.subscribe = function(event_name, callback) {
			if(typeof subscribers[event_name] == "undefined") {
				subscribers[event_name] = [];
			}
			subscribers[event_name].push(callback);
		}

		this.unsubscribe = function(event_name, callback) {
			if(typeof subscribers[event_name] == "undefined") {
				return;
			}

			var index = subscribers[event_name].indexOf(callback);
			subscribers[event_name].splice(index, 1);
		}

		this.publish = function(event) {
			if(typeof subscribers[event.name] == "undefined") {
				return;
			}

			for(var x = 0; x < subscribers[event.name].length; x++) {
				subscribers[event.name][x](event);
			}
		}
	};

	var initWorkingArea = function() {
		var node = document.createElement("div");
		node.id = "main";
		container.appendChild(node);
		self.Editor = new Editor(node);
		self.Preview = new Preview(node);
		self.Console = new Console(node);
	}

	var initToolbar = function() {
		self.Toolbar = new Toolbar(container);
	}

	this.init = function() {
		container = document.getElementById("container");
		initWorkingArea();
		initToolbar();
	}
}

var Main = new App();