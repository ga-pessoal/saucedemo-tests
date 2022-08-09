class AppHeaderPage {
    get cart() {
        return cy.get('.shopping_cart_link');
    }

    get productFilter() {
        return cy.get('.product_sort_container');
    }

    openCart() {
        this.cart.click();
    }

    selectProductOrder(text){
        this.productFilter.select(text);
    }
}

export default new AppHeaderPage();