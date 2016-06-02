FlowRouter.triggers.enter([

    function (context, redirect) {
        if (!Meteor.userId()) {
            FlowRouter.go('home');
        }
    }
]);

FlowRouter.route('/', {
    name: "home",
    action() {
        if (Meteor.userId()) {
            FlowRouter.go('recipe-book');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/recipe-book', {
    name: "recipe-book",
    action() {
        BlazeLayout.render('MainLayout', {
            main: "Recipes"
        });
    }
});

FlowRouter.route('/recipe-details/:id', {
    name: "recipe-details",
    action() {
        BlazeLayout.render('MainLayout', {
            main: "RecipeDetails"
        });
    }
});