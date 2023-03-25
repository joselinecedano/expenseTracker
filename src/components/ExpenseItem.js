import './ExpenseItem.css'

const ExpenseItem = () => {
    const expenseDate = new Date(2023, 5, 10);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 1800.00;
  return (
    <div className='expense-item'>
      <div> {expenseDate.toISOString()} </div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
      </div>
      <div className='expense-item__price'>${expenseAmount}</div>
    </div>
  );
};

export default ExpenseItem;
