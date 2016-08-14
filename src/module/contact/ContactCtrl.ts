export class ContactCtrl {

  public title:string = "Contact";

  // @ngInject
  constructor(private toastr:Toastr) {
    toastr.success("Contact", "Contactez moi");
  }
}
