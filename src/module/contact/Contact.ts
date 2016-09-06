import {
    App
}
from "../../App";
import {
    FormulaireComponent
}
from './FormulaireComponent';
import {
    ContactService
}
from "./ContactService";

const module: ng.IModule = App.module("app.contact", ["app.services"]);

module.service("contactService", ContactService);
module.component("formulaire", FormulaireComponent);

// @ngInject
module.config(($stateProvider: angular.ui.IStateProvider) => {
    $stateProvider.state("contact", {
        url: "/contact",
        views: {
            application: {
                templateUrl: "src/module/contact/view/contact.html"
            }
        }
    });
});
