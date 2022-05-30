import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../UI/Card/Card';

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price-container'>
                        <div className='expense-item__price'>
                            {props.amount}
                        </div>
                        <p className='expense-item__currency'>{'SAR'}</p>
                    </div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;