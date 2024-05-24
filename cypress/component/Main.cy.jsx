import Main from '../../src/components/Main.jsx'

describe('check if Main renders every component', () => {
    beforeEach(() => {
        cy.mount(<Main />)
    })
    it('should render the day-by-day overview', () => {
        cy.get('[data-cy="day-view"]').should('be.visible')
    })
    it('should render the list of priority items', () => {
        cy.get('[data-cy="prio-list"]').should('be.visible')
    })
})