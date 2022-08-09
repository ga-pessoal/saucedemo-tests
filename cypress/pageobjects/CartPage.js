class CartPage {

    get screen () {
        return cy.get('#cart_contents_container');
    }

    get items () {
        return cy.get('.cart_item');
    }

    get checkoutButton () {
        cy.get('[data-test="checkout"]');
    }

    getItemsAmount() {
        return this.items.length;
    }

    checkout() {
        cy.get('[data-test="checkout"]').click();
    }
}

export default new CartPage();