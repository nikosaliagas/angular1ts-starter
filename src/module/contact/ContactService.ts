import {
    HttpService
}
from "../../services/HttpService";

import {
    IService
}
from "../../services/IService";

import IPromise = angular.IPromise;

export class ContactService implements IService {
    moduleName: string = "stories";

    // @ngInject
    constructor(private httpService: HttpService) {
        this.httpService.moduleName = this.moduleName;
    }

    public retournerTous(): IPromise < any > {
        return this.httpService.obtenir({});
    }
}

export interface Contact {
    nom: string;
}
