import React, { Component } from 'react'
import MembersList from './MembersList'
import { connect } from 'react-redux'
import { getListMembers } from '../../store/actions/listActions'
import { refreshPage } from '../../store/actions/listActions'
import arrowForward from '../../images/arrow_forward.svg'
import arrowBack from '../../images/arrow_back.svg'
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

        const page = (this.state.currentPage - 1) > 0 ? (this.state.currentPage - 1) : this.state.currentPage


        this.setState({ isLoading: true, currentPage: page })

        if (!this.props.listOfMembers.listOfMembers[page - 1] || this.props.listOfMembers.listOfMembers[page - 1].length === 0) {
            await this.props.getListMembers(page, itIsFirstPage)
        }
        else {
            await this.props.refreshPage(page)
        }

        this.setState({ memberList: this.props.listOfMembers.listOfMembers, isLoading: false })
    }

    handleSelectPage = async (e, page) => {
        e.preventDefault()
        if (!this.state.isLoading) {
            await this.props.refreshPage(page)
            this.setState({ currentPage: page })
        }
    }

    render() {
        const { memberList, currentPage, isLoading } = this.state

        return (
            <div className="container">
                <MembersList listOfMembers={memberList[currentPage - 1]} isLoading={isLoading} />
                
                <ol className="carousel-indicators position-relative">
                    <button className="rounded-circle carousel-buttons position-relative" disabled={isLoading} onClick={this.handlePreviousPage}  type="button">
                        <img src={arrowBack} alt="back not found" />
                    </button>
                    {memberList && Array.from(Array(memberList.length), (e, i) => {
                        if (i === currentPage - 1) {
                            return (<li disabled={isLoading} className="active" style={{ backgroundColor: "#EF6461" }} onClick={(e) => this.handleSelectPage(e, i + 1)} key={i} />)
                        }
                        else {
                            return (<li disabled={isLoading} onClick={(e) => this.handleSelectPage(e, i + 1)} style={{ backgroundColor: "#5B5B5B" }} key={i} />)
                        }
                    })}
                    <button className="rounded-circle carousel-buttons position-relative" disabled={isLoading} onClick={this.handleNextPage} type="button">
                        <img src={arrowForward} alt="forwardnot found" />
                    </button>
                </ol>
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