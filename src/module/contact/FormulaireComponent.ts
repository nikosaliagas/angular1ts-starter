import {
    Component
}
from "../../decorators/component";
import {
    Contact, ContactService
}
from "./ContactService";

@
Component({
    templateUrl: "src/module/contact/view/formulaire.html"
})
export class FormulaireComponent {
    public contact: Contact;
    public submitted: boolean = false;

    constructor(private $q: ng.IQService, public contactService: ContactService) {}

    $onInit() {}

    public traiter(frm: boolean): boolean {
        if (!frm) {
            this.submitted = true;
            return false;
        }
        console.log("good");
        console.log(this.contact);

        this.contactService.getAll().then(function(datas) {
            console.log("données");
            console.log(datas);
        });
    };
}
