/// <reference types='Cypress' />

describe('News List Tests', () => {
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

    it('Test Navigation Down', () => {
        cy.visit('/top/15')
        cy.get('.news-view .news-list-nav a:first')
        .click()

        cy.url()
        .should('match', /\/14$/)
    })

    it('Test Navigation Up', () => {
        cy.visit('/top/15')
        cy.get('.news-view .news-list-nav a')
        .eq(1)
        .click()

        cy.url()
        .should('match', /\/16$/)
    })

    it('Test 25 max pages', () => {
        cy.visit('/top/25')
        cy.get('.news-view .news-list-nav a')
        .eq(1)
        .should('have.css', 'display', 'none')
    })
})