function Container()
{
	THREE.Object3D.call(this);

	this.name = "container";
}

//Function Prototype
Container.prototype = Object.create(THREE.Object3D.prototype);
Container.prototype.icon = "editor/files/icons/script/script.png";
Container.prototype.update = update;

//Update Container
function update()
{
	for(var i = 0; i < this.children.length; i++)
	{
		if(this.children[i].update != undefined)
		{
			this.children[i].update();
		}
	}
}