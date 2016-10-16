import {
    EndpointService
}
from "./EndpointService";

import IPromise = angular.IPromise;

export class HttpService {
    public moduleName: string;

    // @ngInject
    constructor(private endpointService: EndpointService,
        private $http: ng.IHttpService) {}

    public obtenir(datas: any): IPromise < any > {
        return this.$http
            .get(this.endpointService.getUrl(this.moduleName), this.construireConfigUrl(datas))
            .then((data: any) => this.handleResponse(data));
    }

    private construireConfigUrl(datas: any): any {
        var config: any = {
            params: datas
        };
        return config;
    }

    private handleResponse(response: any): any {
        return response.data;
    }
}
