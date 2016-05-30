var Recipes = new Mongo.Collection("recipes");

RecipeSchema = new SimpleSchema({
    name: {
        type: String,
        label: 'Name'
    },
    desc: {
        type: String,
        label: 'Description'
    },
    author: {
        type: String,
        label: 'Author',
        autoValue: function () {
            return this.userId;
        }
    },
    dateCreated: {
        type: Date,
        label: 'Date Created',
        autoValue: function () {
            return new Date();
        }
    }
});

Recipes.attachSchema(RecipeSchema);