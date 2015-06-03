
var App = function() {
	var e;
	var c;
	var p;

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

	this.init = function() {
		e = new Editor();
		c = new Component("console");
		p = new Preview();
	}
}

var Main = new App();