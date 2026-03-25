import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Budgeting App</h1>
        <p className="text-lg mb-8">
          A budgeting app for college students to help reduce financial stress.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-xl font-semibold mb-2">Main Goal</h2>
            <p>
              Help students organize their income, spending, and savings in a
              simple way.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow p-5">
            <h2 className="text-xl font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Monthly income tracking</li>
              <li>Budget categories</li>
              <li>Savings calculator</li>
              <li>Stress support resources</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow p-5">
          <h2 className="text-2xl font-semibold mb-4">Simple Budget Calculator</h2>
          <BudgetCalculator />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="px-4 py-2 rounded-xl bg-slate-900 text-white" to="/money-tips">
            Money Tips
          </Link>
          <Link className="px-4 py-2 rounded-xl bg-slate-900 text-white" to="/saving-strategies">
            Saving Strategies
          </Link>
          <Link className="px-4 py-2 rounded-xl bg-slate-900 text-white" to="/financial-support">
            Financial Support
          </Link>
        </div>
      </div>
    </div>
  );
}

function BudgetCalculator() {
  const [income, setIncome] = React.useState("");
  const [rent, setRent] = React.useState("");
  const [groceries, setGroceries] = React.useState("");
  const [gas, setGas] = React.useState("");
  const [entertainment, setEntertainment] = React.useState("");
  const [savings, setSavings] = React.useState("");

  const incomeNum = Number(income) || 0;
  const totalExpenses =
    (Number(rent) || 0) +
    (Number(groceries) || 0) +
    (Number(gas) || 0) +
    (Number(entertainment) || 0) +
    (Number(savings) || 0);

  const remaining = incomeNum - totalExpenses;

  const inputClass =
    "w-full border rounded-lg px-3 py-2 mt-1 mb-3";

  return (
    <div>
      <label>
        Monthly Income
        <input className={inputClass} type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
      </label>

      <label>
        Rent / Housing
        <input className={inputClass} type="number" value={rent} onChange={(e) => setRent(e.target.value)} />
      </label>

      <label>
        Groceries / Food
        <input className={inputClass} type="number" value={groceries} onChange={(e) => setGroceries(e.target.value)} />
      </label>

      <label>
        Gas / Transportation
        <input className={inputClass} type="number" value={gas} onChange={(e) => setGas(e.target.value)} />
      </label>

      <label>
        Entertainment
        <input className={inputClass} type="number" value={entertainment} onChange={(e) => setEntertainment(e.target.value)} />
      </label>

      <label>
        Savings
        <input className={inputClass} type="number" value={savings} onChange={(e) => setSavings(e.target.value)} />
      </label>

      <div className="mt-4 space-y-2 text-lg">
        <p><strong>Total Expenses:</strong> ${totalExpenses}</p>
        <p><strong>Remaining Balance:</strong> ${remaining}</p>
      </div>
    </div>
  );
}

function MoneyTips() {
  return (
    <PageShell title="Money Tips">
      <ul className="list-disc pl-5 space-y-2">
        <li>Track spending every week</li>
        <li>Set a savings goal</li>
        <li>Limit impulse purchases</li>
        <li>Use a simple budget rule like 50/30/20</li>
      </ul>
    </PageShell>
  );
}

function SavingStrategies() {
  return (
    <PageShell title="Saving Strategies">
      <ul className="list-disc pl-5 space-y-2">
        <li>Meal prep to cut food costs</li>
        <li>Use student discounts</li>
        <li>Set aside a small amount each paycheck</li>
        <li>Compare subscriptions and cancel extras</li>
      </ul>
    </PageShell>
  );
}

function FinancialSupport() {
  return (
    <PageShell title="Financial Support">
      <ul className="list-disc pl-5 space-y-2">
        <li>Campus financial aid office</li>
        <li>Emergency student support funds</li>
        <li>Local food pantry resources</li>
        <li>Community assistance programs</li>
      </ul>
    </PageShell>
  );
}

function PageShell({ title, children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow p-6">
        <Link to="/" className="text-sm underline">← Back Home</Link>
        <h1 className="text-3xl font-bold mt-3 mb-4">{title}</h1>
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/money-tips" element={<MoneyTips />} />
        <Route path="/saving-strategies" element={<SavingStrategies />} />
        <Route path="/financial-support" element={<FinancialSupport />} />
      </Routes>
    </Router>
  );
}

export default App;
