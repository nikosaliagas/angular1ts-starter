import {
    App
}
from "./App";
import "./module/toast/Toast";
import "./module/dashboard/Dashboard";
import "./module/contact/Contact";
import "./module/menu/Menu";
import "./module/auth/Auth";
import "./services/EndpointService";
import "./services/HttpService";
import "./style/style.css!";

App.element(document).ready(() => {
    App.bootstrap(document, [
        "app",
        "app.dashboard",
        "app.contact",
        "app.auth",
        "app.toast",
        "app.services",
        "app.menu"
    ]);
});
