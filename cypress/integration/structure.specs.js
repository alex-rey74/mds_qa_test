describe('Structure test', () => {
    it('https valid', () => {
        cy.visit('/')
        cy.url()
        .should('match', /^https/)
    })

    it('is responsive', () => {
        cy.viewport('iphone-6')
        cy.visit('/')

        //TODO
    })
})