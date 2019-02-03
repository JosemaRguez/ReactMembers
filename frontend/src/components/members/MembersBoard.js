import React, { Component } from 'react'
import MembersList from './MembersList'
import { connect } from 'react-redux'
import { getListMembers } from '../../store/actions/listActions'
import '../../styles/styles.css'

class MembersBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listOfMembers: [],
            isLoading: true,
            currentPage: 1
        }

    }

    componentWillMount = () => {
        const page = this.state.currentPage
        this.setState({isLoading: true, currentPage: page })

        if (this.state.listOfMembers && this.state.listOfMembers.length === 0) {
            fetch(`/getMembers?page=${page}`)
                .then(res => res.json())
                .then(members => {
                    this.setState({
                        listOfMembers: [members],
                        isLoading: false
                    })
                    this.props.getListMembers(page, this.state.listOfMembers)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
        this.setState({ isLoading: true })
    }

    handleNextPage = (e) => {
        e.preventDefault()
        console.log('Next page')
        const page = this.state.currentPage + 1
        this.setState({isLoading: true, currentPage: page })
        console.log(page)
        if (this.state.listOfMembers[page - 1] && this.state.listOfMembers[page - 1].length === 0) {
            fetch(`/getMembers?page=${page}`)
                .then(res => res.json())
                .then(members => {
                    this.setState({
                        listOfMembers: [...this.state.listOfMembers, members],
                        isLoading: false
                    })
                    this.props.getListMembers(page, this.state.listOfMembers)
                })
                .catch((err) => {
                    console.log(err)
                })
        }

        this.setState({ isLoading: true })
    }

    handlePreviousPage = (e) => {
        e.preventDefault()
        console.log('Previous page')
        const page = this.state.currentPage - 1
        this.setState({ isLoading: true, currentPage: page })

        this.props.getListMembers(page, this.state.listOfMembers)
        this.setState({ isLoading: true })
    }

    render() {
        const { isLoading } = this.state
        const { listMembers, page } = this.props.listMembers

        return (
            <div className='container'>
                <div id="carouselMembers" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {listMembers &&
                            listMembers.map(members => {
                                if (listMembers[page - 1] === members) {
                                    return (<div className="carousel-item active" key={page}>
                                        <MembersList listOfMembers={members} isLoading={isLoading} currentPage={page} />
                                    </div>)
                                }
                                else {
                                    return (
                                        <div className="carousel-item" key={page}>
                                        <MembersList listOfMembers={members} isLoading={isLoading} currentPage={page} />
                                    </div>)
                                }
                            })
                        }
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselMembers" onClick={this.handlePreviousPage} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselMembers" onClick={this.handleNextPage} role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListMembers: (currentPage, listMembers) => dispatch(getListMembers(currentPage, listMembers)),
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        listMembers: state.listMembers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersBoard)