import { useState, useEffect } from "react";
import axios from "axios";
import validator from "validator";

const initialInput = {
  type: "EXPENSE",
  payee: "",
  categoryId: "",
  amount: "",
  date: "",
  comment: "",
};

function EditForm({ addLog, editingLog, closeForm, updateLog }) {
  const [input, setInput] = useState(initialInput);

  const [error, setError] = useState({});

  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((res) => {
        const newExpenses = res.data.categories.filter(
          (item) => item.type === "EXPENSE"
        );
        setExpenses(newExpenses);
        setIncomes(
          res.data.categories.filter((item) => item.type === "INCOME")
        );
        // !editingLog && setInput((prev) => ({ ...prev, category: newExpenses[0].id }));
      })
      .catch((err) => console.log(err));
  }, []);

  const options =
    input.type === "EXPENSE"
      ? expenses.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))
      : incomes.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ));

  useEffect(() => {
    editingLog &&
      setInput({
        type: editingLog.category.type,
        payee: editingLog.payee,
        categoryId: editingLog.category.id,
        amount: editingLog.amount.toString(),
        date: editingLog.date.slice(0, 10),
        comment: editingLog.comment,
      });
  }, [editingLog]);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value.trim() }));
    if (e.target.name === "type")
      setInput((prev) => ({ ...prev, categoryId: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newError = {
      payee: validator.isEmpty(input.payee) ? "Payee is required" : "",
      category: validator.isEmpty(input.categoryId)
        ? "Category is required"
        : "",
      amount: validator.isEmpty(input.amount)
        ? "Amount is required"
        : !validator.isDecimal(input.amount) || input.amount <= 0
        ? "Amount must be a positive number"
        : "",
      date: !validator.isDate(input.date) ? "Date is required" : "",
    };
    setError(newError);

    Object.values(newError).every((value) => value === "") &&
      (editingLog
        ? updateLog(editingLog.id, { ...input, amount: +input.amount }).then(closeForm())
        : addLog({ ...input, amount: +input.amount }).then(
            (isSubmited) => isSubmited && setInput(initialInput)
          ));
  };

  return (
    <div className="border bg-white rounded-2 p-3 mt-3">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-12">
          <input
            type="radio"
            className="btn-check"
            id="cbx-expense"
            name="type"
            value="EXPENSE"
            onChange={handleChange}
            checked={input.type === "EXPENSE"}
          />
          <label
            className="btn btn-outline-danger rounded-0 rounded-start"
            htmlFor="cbx-expense"
          >
            Expense
          </label>
          <input
            type="radio"
            className="btn-check"
            id="cbx-income"
            name="type"
            value="INCOME"
            onChange={handleChange}
            checked={input.type === "INCOME"}
          />
          <label
            className="btn btn-outline-success rounded-0 rounded-end"
            htmlFor="cbx-income"
          >
            Income
          </label>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Payee</label>
          <input
            name="payee"
            value={input.payee}
            onChange={handleChange}
            type="text"
            className={`form-control ${error.payee && "is-invalid"}`}
          />
          <div className="invalid-feedback">{error.payee}</div>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Category</label>
          <select
            name="categoryId"
            value={input.categoryId}
            onChange={handleChange}
            className={`form-select ${error.category && "is-invalid"}`}
          >
            <option value="" disabled>
              Select
            </option>
            {options}
          </select>
          <div className="invalid-feedback">{error.category}</div>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Amount</label>
          <input
            name="amount"
            value={input.amount}
            onChange={handleChange}
            type="text"
            className={`form-control ${error.amount && "is-invalid"}`}
          />
          <div className="invalid-feedback">{error.amount}</div>
        </div>
        <div className="col-sm-6">
          <label className="form-label">Date</label>
          <input
            name="date"
            value={input.date}
            onChange={handleChange}
            type="date"
            className={`form-control ${error.date && "is-invalid"}`}
          />
          <div className="invalid-feedback">{error.date}</div>
        </div>
        <div className="col-12">
          <label className="form-label">Comment</label>
          <textarea
            name="comment"
            value={input.comment}
            onChange={handleChange}
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <div className="col-12">
          <div className="d-grid mt-3">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
