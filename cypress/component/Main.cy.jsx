import Main from '../../src/components/Main.jsx'

describe('check if Main renders every component', () => {
    beforeEach(() => {
        cy.mount(<Main />)
    })
    it('should render the day-by-day overview', () => {
        cy.get('[data-cy="day-view"]').should('be.visible')
        cy.contains('Måndag').should('be.visible')
        cy.contains('Tisdag').should('be.visible')
        cy.contains('Onsdag').should('be.visible')
        cy.contains('Torsdag').should('be.visible')
        cy.contains('Fredag').should('be.visible')
        cy.contains('Lördag').should('be.visible')
        cy.contains('Söndag').should('be.visible')
    })
    it('should render the list of priority items', () => {
        cy.get('[data-cy="prio-list"]').should('be.visible')
    })
})