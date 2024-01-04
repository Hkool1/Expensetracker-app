import React from "react";

export default function Balance({ transactions }) {
  const amount = transactions.map((transaction) => Number(transaction.amount));
  const total = amount.reduce((acc, item) => acc + item, 0);
  if (total < 0) {
    alert('Transaction amount exceeds Balance amount');
  }
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>{total} Rs/-</h1>
    </div>
  );
}