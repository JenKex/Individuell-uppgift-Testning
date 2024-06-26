import { test, expect, describe } from 'vitest'
import { splitTodosIntoDays } from './list'

describe("testing split function", () => {
	const todos = [
		{ id: 1, day: 'må', done: true, late: false, text: 'Göra klart inlämning' },
		{ id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
		{ id: 3, day: 'ti', done: false, late: true, text: 'Övning 1' },
		{ id: 4, day: 'on', done: false, late: false, text: 'Repetera lektionen' },
		{ id: 5, day: 'on', done: true, late: false, text: 'Övning 2' },
		{ id: 6, day: 'to', done: false, late: false, text: 'Distanslektion 9-16' },
		{ id: 7, day: 'sö', done: false, late: false, text: 'Sista dag för inlämning' }
	];

	it('returns an array when called', () => {
		expect(Array.isArray(splitTodosIntoDays(todos))).toBeTruthy()
	})

	it('can return a day of the week', () => {
		const days = splitTodosIntoDays(todos)
		const day = days[0].dayname
		expect(day).toContain('Måndag')
	})

	it('returns all days of the week', () => {
		const days = splitTodosIntoDays(todos)
		expect(days).toHaveLength(7)
	})
	it("should categorize tasks under their respective days", () => {

		const [må, ti, on, to, fr, lö, sö] = splitTodosIntoDays(todos);

		expect(må.daytask).toEqual([
			{ id: 1, day: 'må', done: true, late: false, text: 'Göra klart inlämning' },
		]);
		expect(ti.daytask).toEqual([
			{ id: 2, day: 'ti', done: true, late: false, text: 'Lektion i skolan 9-16' },
			{ id: 3, day: 'ti', done: false, late: true, text: 'Övning 1' },
		]);
		expect(on.daytask).toEqual([
			{ id: 4, day: 'on', done: false, late: false, text: 'Repetera lektionen' },
			{ id: 5, day: 'on', done: true, late: false, text: 'Övning 2' }]);
		expect(to.daytask).toEqual([{ id: 6, day: 'to', done: false, late: false, text: 'Distanslektion 9-16' }]);
		expect(fr.daytask).toEqual([]);
		expect(lö.daytask).toEqual([]);
		expect(sö.daytask).toEqual([{ id: 7, day: 'sö', done: false, late: false, text: 'Sista dag för inlämning' }]);
	});
})