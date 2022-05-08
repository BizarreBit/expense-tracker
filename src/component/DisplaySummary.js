import SummaryCard from "./SummaryCard";

function DisplaySummary({ logs }) {
  //   const sumExpense = logs.reduce((pre, cur) => (cur.category.type === "EXPENSE" ? +cur.amount + pre : pre), 0)
  //   const sumIncome = logs.reduce((pre, cur) => (cur.category.type === "INCOME" ? +cur.amount + pre : pre), 0)
  // let sumExpense = 0;
  // let sumIncome = 0;
  // logs.forEach(item => {item.category.type === "EXPENSE" ? sumExpense+= +item.amount : sumIncome+= +item.amount})

  const [sumIncome, sumExpense] = logs.reduce(
    (pre, item) => {
      item.category.type === "EXPENSE"
        ? (pre[1] += item.amount)
        : (pre[0] += item.amount);
      return pre;
    },
    [0, 0]
  );

  return (
    <div className="row g-3 mt-2">
      <SummaryCard bg="info" title="Net Worth" value={sumIncome - sumExpense} />
      <SummaryCard bg="success" title="Income" value={sumIncome} />
      <SummaryCard bg="danger" title="Expense" value={sumExpense} />
    </div>
  );
}

export default DisplaySummary;
