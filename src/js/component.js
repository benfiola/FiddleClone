var Component = function(container, res, comp_id, comp_attributes) {
	this.parent = container;
	this.resource = res;
	this.id = comp_id;
	this.attributes = comp_attributes;
	this.node;

	var self = this;

	var loadContent = function() {
		var content = new HtmlLoader().load(self.resource);
		var node = document.createElement('div');
		node.id = self.id;
		for(var attr in self.attributes) {
			node.setAttribute(attr, self.attributes[attr]);
		}
		node.innerHTML = content;
		self.parent.appendChild(node);
		self.node = node;
	}

	loadContent();
}