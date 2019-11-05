describe('User tests', () => {
    //le lien "user" renvoi bien vers la page de l'utilisateur associé
    it('url to user is valid', () => {
        //var global pour shunter le scope du premier then
        var url = ''

        cy.visit('/')
        cy.get('.news-item:first .meta .by a')
        .then(($a) => {
            url = $a.attr('href')
        })
        .click()
        .then(() => {
            cy.url()
            .should('contain', url)
        })
    })

    // la page user contient toutes les infos demandées
    it('Find info about an user', () => {
        cy.visit('/')
        cy.get('.news-item:first .meta .by a')
        .click()

        cy.get('.user-view h1')
        .should('contain.text', 'User : ')

        cy.get('.user-view .meta li span')
        .should('contain', 'Created:')
        .and('contain', 'Karma:')

        cy.get('.user-view .links a')
        .should('contain', 'submissions')
        .should('contain', 'comments')
    })
})