import React from 'react'

const TransactionMenu = ({onIncome, onExpense}) => {
    const [menu, setMenu] = React.useState(false);
    const [data,setData] = React.useState({});
    const [amount,setAmount] = React.useState();
    const [type,setType] = React.useState("");
    const [title,setTitle] = React.useState("");
    const [transactionType, setTransactionType] = React.useState("expense");

    const toggleButton = () => {
      setMenu(!menu);     
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const info = {
        id: data.length+1,
        amount: amount,
        title: title,
        transactionType: transactionType
      }

      if(!amount || !title){
        alert("Please fill all the fields");
        return;
      }
      if(transactionType === "income"){
        onIncome(Number(amount));
      }else{
        onExpense(Number(amount));
      }
      //add the data to the last data array 
      setData((prevData) => [...prevData, data]);
      //reset all the input to the default variable
      setAmount("");
      setTitle("");
      setTransactionType("expense");
      //turn off the menu so the input will not appear
      setMenu(!menu);
      console.log(data);
      
    }
  return (
    <div>
      <div className='mt-6 flex flex-col items-center'>
        <button className='bg-black text-white p-2 rounded-lg hover:bg-gray-700 mb-6'
          onClick={toggleButton}
        >
          Add Transaction
        </button>
        {menu && (
          <div className='flex item-center'>
            <div className='flex flex-col text-black gap-2'>
              <input 
              required
              type="number"
              placeholder='Enter Amount'
              className='p-2 border rounded-lg border-black placeholder:text-gray-700'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              />

              <input 
              required
              type="text"
              placeholder='Enter Title'
              className='p-2 border rounded-lg border-black placeholder:text-gray-700'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />

              <select 
              className='p-2 border rounded-lg'
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>

              <button className='bg-black text-white p-2 rounded-lg hover:bg-gray-700 mb-2'
              onClick={handleSubmit}
              >Add</button>
            </div>
          </div>
        )}
      </div>  
      {data.length >0 && data.map((dt) =>{
        <div className='flex'>
        <div className={`flex w-[200px] justify-between flex-row text-white gap-4 mb-2 p-2 font-bold rounded-md
          ${dt.transactionType==='expense'? 'bg-red-500':'bg-green-800'}
          `}>
            <p>{dt.title}</p>
            <p>{dt.amount}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default TransactionMenu

