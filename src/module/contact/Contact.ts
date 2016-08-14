import {App} from "../../App";
import {ContactCtrl} from "./ContactCtrl";
import {ContactFormDirective} from "./ContactFormDirective";
import {MyComponent} from './MyComponent';

const module:ng.IModule = App.module("app.contact", []);

module.controller("ContactCtrl", ContactCtrl);
module.directive("contactForm", <any>ContactFormDirective);
module.component("myComponent", MyComponent);

// @ngInject
module.config(($stateProvider:angular.ui.IStateProvider) => {
  $stateProvider.state("contact", {
    url: "/contact",
    views: {
      application: {
        templateUrl: "src/module/contact/view/contact.html",
        controller: ContactCtrl,
        controllerAs: "controller"
      }
    }
  });
});
