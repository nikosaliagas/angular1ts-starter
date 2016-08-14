import {Component} from "../../decorators/component";

@Component({
  bindings: {
    prop: '<'
  },
  templateUrl: "src/module/contact/view/MyComponent.html"
})
export class MyComponent {
   public prop: string;

   constructor(private $q: ng.IQService) {
    console.log("hello : " + this.prop);
   }

   $onInit() {
     // do something with this.prop or this.$q upon initialization
     console.log("init component done :)");
     console.log(this.prop);
   }
}
