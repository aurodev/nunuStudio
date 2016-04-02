function AmbientLight(hex)
{
	THREE.AmbientLight.call(this, hex);
	
	this.name = "ambient_light";
}

AmbientLight.prototype = Object.create(THREE.AmbientLight.prototype);
AmbientLight.prototype.icon = "editor/files/icons/lights/ambient.png";
AmbientLight.prototype.update = update;

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
