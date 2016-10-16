import {
    App
}
from "../../App";
import {
    DashboardCtrl
}
from "./DashboardCtrl";
import {
    Routes
}
from "./Routes";
import "../story/Story";

const module: ng.IModule = App.module("app.dashboard", ["app.story"]);

module.controller("DashboardCtrl", DashboardCtrl);

module.config(Routes);
