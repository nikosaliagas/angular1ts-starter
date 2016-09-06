import {
    HttpService
}
from "../../services/HttpService";
import IPromise = angular.IPromise;

export class StoryService extends HttpService {
    // @ngInject
    constructor($http: ng.IHttpService) {

        super($http);

        this.moduleName = "stories";
    }

    public getAll(): IPromise < any > {
        var config: any = {};
        return this.useGetHandler(config);
    }

}

export interface Story {
    id: number;
    title: string;
    description: string;
    status: number;
    assignee: number;
    reporter: number;
}
