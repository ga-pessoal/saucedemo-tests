/********************/
/*  CHECKOUT TESTS  */
/********************/

import AppHeaderPage from "../../pageobjects/AppHeaderPage";
import LoginPage from "../../pageobjects/LoginPage";
import InventoryPage from "../../pageobjects/InventoryPage";
import { LOGIN_USERS } from "../../support/constants";
import CartPage from "../../pageobjects/CartPage";
import CheckoutPage from "../../pageobjects/CheckoutPage";

context('Checkout',()=>{

    before(()=>{
        cy.visit('');
    });
    
    it('SignIn',()=>{
        LoginPage.screen.should('be.visible');

        LoginPage.signIn(LOGIN_USERS.STANDARD);
        InventoryPage.screen.should('be.visible');
    });

    it('Filter product', ()=>{
        AppHeaderPage.selectProductOrder('Price (low to high)');
    });

    it('Add to cart', ()=>{
        cy.fixture('addToCart').should((data) => {
            data.products.forEach(product => {
                InventoryPage.addToCart(product);        
            });
        });
    });

    it('Acess cart',()=>{
        AppHeaderPage.openCart();
        CartPage.screen.should('be.visible');
    });

    it('Checkout', ()=>{
        cy.fixture('addToCart').should((data) => {
            expect(CartPage.getItemsAmount).to.be.eql(data.products.length);
            CartPage.checkout();
        });
        
        cy.fixture('standardUserData').should((data) => {
            CheckoutPage.screen.should('be.visivle');
            CheckoutPage.continueCheckout(data);
        });

        expect(CheckoutPage.completeText).to.be.eql("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
    });
});

