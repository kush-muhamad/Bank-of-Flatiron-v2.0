import React, {  useEffect ,useState } from 'react'
import TransactionConatiner from './TransactionConatiner'
import TransactionForm from './TransactionForm'
import Header from './Header'
import Search from './Search'



function Page() {
    const url = "http://localhost:3000/transactions"
   const [transactions , setTransactions]= useState([])
   const[searchVal ,setSearchVal] = useState('')


   useEffect(() =>{
    fetch( url)
    .then(response => response.json())
    .then(data => setTransactions(data))

   }, [])

   const searchedTransaction = transactions.filter(eachTransaction => {
    return eachTransaction.description.toLowerCase().includes(searchVal.toLowerCase())
  })

  const handleSearch = (e) => {
    setSearchVal(e.target.value)
  }

  const onAddNewTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction])
  }

  const handleDelete = (deletedTransactionId) => {
    const transactionArrWODeleted = transactions.filter(eachTransaction => {
      return eachTransaction.id !== deletedTransactionId
    }) 
    setTransactions(transactionArrWODeleted)
  } 

  


  return (

    <>
 <Header/>
 <Search handleSearch={handleSearch} />
 <TransactionForm onAddNewTransaction={onAddNewTransaction}/>
 <TransactionConatiner transactions={searchedTransaction} handleDelete={handleDelete}/>
 
 
    </>
  )
}

export default Page