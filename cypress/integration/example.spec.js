
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('checks for button, and output', ()=>{
            cy.get('button').should('be.visible');
        });
    });
});