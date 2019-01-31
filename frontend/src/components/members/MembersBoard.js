import React, { Component } from 'react'
import '../../styles/styles.css'
import MembersList from './MembersList'
import Pagination from './Pagination'

class MembersBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumbers: [1, 2, 3, 4],
            listOfMembers: [],
            isLoading: true,
            currentPage: 1
        }
    }

    handleUpdate = () => {
        console.log('dale')
        this.setState({ isLoading: true, currentPage: this.props.match.params.page })
    }

    componentDidMount = () => {
        this.setState({ isLoading: true, currentPage: this.props.match.params.page })

        fetch(`/getMembers?page=${this.state.currentPage}`)
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
    }

    render() {
        const { isLoading, listOfMembers, currentPage } = this.state

        return (
            <div className='container'>
                <MembersList listOfMembers={listOfMembers[currentPage - 1]} isLoading={isLoading} />

                <Pagination onClick={this.handleUpdate} pageNumbers={this.state.pageNumbers} currentPage={this.props.match.params.page} />
            </div>
        )
    }
}

export default MembersBoard;