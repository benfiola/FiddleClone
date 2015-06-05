var Component = function(container, res, comp_id, comp_attributes) {
	this.parent = container;
	this.resource = res;
	this.id = comp_id;
	this.attributes = comp_attributes;
	this.node;
}

Component.prototype.loadContent = function() {
	var content = new FileLoader().load(this.resource);
	var node = document.createElement('div');
	node.id = this.id;
	for(var attr in this.attributes) {
		node.setAttribute(attr, this.attributes[attr]);
	}
	node.innerHTML = content;
	this.parent.appendChild(node);
	this.node = node;
}