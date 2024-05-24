import Header from '../../src/components/Header.jsx'
import { useStore } from "../../src/data/store"

const todos = useStore.getState().todos
const testdata = todos

describe('testing the Header component', () => {
    it('should have a button which can uncheck every checkbox', () => {
        cy.mount(<Header />)
        cy.get('[data-cy="restart-week"]')
        .click()
        useStore.setState({ todos: testdata })
        cy.then(() => {
            const todos = useStore.getState().todos
            todos.forEach(todo => {
                expect(todo.done).to.equal(false)
            })
        })
    })
})