it('should check to see that every checkbox is reset', () => {
    // const testdata = [{test: 1, test: 2}]
    useStore.setState({ todos: testdata})
    cy.then(() => {
        const todos = useStore.getState().todos
        todos.forEach(todo => {
            expect(todo.done).to.equal(false)
        })
    })
})