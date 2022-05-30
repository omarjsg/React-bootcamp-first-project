import './Expenses.css'
import ExpensesList from '../ExpensesList/ExpensesList';
import Card from '../../UI/Card/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2022');
    const selectYearHandler = (year) => {
        setSelectedYear(year);
    };

    const filteredExpenses = props.expenses.filter((expense => expense.date.getFullYear().toString() === selectedYear));

    return (
        <Card className='expenses'>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesFilter selected={selectedYear} onSelectYear={selectYearHandler} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}
export default Expenses;