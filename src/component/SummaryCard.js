import {formatThaiCurrency} from "../services/currencyService"

function SummaryCard({ bg = "info", title = "", value = 0 }) {
  return (
    <div className="col-sm-4">
      <div className={`bg-${bg} rounded-2 p-3`}>
        <p className="text-black-50">{title}</p>
        {/* <h5 className="text-white">{`฿${value.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`}</h5> */}
        <h5 className="text-white">{formatThaiCurrency(value)}</h5>
      </div>
    </div>
  );
}

export default SummaryCard;
