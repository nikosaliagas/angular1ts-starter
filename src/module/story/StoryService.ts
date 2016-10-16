import {
    HttpService
}
from "../../services/HttpService";

import {
    IService
}
from "../../services/IService";

import IPromise = angular.IPromise;

export class StoryService implements IService {
    moduleName: string = "stories";

    // @ngInject
    constructor(private httpService: HttpService) {
        this.httpService.moduleName = this.moduleName;
    }

    public getAll(): IPromise < any > {
        var config: any = {};
        return this.httpService.obtenir({});
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
