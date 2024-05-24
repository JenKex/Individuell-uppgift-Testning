import Footer from '../../src/components/Footer.jsx'
import { useStore } from '../../src/data/store.js'

describe('testing the Footer component', () => {
    it('should get a valid day of the week', () => {
        cy.mount(<Footer/>)
        cy.get('[data-cy="weekday-display"]')
        .contains('dag')
        //Importera getToday() och kolla om den matchar nuvarande dagen; testa också mot setToday med ett testvärde
    })
})