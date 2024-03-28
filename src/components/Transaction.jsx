import React from 'react';

function Transaction({ transaction, index , handleDelete}) {
    const { id ,date, description, category, amount } = transaction;

    const onHandleDelete = () => {

        fetch(`http://localhost:3000/transactions/${id}`, {
          method: "DELETE"
        })
          .then(response=>response.json())
          .then(console.log("deleted"))
          .catch(console.error)
    
          handleDelete(id)
      }
    



    
    return (
        <tr className={index % 2 == 0 ? "bg-blue-500" : ""}>
            <td className="border border-gray-300 px-4 py-2">{date}</td>
            <td className="border border-gray-300 px-4 py-2">{description}</td>
            <td className="border border-gray-300 px-4 py-2">{category}</td>
            <td className="border border-gray-300 px-4 py-2">{amount}</td>
            <td className='border border-gray-300 px-4 py-2'>
                
                <button type="button" className="btn btn-red btn btn-circle" onClick={onHandleDelete}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
              </button>

                    
            </td>
        </tr>
    );
}

export default Transaction;
