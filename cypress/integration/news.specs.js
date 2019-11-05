describe('News Tests', () => {
    it('News have all informations', () => {
        cy.visit('/')
        cy.get('.news-item  span')
        .should('have.class', 'score')
        .and('have.class', 'title')
        .and('have.class', 'by')
        .and('have.class', 'time')
        .and('have.class', 'comments-link')
        .and('have.class', 'host')
    })
})