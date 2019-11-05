/// <reference types='Cypress' />

describe('News List Tests', () => {
    // 20 news par pages
    it('Test list length', () => {
        cy.visit('/')
        cy.get('.news-item')
        .should('have.length', 20)
    })

    // ouverture dans un nouvel onglet
    it('Test opening news in a new tab', () => {
        cy.visit('/')
        cy.get('.news-item .title a')
        .should('have.attr', 'target')
        .and('equal', '_blank')
    })

    //recul d'une page
    it('Test Navigation Down', () => {
        cy.visit('/top/15')
        cy.get('.news-view .news-list-nav a:first')
        .click()

        cy.url()
        .should('match', /\/14$/)
    })

    //avance d'une page
    it('Test Navigation Up', () => {
        cy.visit('/top/15')
        cy.get('.news-view .news-list-nav a')
        .eq(1)   // le 2eme a de la div
        .click()

        cy.url()
        .should('match', /\/16$/)
    })

    //max 25 pages = impossible d'accéder à la 26
    it('Test 25 max pages', () => {
        cy.visit('/top/25')
        cy.get('.news-view .news-list-nav a')
        .eq(1)
        .should('have.class', 'disabled')
    })
})