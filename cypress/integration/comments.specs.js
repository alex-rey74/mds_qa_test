describe('Comments tests', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get('.news-item:first .meta .comments-link a')
        .click()

        //on attend que les commentaires soient bien chargés
        cy.wait(1500)
    })

    it('Comments pages have the number of comments', () => {
        cy.get('.item-view-comments-header')
        .contains(/\d+\ comments/)
    })

    it('Comments page have all the comments', () => {
        //Test la présence du lien vers le profil + du temps depuis le post
        cy.get('.comment-children .comment li div')
        .should('have.class', 'by')
        .and('have.descendants', 'a')
        .contains(/ago/)
    })

    it('comment can be toggled', () => {
        cy.visit('/item/21451434')

        cy.get('.comment-children:first .comment:first .toggle:first a')
        .click()


        //on va chercher le premier "sous-bloc" de commentaires
        cy.get('.comment-children:first .comment:first ul')
        .should('have.css', 'display', 'none')
    })
})