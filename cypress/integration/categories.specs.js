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

    it('Ask News doesn\'t have external links', () => {
        cy.visit('/item/21451124')
        cy.get('.item-view-header a')
        .should('have.attr', 'target', '_blank')
    })

    //on vérifie la barre de menu
    it('Test have all categories', () => {
        cy.visit('/')
        cy.get('.header .inner a')
        .should('contain.text', 'Top')
        .and('contain.text', 'New')
        .and('contain.text', 'Show')
        .and('contain.text', 'Ask')
        .and('contain.text', 'Jobs')
    })

    // que le menu soit visible sur toutes les pages
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