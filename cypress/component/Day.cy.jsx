import Day from '../../src/components/day/Day.jsx'
import { splitTodosIntoDays } from '../../src/utils/list.js'

const todos = [
    { id: 1, day: 'må', done: true, late: false, text: 'Göra klart inlämning' },
    { id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
    { id: 3, day: 'ti', done: false, late: true, text: 'Övning 1' },
    { id: 4, day: 'on', done: false, late: false, text: 'Repetera lektionen' },
    { id: 5, day: 'on', done: true, late: false, text: 'Övning 2' },
    { id: 6, day: 'to', done: false, late: false, text: 'Distanslektion 9-16' },
    { id: 7, day: 'sö', done: false, late: false, text: 'Sista dag för inlämning' }
]

const days = splitTodosIntoDays(todos)

describe('testing the Day component', () => {
    it('should display the day associated with its task', () => {
        cy.mount(<Day day={days[0]} />)
        cy.contains('Måndag').should('be.visible')
    })
})