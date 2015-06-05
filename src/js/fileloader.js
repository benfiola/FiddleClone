var FileLoader = function() {
	this.load = function(file) {
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "http://localhost:8080/"+file, false);
		xhr.send(null);
		return xhr.responseText;
	}
}