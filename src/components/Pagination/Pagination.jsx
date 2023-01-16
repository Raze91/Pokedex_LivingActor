import React from "react";
import "./Pagination.css";
import { useSelector } from "react-redux";

const Pagination = ({ handlePagination }) => {
    const pagination = useSelector((state) => state.pagination);
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
