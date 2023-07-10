import './ExpenseDate.css';

function ExpenseDate(props) {
    const day = props.date.toLocaleString('en-US', {month: 'long'});
    const month = props.date.toLocaleString('en-US',{day: '2-digit'});
    // const year = props.date.getFullYear();

    return(
        <div className='expense-date'>
            <div className='expense-date__day'>{month}</div>
            {/* <div className='expense-date__month'>{year}</div> */}
            <div className='expense-date__year'>{day}</div>
        </div>
    )
}

export default ExpenseDate;