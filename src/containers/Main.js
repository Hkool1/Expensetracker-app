import React, { Component } from "react";
import { connect } from "react-redux";
import Balance from "../components/Balance";
import AddTransactions from "../components/AddTransaction";
import { addTransaction, deleteTransaction } from "../redux/action";
import TransactionsList from "../components/TransactionList";
import IncomeExpense from "../components/IncomeExpense";

export class Main extends Component {
  render() {
    const { transactions, addTransaction, deleteTransaction } = this.props;
    return (
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions={transactions}/>
        <TransactionsList transactions={transactions} deleteTransaction={(id) => deleteTransaction(id)}/>
        <AddTransactions
          addTransaction={(transaction) => addTransaction(transaction)}
          id={transactions[0] ? transactions[0].id + 1 : 1}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  transactions: state.transactions,
});

const mapDispatchToProps = (dispatch) => ({
  addTransaction: (transaction) => dispatch(addTransaction(transaction)),
  deleteTransaction: (id) => dispatch(deleteTransaction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);