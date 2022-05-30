import './NewExpense.css';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
    const [allowEditing, setAllowEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random.toString()
        };
        props.onAddExpense(expenseData);
        disableAllowEditingHandler();
    };

    const enableAllowEditingHandler = () => {
        setAllowEditing(true);
    };

    const disableAllowEditingHandler = () => {
        setAllowEditing(false);
    };

    return (
        <div className='new-expense'>
            {!allowEditing && (
                <button onClick={enableAllowEditingHandler}>Add New Expense</button>
            )}
            {allowEditing && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={disableAllowEditingHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;