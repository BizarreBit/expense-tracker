import { formatShortMonthShortYear } from "../services/dateService";
import { formatThaiCurrency } from "../services/currencyService";

function ListItem({ log, deleteLog, selectLog }) {
  const {
    id,
    payee,
    amount,
    date,
    category: { name, type },
  } = log;
  const logDate = new Date(date);

  return (
    <li
      keys={id}
      className={`list-group-item d-flex justify-content-between align-items-center bd-callout bd-callout-${
        type === "EXPENSE" ? "danger" : "success"
      }`}
    >
      <div
        onClick={() => selectLog(log)}
        className="transaction-detail d-flex flex-fill me-4"
      >
        <div className="transaction-date-card border border-1 border-dark rounded-2 bg-warning p-2 text-center">
          <p className="p-0 m-0 fs-7 text-black-50">
            {/* {logDate.toLocaleDateString(undefined, {
              month: "short",
              year: "2-digit",
            })} */}
            {formatShortMonthShortYear(logDate)}
          </p>
          <p className="p-0 m-0">{logDate.getDate()}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-fill ps-4">
          <div>
            <p className="mb-1 f-5 fw-bold">{payee}</p>
            <p className="mb-0 text-black-50 fs-7">{name}</p>
          </div>
          <span
            className={`badge bg-${type === "EXPENSE" ? "danger" : "success"}`}
          >
            {formatThaiCurrency(amount)}
          </span>
        </div>
      </div>
      <button
        onClick={() => deleteLog(id)}
        className="btn btn-link text-secondary p-0 border-0"
      >
        <i className="bi bi-x-circle" />
      </button>
    </li>
  );
}

export default ListItem;
