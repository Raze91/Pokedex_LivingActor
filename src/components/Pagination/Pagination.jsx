const Pagination = ({ pagination, handlePagination }) => {
    return (
        <div className="pagination-ctnr">
            <button
                disabled={pagination.prev === null}
                onClick={() => handlePagination(pagination.prev)}
            >
                Prev
            </button>
            <button
                disabled={pagination.next === null}
                onClick={() => handlePagination(pagination.next)}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
