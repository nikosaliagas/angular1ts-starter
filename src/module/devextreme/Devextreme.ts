import {App} from "../../App";
import "devextreme";
import "angular-sanitize";
import "devextreme/css/dx.common.css!";
import "devextreme/css/dx.light.css!";

const module:ng.IModule = App.module("app.devextreme", ["ngSanitize", "dx"]);
