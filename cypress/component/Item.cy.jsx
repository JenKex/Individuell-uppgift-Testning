import Item from '../../src/components/day/Item.jsx'
import { useStore } from '../../src/data/store.js'

describe('testing the Item component', () => {

    // const toggleTodo = useStore.getState().toggleTodo

    const todos = useStore.getState().todos
    const testdata = todos

    it('should contain the text assigned to the item', () => {
        cy.mount(<Item item={testdata[0]} />);
        cy.get('[data-cy="item-text"]').contains('Göra klart inlämning').should('be.visible');
    })

    it('should open and close an edit field, which should take inputs', () => {
        cy.mount(<Item item={testdata[1]}/>)
        cy.get('[data-cy="edit-button"')
        .click()
        cy.get('[data-cy="text-input-field"]')
        .type('Detta är ett test.')
        cy.get('[data-cy="save-button"]')
        .click()
    })

    it('should have a delete button', () => {
        cy.mount(<Item item={testdata[1]}/>)
        cy.get('[data-cy="delete-button"')
        .should('be.visible')
    })

    it('should toggle on and off when clicked', () => {
        cy.mount(<Item item={testdata[2]}/>)
        cy.get('[data-cy="checkbox"]')
        .should('not.be.checked')
        .click()
        cy.get('[data-cy="checkbox"]')
        .should('be.checked')
    })
})