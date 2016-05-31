FlowRouter.route('/', {
    name: "home",
    action() {
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