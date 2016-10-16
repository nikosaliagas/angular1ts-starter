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
    public buttonOptions: DevExpress.ui.dxButtonOptions;

    // @ngInject
    constructor(private toastr: Toastr, private $q: ng.IQService, public contactService: ContactService) {}

    $onInit() {
        var options: DevExpress.ui.dxButtonOptions;
        options = {
            text: 'Bouton Devextreme'
        };
        this.buttonOptions = options;
    }

    public traiter(frm: boolean): boolean {
        if (!frm) {
            this.submitted = true;

            this.toastr.warning("Corriger les erreurs", "Erreur de validation");
            return false;
        }

        this.toastr.success("value", "Validation ok");
        // this.toastr.success("Nous vous contacterons prochainement", "Validation ok");

        console.log("infos contact");
        console.log(this.contact);

        this.contactService.retournerTous().then(function(datas) {
            console.log("données");
            console.log(datas);
        });
    };
}
