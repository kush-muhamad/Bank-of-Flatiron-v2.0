import React , {useState} from 'react'

function TransactionForm({ onAddNewTransaction }) {

    const initialObject = {
        date: '',
        description: '',
        category: '',
        amount: 0
    }
    
    const [formData, setFormData] = useState(initialObject)


  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({...formData, [name]: value})

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("  http://localhost:3000/transactions ", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      }, 
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newlyAddedTransaction => onAddNewTransaction(newlyAddedTransaction )) //
    .catch(console.error)

    setFormData(initialObject)
  }


  return (
    <div className="w-full mx-auto p-4 bg-gray-100 border-gray-700 rounded-md shadow-lg mb-7">
    <form className="transaction-form space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col flex-grow">
          <input type="date" name="date" className="input input-bordered mt-1 w-full" value={formData.date } onChange={handleChange}/>
        </div>
        <div className="flex flex-col flex-grow">
          <input type="text" name="description" placeholder="Description" className="input input-bordered mt-1 w-full" value={formData.description } onChange={handleChange} />
        </div>
        <div className="flex flex-col flex-grow">
          <input type="text" name="category" placeholder="Category" className="input input-bordered mt-1 w-full" value={formData.category } onChange={handleChange} />
        </div>
        <div className="flex flex-col flex-grow">
          <input type="number" name="amount" placeholder="Amount" step="0.01" className="input input-bordered mt-1 w-full" value={formData.amount } onChange={handleChange} />
        </div>
      </div>
      <div className="flex justify-center">
        <button type="submit" className="btn bg-gray-500 hover:bg-gray-400 text-gray-800">Add Transaction</button>
      </div>
    </form>
  </div>
  
  

  
  
  

  
  
  
  
  
  )
}

export default TransactionForm