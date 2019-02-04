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

    componentDidMount = () =>{
        if(this.state.listOfMembers.length === 0){
            this.props.getListMembers(this.state.currentPage, this.state.listOfMembers)
        }
       
        
        this.setState({listOfMembers: this.props.list.listMembers, isLoading: true })
        console.log(this.state.listOfMembers)
    }

    handleNextPage = (e) => {
        e.preventDefault()
        console.log('Next page')
        const page = this.state.currentPage + 1
        this.setState({ isLoading: true, currentPage: page })
        console.log(this.props.list.listMembers)
        this.props.getListMembers(page, this.state.listOfMembers)

        this.setState({listOfMembers: this.props.list.listMembers, isLoading: true })

    }

    handlePreviousPage = (e) => {
        e.preventDefault()
        console.log('Previous page')
        const page = this.state.currentPage - 1
        this.setState({ isLoading: true, currentPage: page })

        this.props.getListMembers(page, this.state.listOfMembers)
        
        this.setState({listOfMembers: this.props.list.listMembers, isLoading: true })
    }

    render() {
        const { listMembers } = this.props.list
        
        return (
            <div className='container'>
                <div id="carouselMembers" className="carousel slide" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner">
                        <div className="carousel-item active" key={this.state.currentPage}>
                            <MembersList listOfMembers={listMembers[this.state.currentPage - 1]} />
                        </div>
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
    return {
        list: state.listMembers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersBoard)