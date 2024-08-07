class LoginPage{
    visit() {
        cy.visit('/');
    }

    fillUserNameField(username){
        cy.get('#user-name').type(username);
    }

    fillPasswordField(password){
        cy.get('#password').type(password);
    }

    submit(){
        cy.get('#login-button').click();
    }
}

export default LoginPage;