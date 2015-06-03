var Component = function(comp_name) {
	this.name = comp_name;
	this.node = document.getElementById(comp_name);
	var self = this;

	var loadContent = function() {
		var content = new HtmlLoader().load(comp_name + ".html");
		self.node.innerHTML = content;
	}

	loadContent();
}