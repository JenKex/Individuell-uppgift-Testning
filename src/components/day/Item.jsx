import { useState } from 'react'

const Item = ({ item }) => {
	const [editMode, setEditMode] = false 
	const [editText, setEditText] = ''

	function handleDelete(item){
		deleteItem(item.id)
	}

	let itemClass = ''
	if( item.done ) itemClass += 'done'
	if( item.late ) itemClass += 'due'

	const handleChange = (item) => { /* TODO */

	//set => state: ChangedObject
	toggleTodo(item.id)
	 }

	//  const handleEdit = (item) => {
	// 	{...item, 
	//	item.text : editText}
	//  }

	return (
		<div className="item">
			{editMode ? <>
			<input type="text" onChange={(e) => setEditText(e.target.value)}></input>
			</> : <> <input type="checkbox" checked={item.done} onChange={() => handleChange(item)} />
			<label className={itemClass} onClick={() => handleChange(item)}>
				{item.text}
			</label> 
			{/* <span title="Snooza">💤</span> */}
			<span title="Ändra" onClick={() => setEditMode(true)}>✍️</span>
			<span title="Ta bort">🗑️</span>
			</>}
		</div>
	)
}

export default Item
