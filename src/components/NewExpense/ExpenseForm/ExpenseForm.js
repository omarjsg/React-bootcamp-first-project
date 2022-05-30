import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    //Seperate state approach
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    //Single state approach
    // const [userInput, setUserInput] = useState({
    //     title: '',
    //     amount: '',
    //     date: ''
    // });

    //To save the title value.
    const titleChangeHandler = event => {
        setTitle(event.target.value);
        console.log('Title has been updated')
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         title: event.target.value
        //     };
        // });
    };

    //To save the amount value.
    const amountChangeHandler = event => {
        setAmount(event.target.value);
        console.log('Amount has been updated')
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         amount: event.target.value
        //     };
        // });
    };

    //To save the date value.
    const dateChangeHandler = event => {
        setDate(event.target.value);
        console.log('Date has been updated');
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         date: event.target.value
        //     };
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: +amount,
            date: new Date(date)
        };
        props.onSaveExpenseData(expenseData);
        resetFields();
    };

    const resetFields = () => {
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <div className='new-expense__control-amount'>
                        <input type="number" min='0.01' step='0.01' value={amount} onChange={amountChangeHandler} />
                        <label> SAR</label>
                    </div>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min='2019-01-01' max={formatDate(new Date())} value={date} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

//to format the date to yyyy-mm-dd
const formatDate = (date) => {
    let d = date,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
};

export default ExpenseForm;