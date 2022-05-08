function DisplayFilter({ search, setSearch }) {
  const handleChange = (e) =>
    setSearch({ ...search, [e.target.name]: e.target.value });
  const handleClick = (e) => setSearch({ ...search, [e.target.name]: "" });
  return (
    <div className="mt-4">
      <div className="row g-3">
        <div className="col-sm-6">
          <div className="input-group">
            <input
              type="text"
              name="text"
              value={search.text}
              onChange={handleChange}
              className="form-control form-control-sm"
              placeholder="Enter to search"
            />
            <button name="text" onClick={handleClick} className="btn btn-sm btn-outline-light">x</button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input-group">
            <select
              name="month"
              value={search.month}
              onChange={handleChange}
              className="form-select form-select-sm"
            >
              <option value="">Month</option>
              <option value="01">Jan</option>
              <option value="02">Feb</option>
              <option value="03">Mar</option>
              <option value="04">Apr</option>
              <option value="05">May</option>
              <option value="06">Jun</option>
              <option value="07">Jul</option>
              <option value="08">Aug</option>
              <option value="09">Sep</option>
              <option value="10">Oct</option>
              <option value="11">Nov</option>
              <option value="12">Dec</option>
            </select>
            <button name="month" onClick={handleClick} className="btn btn-sm btn-outline-light">x</button>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="input-group">
            <select
              name="year"
              value={search.year}
              onChange={handleChange}
              className="form-select form-select-sm"
            >
              <option value="">Year</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
            <button name="year" onClick={handleClick} className="btn btn-sm btn-outline-light">x</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayFilter;
