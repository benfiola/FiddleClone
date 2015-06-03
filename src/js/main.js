
var App = function() {
	var container;
	var e;
	var c;
	var p;
	var t;

	var self = this;

	this.Events = new function() {
		this.consts = {
			EVENT_CHANGE:"change",
			EVENT_CONSOLE:"console"
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
		e = new Editor(node);
		p = new Preview(node);
		c = new Console(node);
	}

	var initToolbar = function() {
		t = new Toolbar(container);
	}

	this.init = function() {
		container = document.getElementById("container");
		initWorkingArea();
		initToolbar();
	}
}

var Main = new App();