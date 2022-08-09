class CheckoutPage {
    
    get screen () {
        return cy.get('.checkout_info_wrapper');
    }

    get firstName () {
        return cy.get('[data-test="firstName"]');
    }

    get lastName () {
        return cy.get('[data-test="lastName"]');
    }

    get postalCode () {
        return cy.get('[data-test="postalCode"]');
    }

    get completeText () {
        return cy.get('.complete-text');
    }

    get continueButton () {
        return cy.get('[data-test="continue"]');
    }

    get finishButton () {
        return cy.get('[data-test="finish"]');
    }

    continueCheckout (userData) {
        const { firstname, lastname, postalcode} = userData;

        if(firstname) {
            this.firstName.type(firstname);
        }

        if(lastname) {
            this.lastName.type(lastname);
        }

        if(postalcode) {
            this.postalCode.type(postalcode);
        }

        this.continueButton.click();
        
    }

    finishCheckout(){
        this.finishButton.click();
    }
}

export default new CheckoutPage();