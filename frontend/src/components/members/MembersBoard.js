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
        if (this.state.memberList.length === 0) {
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

        const page = (this.state.currentPage - 1) > 0 ? (this.state.currentPage - 1): this.state.currentPage


        this.setState({ isLoading: true, currentPage: page })

        if (!this.props.listOfMembers.listOfMembers[page - 1] || this.props.listOfMembers.listOfMembers[page - 1].length === 0){
            await this.props.getListMembers(page, itIsFirstPage)
        }
        else {
            await this.props.refreshPage(page)
        }

        this.setState({ memberList: this.props.listOfMembers.listOfMembers, isLoading: false })
    }

    handleSelectPage = async (e, page) => {
        e.preventDefault()
        await this.props.refreshPage(page)
        this.setState({ currentPage: page })
    }

    render() {
        const { memberList, currentPage, isLoading } = this.state
        console.log(memberList, currentPage)

        return (
            <div>
                <div className="container" data-interval="false">
                    <MembersList listOfMembers={memberList[currentPage - 1]} isLoading={isLoading} />
                    <ol className="carousel-indicators position-relative">
                    {memberList && Array.from(Array(memberList.length), (e, i) => {
                        if (i === currentPage - 1) {
                            return (<li className="active" onClick={(e) => this.handleSelectPage(e, i + 1)} key={i} ></li>)
                        }
                        else {
                            return (<li onClick={(e) => this.handleSelectPage(e, i + 1)} key={i}></li>)
                        }
                    })}
                </ol>
                </div>
                <button className="carousel-control-prev carousel-buttons" disabled={isLoading} onClick={this.handlePreviousPage} >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    PREVIOUS MEMBER
                </button>
                <button className="carousel-control-next carousel-buttons" disabled={isLoading} onClick={this.handleNextPage} >
                    NEXT MEMBER
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
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