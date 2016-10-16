/// <reference path="../references.ts" />

describe("Page contact", () => {
    beforeEach(() => {
        startLocalhost();
        browser.get("http://localhost:3000/#/contact");
    });

    describe("in page contact", () => {
        it('should filter results', function() {

            element(by.model('$ctrl.contact.nom')).sendKeys("nikos aliagas");

            element(by.css('button')).click()
                .then(function() {
                    expect(element(by.css('.toast-success')).isPresent()).toBe(true);
                });
        });
    });
});
