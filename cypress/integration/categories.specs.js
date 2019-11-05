/// <reference types='Cypress' />

describe('Categories tests', () => {
    it('News in Show category begin with "Show HN:" ', () => {
        cy.visit('/show')
        cy.get('.news-item .title a')
        .contains(/Show HN:/)
    })

    it('News in Ask category begin with "Ask HN:" ', () => {
        cy.visit('/ask')
        cy.get('.news-item .title a')
        .contains(/^Ask HN:/)
    })

    it('Test have all categories', () => {
        cy.visit('/')
        cy.get('.header .inner a')
        .should('contain.text', 'Top')
        .and('contain.text', 'New')
        .and('contain.text', 'Show')
        .and('contain.text', 'Ask')
        .and('contain.text', 'Jobs')
    })

    it('Categories are on all pages', () => {
        let categoriesUrl = ['top', 'new', 'show', 'ask', 'job']

        for(var i = 0; i < categoriesUrl.length; i++){
            cy.visit('/' + categoriesUrl[i])
            cy.get('.header')
            .should('have.descendants', 'nav')
        }
    })

    it('Test Visibility Current category', () => {
        let categoriesUrl = ['top', 'new', 'show', 'ask', 'job']
        let categoriesName = ['Top', 'New', 'Show', 'Ask', 'Jobs']

        for(var i = 0; i < categoriesUrl.length; i++){
            cy.visit('/' + categoriesUrl[i])

            cy.get('.header .inner a')
            .contains(categoriesName[i])
            .should('have.class', 'router-link-exact-active')
            .and('have.class', 'router-link-active')
        }
    })
})