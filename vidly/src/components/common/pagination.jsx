import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from "lodash";
import propTypes from 'prop-types';

const Pagination = (props) => {
    const {itemCount, pageSize, onPageChange, currentPage } = props;

    const pagesCount = Math.ceil(itemCount / pageSize);
    const pages = _.range(1, pagesCount + 1);

    if (pages.length === 1)
            return null;

    return (
        

        <nav>
        <ul className="pagination">
            {pages.map(page => <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
                                            <a className="page-link" onClick={() => onPageChange(page)}>{page}</a></li>)}
        </ul>
        </nav>    
    )
};

Pagination.propTypes = {
    itemCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired
};

export default Pagination;