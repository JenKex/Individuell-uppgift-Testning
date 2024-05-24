import Main from '../../src/components/Main.jsx'

describe('check if Main renders every component', () => {
    beforeEach(() => {
        cy.mount(<Main />)
    })
    it('should render the Footer', () => {
        cy.contains('Idag är det:')
    })
    it('should render the header', () => {
        cy.contains('Min vecka')
    })
})