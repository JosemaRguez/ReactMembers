import React from 'react'
import '../../styles/styles.css'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href={`/list/${parseInt(props.currentPage) - 1}`} tabIndex="-1">Previous</a>
                </li>
                {props.pageNumbers.map(page => {
                    if (page !== parseInt(props.currentPage)) {
                        return (
                            <Link to={`/list/${page}`} className="page-item" key={page}>
                                <span className="page-link">
                                    {page}
                                </span>
                            </Link>)
                    }
                    else {
                        return (
                            <Link to={`/list/${page}`} className="page-item active" key={page}>
                                <span className="page-link">
                                    {page}
                                    <span className="sr-only">(current)</span>
                                </span>
                            </Link>)
                    }
                }
                )}

                <li className="page-item">
                    <a className="page-link" href={`/list/${parseInt(props.currentPage) + 1}`} >Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;


