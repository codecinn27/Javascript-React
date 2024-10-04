import React from 'react'
import TransactionMenu from './TransactionMenu'

function Balance() {

    const [balance, setBalance] = React.useState(1000);
    const [income, setIncome] = React.useState(20);
    const [expense, setExpense] = React.useState(3440);

    const onIncome = (amount) => {
        setIncome(income + amount);
        setBalance(balance + amount);
    }

    const onExpense = (amount) => {
        setExpense(expense + amount);
        setBalance(balance - amount);
    }

    

  return (
    <div className='flex flex-col items-center gap-2'>
      <p className='text-2xl mt-16'>Balance: <span
        className='font-bold'
      >{balance}</span></p>

      <div className='flex flex-row space-x-8 mt-5 text-white'>
        <p className='bg-green-800 p-2 rounded-xl'>
            Income: <span className='font-bold'>{income}</span>
        </p>
        <p className='bg-red-500 p-2 rounded-xl'>
            Expense: <span className='font-bold'>{expense}</span>
        </p>
      </div>

      <TransactionMenu onIncome={onIncome} onExpense={onExpense} name={"react"}/>
    </div>
  )
}

export default Balance
