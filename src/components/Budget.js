import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    
    // Calculate the total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    // Handle budget input change with validation
    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10);

        if (updatedBudget < totalExpenses) {
            alert(`You can't reduce the budget value lower than the spending!`);
            setNewBudget(updatedBudget); // Reset to the previous valid budget
        } else {
            setNewBudget(updatedBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: updatedBudget,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
                style={{ marginLeft: '10px', marginRight: '10px' }}
            />
        </div>
    );
};

export default Budget;
