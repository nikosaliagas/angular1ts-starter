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
import {
    HttpService
}
from "../../services/HttpService";
import {
    Routes
}
from "./Routes";

const module: ng.IModule = App.module("app.contact", []);

module.service("httpService", HttpService);
module.service("contactService", ContactService);
module.component("formulaire", FormulaireComponent);

// @ngInject
module.config(Routes);
