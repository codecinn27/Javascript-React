import React from 'react'

const TransactionMenu = ({onIncome, onExpense}) => {
    const [menu, setMenu] = React.useState(false);

    const toggleButton = () => {
      setMenu(!menu);
      console.log(menu);
      
    }

  return (
    <div>
      <div className='mt-6 flex flex-col items-center'>
        <button className='bg-black text-white p-2 rounded-lg hover:bg-gray-700 mb-6'
          onClick={toggleButton}
        >
          Add Trasaction
        </button>
        {menu && (
          <div className='flex item-center'>
            <div className='flex flex-col text-black gap-2'>
              <input type="number"
              placeholder='Enter Amount'
              className='p-2 border rounded-lg border-black placeholder:text-gray-700'
              />

              <input type="text"
              placeholder='Enter Title'
              className='p-2 border rounded-lg border-black placeholder:text-gray-700'
              />

              <select 
              className='p-2 border rounded-lg'
              name="" id="">
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
            </div>
          </div>
        )}
      </div>  
    </div>
  )
}

export default TransactionMenu

