Template.RecipeList.helpers({
	updateRecipeId: function() {
		return this._id;
	}
});

Template.RecipeList.events({
	'click .toggle-menu': function(){
		Meteor.call("toggleMenuItem", this._id, this.inMenu)
	}
});