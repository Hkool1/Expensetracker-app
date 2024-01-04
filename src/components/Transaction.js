import React from "react";

export default function Transaction({ transaction, deleteTransaction }) {
  
  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      {transaction.text}
      <span>
        <span style={{ marginRight: 8 }}>{transaction.date}</span>
          {Math.abs(transaction.amount)} Rs/-
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
}
