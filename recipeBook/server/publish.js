Meteor.publish("recipes", function () {
    return Recipes.find({
        author: this.userId
    });
});
// sigle item subscription
Meteor.publish("singleRecipe", function (id) {
	check(id, String);
    return Recipes.find({
        _id: id
    });
});

