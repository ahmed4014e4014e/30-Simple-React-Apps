/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react'
import Title from "../components/Title"
import ExpensesForm from "./components/ExpensesForm"
import ExpensesList from './components/ExpensesList'
import Alert from "./components/Alert"
import { BudgetStyle } from './components/styles/BudgetStyle'
import { v4 as uuidV4 } from "uuid"
const initialExpenses = localStorage.getItem("expenses") ? JSON.parse(localStorage.getItem("expenses")) : [];


export default function ExpensesCalcApp() {
  // STATE VALUES
  // All expenses
  const [expenses, setExpenses] = useState(initialExpenses);
  // Single Expense

  // Single Date
  const [date, setDate] = useState("");
  // Single Amount
  const [amount, setAmount] = useState("");
  // Single Charge
  const [charge, setCharge] = useState("");
  // Budget 
  const [budget, setBudget] = useState("");
  // Id's
  const [id, setId] = useState(0);
  // Edit?
  const [edit, setEdit] = useState(false);
  // Alert
  const [alert, setAlert] = useState({ show: false });
  // Handlers

  // handle Budget
  const changeBudget = (e) => {
    setBudget(inputBudget.current.value);
  };
  // handle Charge
  const handleCharge = (e) => {
    setCharge(e.target.value);
  };
  // handle Date
  const handleDate = (e) => {
    setDate(e.target.value);
  }
  // handle Amount
  const handleAmount = (e) => {
    setAmount(e.target.value);
  }
  // handle Alert

  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false })
    }, 3000);
  };
  // Handle Submit

  const handleSubmit = (e) => {
    e.preventDefault();
    if (date !== "" && charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, date, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
        // todo: Alert
        handleAlert({ type: "success", text: "Expense Edited" });
      } else {
        const singleExpense = { id: uuidV4(), date, charge, amount };
        setExpenses([...expenses, singleExpense]);
        // todo: Alert
        handleAlert({ type: "success", text: "Expense added" });
      }
      setCharge("");
      setAmount("");
      setDate("");
    } else {
      // todo: Alert
      handleAlert({
        type: "danger",
        text: "Please complete all fields",
      });
    }
  };
  let inputBudget = useRef(null);
  useEffect(() => {
    inputBudget.current.value === "" && inputBudget.current.focus();
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Handle Clear all Expenses
  const clearAllExpenses = () => {
    setExpenses([]);
    // todo: Alert
    handleAlert({ type: "danger", text: "All expenses deleted" })
  };
  // Handle Delete one expense 

  const handleDelete = (id) => {
    if (window.confirm("Delete expense?")) {
      let filteredExpenses = expenses.filter((expense) => expense.id !== id);
      setExpenses(filteredExpenses);
      // todo: Alert
      handleAlert({ type: "danger", text: "Expense deleted" });
    }
  };
  const handleEdit = (id) => {
    let editedExpense = expenses.find((expense) => expense.id === id);
    let { charge, amount, date } = editedExpense;
    setCharge(charge);
    setAmount(amount);
    setDate(date);
    setId(id);
    setEdit(true);
  };

  return (
    <main className='container'>
      <Title text={"Expenses Calculator"} />        
      {alert.show && <Alert type={alert.type} text={alert.text} />}


      <section style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "25px", margin: "1rem" }}>
        <aside>

          <ExpensesForm
            date={date}
            handleDate={handleDate}
            charge={charge}
            handleCharge={handleCharge}
            amount={amount}
            handleAmount={handleAmount}
            handleSubmit={handleSubmit}
            edit={edit}
          />

          <section className="card mt-2 bg-primary text-light text-right">
            <div className="card-body">
              <BudgetStyle>
                <h3>Budget : $</h3>
                <input type="number" value={budget} onChange={changeBudget} ref={inputBudget} />
              </BudgetStyle>
              <h3 className="mb-1">
                Total expenses: ${" "}
                {expenses.reduce((total, expense) => {
                  return (total += parseInt(expense.amount, 10))
                }, 0)}
              </h3>
              {/* Calc economies */}
              <h3>Economies: $ {calcEconomies(budget, expenses)}</h3>
            </div>
          </section>
        </aside>
        <section>
          <ExpensesList
            expenses={expenses}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleClearAllExpenses={clearAllExpenses}
          />
        </section>
      </section>
    </main>
  )
}
function calcEconomies(budget, expenses) {
  return (
    budget -
    expenses.reduce((total, expense) => {
      return (total += parseInt(expense.amount, 10))
    }, 0)
  );
}