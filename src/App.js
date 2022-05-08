import axios from "axios";
import { useState, useEffect } from "react";
import LogDisplay from "./component/LogDisplay";
import LogEdit from "./component/LogEdit";

function App() {
  const [logs, setLogs] = useState([]);
  const [editingLog, setEditingLog] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8080/transactions")
      .then((res) => {
        setLogs(res.data.transactions);
      })
      .catch((err) => console.log(err));
  }, []);

  const addLog = (obj) =>
    axios
      .post("http://localhost:8080/transactions", obj)
      .then((res) => {
        const newLogs = [...logs];
        newLogs.unshift(res.data.transaction);
        newLogs.sort((a, b) => (a.date < b.date ? 1 : -1));
        setLogs(newLogs);
        return true;
      })
      .catch((err) => {
        console.log(err);
        return false;
      });

  const deleteLog = (id) => {
    axios
      .delete(`http://localhost:8080/transactions/${id}`)
      .then(() => {
        const idx = logs.findIndex((item) => item.id === id);
        if (idx !== -1) {
          const newLogs = [...logs];
          newLogs.splice(idx, 1);
          setLogs(newLogs);
        }
      })
      .catch((err) => console.log(err));
  };

  const updateLog = (id, obj) =>
    axios
      .put(`http://localhost:8080/transactions/${id}`, obj)
      .then((res) => {
        const idx = logs.findIndex((item) => item.id === id);
        if (idx !== -1) {
          const newLogs = [...logs];
          newLogs[idx] = res.data.transaction;
          setLogs(newLogs);
        }
      })
      .catch((err) => console.log(err));

  const deSelectLog = () => {
    setEditingLog(null);
  };

  return (
    <div className="container mw-md">
      <LogEdit
        addLog={addLog}
        editingLog={editingLog}
        deSelectLog={deSelectLog}
        updateLog={updateLog}
      />
      <LogDisplay logs={logs} deleteLog={deleteLog} selectLog={setEditingLog} />

      <footer className="text-white-50 text-center py-3 fs-7">
        Copyright © 2021 Flyinggiraffe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
