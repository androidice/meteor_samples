Template.Recipes.onCreated(function(){ 
	// specifc template subscription
	// provides a flexibility for the 
	// specific template to subscribe 
	// into a specific objects
	var self = this;
	self.autorun(function(){
		Session.set('newRecipe', false);
		self.subscribe('recipes');
	});
});

Template.Recipes.events({
	'click .new-recipe': function(){
		Session.set('newRecipe', true);
	}
});

Template.Recipes.helpers({
	recipes: ()=> {
		return Recipes.find({});
	}
});