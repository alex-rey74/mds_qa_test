describe('News List', () => {
    it('Test list length', () => {
        cy.visit('/')
        cy.get('.news-item')
        .should('have.length', 20)
    })

    it('Test opening news in a new tab', () => {
        cy.visit('/')
        cy.get('.news-item .title a')
        .should('have.attr', 'target')
        .and('equal', '_blank')
    })
})