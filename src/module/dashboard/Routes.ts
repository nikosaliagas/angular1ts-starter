import {
    DashboardCtrl
}
from "./DashboardCtrl";

/* @ngInject */
export function Routes($stateProvider) {
    $stateProvider.state("home", {
        url: "/",
        views: {
            application: {
                templateUrl: "src/module/dashboard/view/dashboard.html",
                controller: DashboardCtrl,
                controllerAs: "controller"
            }
        }
    });
}
