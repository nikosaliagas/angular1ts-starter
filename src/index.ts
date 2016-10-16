import {
    App
}
from "./App";
import "./module/toast/Toast";
import "./module/devextreme/Devextreme";
import "./module/dashboard/Dashboard";
import "./module/contact/Contact";
import "./module/menu/Menu";
import "./module/auth/Auth";
import "./services/EndpointService";
import "./style/style.css!";

App.element(document).ready(() => {
    App.bootstrap(document, [
        "app",
        "app.dashboard",
        "app.contact",
        "app.auth",
        "app.toast",
        "app.devextreme",
        "app.services",
        "app.menu"
    ]);
});
