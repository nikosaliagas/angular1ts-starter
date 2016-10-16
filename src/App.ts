/// <reference path="../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../typings/main/ambient/angular/index.d.ts" />
/// <reference path="../typings/main/ambient/angular-ui-router/index.d.ts" />
/// <reference path="../typings/main/ambient/toastr/index.d.ts" />
/// <reference path="../typings/main/ambient/devextreme/index.d.ts" />

/* tslint:disable:variable-name */

import * as angular from "angular";
import "angular-ui-router"; //https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/angular-ui-router/angular-ui-router.d.ts
import "bootstrap";
import "bootstrap/css/bootstrap.css!";

const module: ng.IModule = angular.module("app", [
    "ui.router"
]);

const App: ng.IAngularStatic = angular;

export {
    App
};

// @ngInject
module.config(($urlRouterProvider: angular.ui.IUrlRouterProvider) => {
    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/404');
});
