import React from 'react';
import Transaction from './Transaction';

function TransactionContainer({ transactions , handleDelete }) {
    const transactionList = transactions.map(transaction => (
        <Transaction key={transaction.id} transaction={transaction} handleDelete={handleDelete} />
    ));

    return (
        <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-4 py-2 border border-gray-200">Date</th>
                        <th className="px-4 py-2 border border-gray-200">Description</th>
                        <th className="px-4 py-2 border border-gray-200">Category</th>
                        <th className="px-4 py-2 border border-gray-200">Amount</th>
                        <th className="px-4 py-2 border border-gray-200 text-red-600">Delete</th>
                    </tr>
                </thead>
                <tbody>{transactionList}</tbody>
            </table>
        </div>
    );
}

export default TransactionContainer;
