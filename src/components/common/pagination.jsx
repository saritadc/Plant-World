import React from "react";
import _ from 'lodash';
// import PropTypes from 'prop-types';

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  const pagesCount = Math.ceil(itemsCount / pageSize);
  if(pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  console.log(pagesCount, itemsCount, pages, currentPage );

  return (
    <div className="pagination">
      <nav>
        <ul>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a onClick={() => onPageChange(page)} className="page-link">
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
