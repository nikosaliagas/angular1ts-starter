import {
    App
}
from "../App";

const module: ng.IModule = App.module("app.services", []);

import IPromise = angular.IPromise;

export class HttpService {
    private httpService: ng.IHttpService;
    private baseUrl: string = "http://localhost:3000/api/";
    public moduleName: string;

    // @ngInject
    constructor($http: ng.IHttpService) {
        this.httpService = $http;
    }

    useGetHandler(params: any): ng.IPromise < any > {
        var result: ng.IPromise < any > = this.httpService.get(this.baseUrl + this.moduleName + ".json", params)
            .then((response: any): ng.IPromise < any > => this.handlerResponded(response, params));
        return result;
    }

    usePostHandler(params: any): ng.IPromise < any > {
        var result: ng.IPromise < any > = this.httpService.post(this.baseUrl + this.moduleName + ".json", params)
            .then((response: any): ng.IPromise < any > => this.handlerResponded(response, params));
        return result;
    }

    handlerResponded(response: any, params: any): any {
        return response.data;
    }

} // HttpService class

module.service("HttpHandler", HttpService);
