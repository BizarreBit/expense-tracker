import { useState, useEffect } from "react";
import EditForm from "./EditForm";

function LogEdit({ addLog, editingLog, deSelectLog, updateLog }) {
  const [isShowForm, setIsShowForm] = useState(false);
  
  const handleClick = () => {
    setIsShowForm((prev) => !prev);
    editingLog && deSelectLog();
  };

  const closeForm = () => {
    setIsShowForm(false);
    editingLog && deSelectLog();
  };

  useEffect(() => {
    editingLog && setIsShowForm(true);
  }, [editingLog]);

  return (
    <>
      <div className="d-grid mt-3">
        <button onClick={handleClick} className="btn btn-outline-warning">
          {isShowForm ? "Cancel" : "Create Transaction"}
        </button>
      </div>
      {isShowForm && <EditForm addLog={addLog} editingLog={editingLog} closeForm={closeForm} updateLog={updateLog} />}
    </>
  );
}

export default LogEdit;
