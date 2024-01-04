import React, { useState } from "react";

export default function AddTransactions({id, addTransaction}) {

  //const Balance 
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0)
  const [date, setDate] = useState("")
  const [transaction, setTransaction] = useState("")
  const onSubmit = (event) => {
      event.preventDefault()
      const newTransaction = {
          id: id,
          text: text,
          amount: transaction==='credit'? amount:-1*amount,
          date: date
      }
      addTransaction(newTransaction)
      setText("")
      setAmount(0)
      setDate("")
  }
  const handleTransactiontype = (event) => {
    setTransaction(event.target.value);
  };
  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label>Text</label>
          <input value={text} onChange={(event) => setText(event.target.value)} placeholder="Enter Text..." type="text" />
        </div>
        <div className="form-control">
          <span style={{ display: 'flex', justifyContent: 'space-around' }}>
            <label>
              <input
                type="radio"
                value="credit"
                checked={transaction === 'credit'}
                onChange={handleTransactiontype}
              />
              Credit
            </label>
            <label>
              <input
                type="radio"
                value="debit"
                checked={transaction === 'debit'}
                onChange={handleTransactiontype}
              />
              debit
            </label>
          </span>
          
        </div>
        <div className="form-control">
          <label>Amount</label>
          <input value={amount} onChange={(event) => setAmount(event.target.value)} placeholder="Enter Amount..." type="number" />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input value={date} onChange={(event) => setDate(event.target.value)} placeholder="Enter Date..." type="date" />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  );
}