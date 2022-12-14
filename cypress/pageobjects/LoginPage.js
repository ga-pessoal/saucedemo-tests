class LoginPage {
    
    get screen(){
        return cy.get('#login_button_container');
    }

    get username(){
        return cy.get('[data-test="username"]');
    }

    get password(){
        return cy.get('[data-test="password"]');
    }

    get loginButton(){
        return cy.get('[data-test="login-button"]');
    }

    get errorMessage(){
        return cy.get('[data-test="error"]');
    }

    signIn(userDetails) {
        const {password, username} = userDetails;

        if(username) {
            this.username.type(username);
        }
        
        if(password) {
            this.password.type(password);
        }

        this.loginButton.click();
    }
}

export default new LoginPage();