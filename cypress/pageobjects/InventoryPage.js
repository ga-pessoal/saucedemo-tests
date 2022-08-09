class InventoryPage {
    
    get screen() {
        return cy.get('.inventory_list');
    }

    addToCart(product) {
        cy.get(`[data-test="add-to-cart-${product}"]`).click();
    }
}

export default new InventoryPage();