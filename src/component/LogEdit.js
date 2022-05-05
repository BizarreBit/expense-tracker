import EditForm from "./EditForm";

function LogEdit() {
  return (
    <>
      <div className="d-grid mt-3">
        <button className="btn btn-outline-warning">Create Transaction</button>
      </div>
      <EditForm />
    </>
  );
}

export default LogEdit;
