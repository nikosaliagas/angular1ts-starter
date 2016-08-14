import {directive} from "../../decorators/directive";

@directive("$location", "$rootScope")
export class ContactFormDirective implements ng.IDirective {

  public templateUrl:string = "src/module/contact/view/form.html";
  public restrict:string = "EA";
  public scope:Object = {
    story: "="
  };

  public link:Function = (scope:ng.IScope, element:ng.IAugmentedJQuery, attrs:ng.IAttributes):void => {
    console.log("hello you2");
    return null;
  };

  // @ngInject
  constructor(private $location:ng.ILocationService, private $rootScope:ng.IScope) {
    console.log("hello you1");
  }

}
