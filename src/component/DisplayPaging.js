function DisplayPaging({
  totalItem,
  perPage,
  setPerPage,
  currentPage,
  setCurrentPage,
}) {
  const totalPage = Math.ceil(totalItem / perPage);
  let pageNum = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNum.push(i);
  }

  const handleClickPageNum = (e) => {
    +e.target.value !== currentPage && setCurrentPage(+e.target.value);
  };

  return (
    <div className="mt-3 d-flex justify-content-between">
      <div className="d-flex align-items-center mb-3">
        <div>
          <select
            type="text"
            value={perPage}
            onChange={(e) => setPerPage(+e.target.value)}
            className="form-select form-select-sm"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <span className="text-white-50 mx-2 fs-7">
          {`Showing ${perPage * (currentPage - 1) + 1} to ${
            currentPage === totalPage
              ? totalItem
              : currentPage * perPage
          } of ${totalItem} transactions`}
        </span>
      </div>
      <nav>
        <ul className="pagination pagination-sm">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="page-link"
            >
              &laquo;
            </button>
          </li>
          {pageNum.map((el) => (
            <li
              key={el}
              className={`page-item ${el === currentPage ? "active" : ""}`}
            >
              <button
                value={el}
                onClick={handleClickPageNum}
                className="page-link"
              >
                {el}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPage ? "disabled" : ""
            }`}
          >
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="page-link"
            >
              &raquo;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default DisplayPaging;
