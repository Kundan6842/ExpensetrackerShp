import React from 'react'
import classes from './ExpenseForm.module.css'

const ExpenseForm = () => {
    return (
		<form>
            <h1>Add Expense</h1>
			<div>
				<div>
					<label for='name'>Description</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
					></input>
				</div>
                <div>
					<label for='name'>Category</label>
					<input
						required='required'
						type ='text'
						className='form-control'
						id='name'
					></input>
				</div>
				<div>
					<label for='cost'>Money</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
					></input>
				</div>

			</div>
            <div>
            	<div>
					<button type='submit' >
						Save
					</button>
				</div>
            </div>
		</form>
	);
}

export default ExpenseForm
