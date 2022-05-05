import SummaryCard from "./SummaryCard";

function DisplaySummary() {
    return(
        <div className="row g-3 mt-2">
            <SummaryCard bg="info" title="Net Worth" value={30000}/>
            <SummaryCard bg="success" title="Income" value={15000}/>
            <SummaryCard bg="danger" title="Expense" value={2000}/>
        </div>
    );
}

export default DisplaySummary;