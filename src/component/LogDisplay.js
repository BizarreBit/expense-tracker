import { useState, useEffect } from "react";
import DisplayFilter from "./DisplayFilter";
import DisplayList from "./DisplayList";
import DisplayPaging from "./DisplayPaging";
import DisplaySummary from "./DisplaySummary";

function LogDisplay({ logs, deleteLog, selectLog }) {
  const [search, setSearch] = useState({ text: "", month: "", year: "" });
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, perPage]);

  const filteredLogs = !(search.text || search.month || search.year)
    ? logs
    : logs.filter(
        (item) =>
          (!search.text ||
            item.payee.toLowerCase().includes(search.text.toLowerCase()) ||
            (item.comment &&
              item.comment
                .toLowerCase()
                .includes(search.text.toLowerCase()))) &&
          (!search.month || item.date.slice(5, 7) === search.month) &&
          (!search.year || item.date.slice(0, 4) === search.year)
      );
  const displayLogs = filteredLogs.slice(
    perPage * (currentPage - 1),
    perPage * currentPage
  );
  return (
    <>
      <DisplaySummary logs={logs} />
      <DisplayFilter search={search} setSearch={setSearch} />
      <DisplayPaging
        totalItem={filteredLogs.length}
        perPage={perPage}
        setPerPage={setPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <DisplayList
        logs={displayLogs}
        deleteLog={deleteLog}
        selectLog={selectLog}
      />
    </>
  );
}

export default LogDisplay;
