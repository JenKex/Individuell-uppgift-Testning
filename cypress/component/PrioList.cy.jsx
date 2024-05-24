import PrioList from '../../src/components/prio-list/PrioList.jsx'
import { useStore } from '../../src/data/store.js'

describe('testing the prioList component', () => {

    // const toggleTodo = useStore.getState().toggleTodo

    const todos = useStore.getState().todos
    const testdata = todos
    
    beforeEach(() => {
        cy.mount(<PrioList item={testdata} />)
    })

    it('should display a headline', () => {
        cy.get('[data-cy="finished-tasks"]')
        .should('be.visible')
    })

    it('should display a container for a list of tasks', () => {
        cy.get('[data-cy="prio-items"]')
        .should('be.visible')
    })

    it('should display a list of initial unfinished tasks', () => {
        let i = 0
        useStore.setState({ todos: testdata })
        cy.then(() => {
            const todos = useStore.getState().todos
            todos.forEach(todo => {
                if (todo.done === false){
                    i++
                }
            })
        })
        cy.get('[data-cy="prio-item"]')
        .should(($item) => {
            expect($item).to.have.length(i)
        })
    })

    it('should display, within the headline, the initial finished tasks', () => {
        let i = 0
        useStore.setState({ todos: testdata })
        cy.then(() => {
            const todos = useStore.getState().todos
            todos.forEach(todo => {
                if (todo.done === true){
                    i++
                }
            })
        })
        cy.get('[data-cy="finished-tasks"]')
        .invoke('text').then(text => {
            expect(text).to.contain(i)
          })
    })

    it('should contain a field which takes inputs', () => {
        const field = cy.get('[data-cy="search-field"]') 
        field.type('Test pågår...')
        cy.get('[data-cy="search-field"]').should('have.value', 'Test pågår...')
    })

    it('should display results obtained through searching', () => {
        const field = cy.get('[data-cy="search-field"]')
        field.type('Övning')
        cy.contains('Övning')
    })

})