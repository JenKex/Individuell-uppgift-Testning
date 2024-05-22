import { create } from "zustand";
import { todos } from './data.js'
import { getToday } from "../utils/date.js";

const useStore = create(set => ({
	todos: todos, // TODO: "todos" är data som du kan använda under utvecklingen - byt ut den mot din egen testdata

	setTodos: newTodos => set((state) => ({
		todos: newTodos
	})),
	
	//Daglista:
	// [{
	// 	day: 'måndag',
	// 	id: 1
	// },
	// {
	// 	day: 'tisdag',
	// 	id: 2,
	// },
	// {
	// 	day: 'onsdag',
	// 	id: 3
	// },
	// {
	// 	day: 'torsdag',
	// 	id: 4
	// },
	// {
	// 	day: 'fredag',
	// 	id: 5
	// },
	// {
	// 	day: 'lördag',
	// 	id: 6
	// },
	// {
	// 	day: 'söndag',
	// 	id: 7
	// }], 

	todayName: getToday(),
	// TODO: du behöver en funktion setTodayName för att kunna testa appen med olika veckodagar
	
	setTodayName: newDay => set((state) => ({
		todayName: newDay
	})),


	toggleTodo: id => set(state => {
		// Det är möjligt att det finns en liiiiiten bug här, som man i så fall skulle upptäcka när man testar 😇
		// Den lilla buggen -- möjligt att ...t ska ske innan done: !t.done, annars nollställs objektet till sin ursprungliga kopia?
		return {
			...state,
			todos: state.todos.map(t => {
				if (t.id === id) {
					return { ...t, done: !t.done }
				} else {
					return t
				}
			})
		}
	}),

	resetTodos: () => set(state => ({ todos: [] })),

	// TODO: lägg till en funktion "setTodos" så att du kan ändra innehållet i store från dina testfiler

}))

export { useStore }
