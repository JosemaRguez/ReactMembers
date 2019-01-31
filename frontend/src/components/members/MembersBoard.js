import React, { Component } from 'react'
import '../../styles/styles.css'
import MembersList from './MembersList'
import { Link } from 'react-router-dom'

class MembersBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumbers: [1, 2, 3, 4, 5],
            listOfMembers: [],
            isLoading: true,
            currentPage: 1
        }
    }
    getMembersPage = (page) => {
        console.log('API running')
        this.setState({ isLoading: true })

        fetch(`/getMembers?page=${page}`)
            .then(res => res.json())
            .then(members => {
                this.setState({
                    listOfMembers: [...this.state.listOfMembers, members],
                    isLoading: false
                })
            })
            .catch((err) => {
                console.log(err)
            })

            this.setState({ isLoading: true })
    }

    handleUpdate = (e) => {
        this.getMembersPage(e.target.innerHTML)
    }

    componentDidMount = () => {
        console.log('starting')
        this.getMembersPage(this.props.match.params.page)
    }

    handleNextPage = () =>{
        this.getMembersPage(parseInt(this.props.match.params.page) + 1)
    }

    handlePreviousPage = () =>{
        this.getMembersPage(parseInt(this.props.match.params.page) - 1)
    }

    render() {
        const { isLoading, listOfMembers} = this.state

        return (
            <div className='container'>
                <MembersList listOfMembers={listOfMembers[ this.props.match.params.page - 1]} isLoading={isLoading} />
            
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                            <a className="page-link" href={`/list/${parseInt(this.props.match.params.page) - 1}`} onClick={this.handlePreviousPage} tabIndex="-1">Previous</a>
                        </li>
                        {this.state.pageNumbers.map(page => {
                            if (page !== parseInt( this.props.match.params.page)) {
                                return (
                                    <Link to={`/list/${page}`} className="page-item" onClick={this.handleUpdate} key={page}>
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
                            <a className="page-link" href={`/list/${parseInt( this.props.match.params.page) + 1}`} onClick={this.handleNextPage}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default MembersBoard;