import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
    if (props.expenses.length === 0) {
        return (
            <p className='no-expenses-message'>No expenses found</p>
        );
    }
    return (<ul className='expenses-list'>
        {props.expenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    date={expense.date}
                    amount={expense.amount} />
            );
        })}
    </ul>);
};

export default ExpensesList;