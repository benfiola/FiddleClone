<script type="text/javascript">
	if(!window.consoleScriptletInjected) {
		(function (){
			var console = window.console;
			if (!console) return;
			function intercept(method){
				var original = console[method];
				console[method] = function(){
					var message = Array.prototype.slice.apply(arguments).join(' ');
					var event = new parent.FiddleEvent(parent.Main.Events.consts.EVENT_CONSOLE, method.toUpperCase() + ' : ' + message);
					parent.Main.Events.publish(event);
					if (original.call){
						original.call(console, message);
					}else{
						original(message);
					}
				}
			}
			var methods = ['log', 'warn', 'error'];
			for (var i = 0; i < methods.length; i++) {
				intercept(methods[i]);
			}
		})();
	}
	window.consoleScriptletInjected = true;
</script>