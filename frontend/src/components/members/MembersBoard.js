import React, { Component } from 'react'
import MembersList from './MembersList'
import { connect } from 'react-redux'
import { getListMembers } from '../../store/actions/listActions'
import { refreshPage } from '../../store/actions/listActions'
import '../../styles/styles.css'

class MembersBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            currentPage: this.props.listOfMembers.page,
            memberList: []
        }
    }

    componentDidMount = async () => {
        const itIsFirstPage = true

        this.setState({ isLoading: true })
        if (this.props.listOfMembers.listOfMembers.length === 0) {
            await this.props.getListMembers(this.state.currentPage, itIsFirstPage)

        }
        this.setState({ memberList: this.props.listOfMembers.listOfMembers, isLoading: false })
        console.log('render first')
    }

    handleNextPage = async (e) => {
        e.preventDefault()
        const itIsFirstPage = false

        console.log('Next page')
        const page = this.state.currentPage + 1

        this.setState({ isLoading: true, currentPage: page })
        if (!this.props.listOfMembers.listOfMembers[page - 1] || this.props.listOfMembers.listOfMembers[page - 1].length === 0) {
            await this.props.getListMembers(page, itIsFirstPage)
        }
        else {
            await this.props.refreshPage(page)
        }

        this.setState({ memberList: this.props.listOfMembers.listOfMembers, isLoading: false })
    }

    handlePreviousPage = async (e) => {
        console.log('Previous page')
        e.preventDefault()
        const itIsFirstPage = false
        const page = this.state.currentPage - 1

        this.setState({ isLoading: true, currentPage: page })
        if (!this.props.listOfMembers.listOfMembers[page - 1] || this.props.listOfMembers.listOfMembers[page - 1].length === 0) {
            await this.props.getListMembers(page, itIsFirstPage)
        }
        else {
            await this.props.refreshPage(page)
        }

        this.setState({ memberList: this.props.listOfMembers.listOfMembers, isLoading: false })
    }

    render() {
        const { memberList, currentPage, isLoading } = this.state
        console.log(memberList, currentPage)

        return (
            <div className='container' >
                <div id="carouselMembers" className="carousel slide" data-ride="carousel" data-interval="false">
                    <MembersList listOfMembers={memberList[currentPage - 1]} isLoading={isLoading} />
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
        getListMembers: (currentPage) => dispatch(getListMembers(currentPage)),
        refreshPage: (page) => dispatch(refreshPage(page))
    }
}

const mapStateToProps = (state) => {
    return {
        listOfMembers: state.listOfMembers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersBoard)