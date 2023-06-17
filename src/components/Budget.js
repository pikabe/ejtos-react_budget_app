import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [currentBudget, setCurrentBudget] = useState(budget);

    const updateCurrentBudget = (event) => {
        let totalSpent = expenses.reduce((total, currentExp) => {
            total = total + currentExp.cost;
            return total;
        }, 0);

        if (event.target.value > 20000) {
            alert("Budget cannot exceed 20000");
        }
        else if (event.target.value < totalSpent) {
            alert("You cannot reduce the budget value lower than the spending");
        }
        else {
            setCurrentBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
            console.log(event.target.value); // Log the updated budget value
        }
    }

    return (
        <div className='alert alert-secondary'>
            {/* <span style={{ fontSize: 16 }}>Budget: {currency}
                <input
                    type='number'
                    step='10'
                    id='budgetInput'
                    name='budgetInput'
                    value={currentBudget}
                    style={{ size: 10 }}
                    onChange={(event) => updateCurrentBudget(event)}
                />
            </span> */}
             
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '2rem',fontSize: 16 }}>
            Budget:<div style={{ marginLeft: '0.5rem' }}>{currency}</div>
                <input
                    type='number'
                    step='10'
                    id='budgetInput'
                    name='budgetInput'
                    value={currentBudget}
                    style={{ size: 10 }}
                    onChange={(event) => updateCurrentBudget(event)}
                />
            </div>
        </div>
    );
};

export default Budget;
