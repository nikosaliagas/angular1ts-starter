/* @ngInject */
export function Routes($stateProvider) {
    $stateProvider.state("contact", {
        url: "/contact",
        views: {
            application: {
                templateUrl: "src/module/contact/view/contact.html"
            }
        }
    });
}
