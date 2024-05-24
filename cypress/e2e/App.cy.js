// import App from '../../src/App.jsx'

describe('E2E-tests simulating user stories', () => {
    it('should depict a user editing, saving, checking and deleting a task', () => {
        cy.visit('/')
        cy.get('.item').contains('Distans').siblings('[data-cy="edit-button"]').click()
        cy.get('[data-cy="text-input-field"]').type('Distanslektion 12-16')
        cy.get('[data-cy="save-button"]').click()
        cy.get('.item').contains('Övning 1').siblings('[data-cy="checkbox"]').check()
        cy.get('.item').contains('Repetera lektionen').siblings('[data-cy="delete-button"]').click()
        // Write cy-get-searchfield, type.'övning', find it in schedule, checking it off, delete other task cy.get('footer').contains('Idag är det:')
    })
    it('should depict a user searching for a task, then checking off it', () =>{
        cy.visit('/')
        cy.get('[data-cy="search-field"]').click()
        .type('Distans')
        // const searchelement = cy.get('[data-cy="prio-item"]').first
        // searchelement.contains('Distans')
        cy.get('.item').contains('Distans').siblings('[data-cy="checkbox"]').click()
    })
    it('should depict a user checking the entire list of tasks', () => {
        cy.visit('/')
        cy.get('[data-cy="checkbox"]').check({multiple : true})
    })
})