Template.Recipes.onCreated(function(){ 
	// specifc template subscription
	// provides a flexibility for the 
	// specific template to subscribe 
	// into a specific objects
	var self = this;
	self.autorun(function(){
		self.subscribe('recipes');
	});
});

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
});