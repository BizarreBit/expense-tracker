import ListItem from "./ListItem";

function DisplayList({ logs, deleteLog , selectLog}) {
  return (
    <ul className="list-group">
      {logs.map((log) => (
        <ListItem key={log.id} log={log} deleteLog={deleteLog} selectLog={selectLog} />
      ))}
    </ul>
  );
}

export default DisplayList;
