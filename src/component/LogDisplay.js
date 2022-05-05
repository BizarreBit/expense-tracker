import DisplayFilter from "./DisplayFilter";
import DisplayList from "./DisplayList";
import DisplayPaging from "./DisplayPaging";
import DisplaySummary from "./DisplaySummary";

function LogDisplay() {
    return(
        <>
        <DisplaySummary />
        <DisplayFilter />
        <DisplayPaging />
        <DisplayList />
        </>
    );
}

export default LogDisplay;