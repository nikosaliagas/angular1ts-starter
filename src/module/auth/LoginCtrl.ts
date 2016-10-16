import {
    FooBar
}
from "./FooBar";

export class LoginCtrl {

    public title: string = "Login Panel";

    // @ngInject
    constructor(private $filter: ng.IFilterService,
        private $state: ng.ui.IStateService,
        private fooBar: FooBar) {

        this.title = $filter("uppercase")(this.title);
    }

    public fooBarTitle(title: string): string {
        const prefix: string = this.fooBar.testMethod();
        return `${prefix}: ${title}`;
    }
}
