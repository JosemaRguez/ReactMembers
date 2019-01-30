import React, { Component } from 'react'
import '../../styles/styles.css'
import MembersList from './MembersList'
import Pagination from './Pagination'

class MembersBoard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pageNumbers: [1, 2, 3, 4],
            listOfMembers: []
        }

        this.componentDidMount.bind()
    }

    componentDidMount () {
            fetch("/getMembers")
            .then(res => res.json())
            .then(members => {
                this.setState({ listOfMembers: [...this.state.listOfMembers, JSON.parse(members)] })
                })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        console.log(this.state.listOfMembers)
        return (
            <div className='container'>
                <MembersList listOfMembers={this.state.listOfMembers[this.props.match.params.page - 1]} />

                <Pagination pageNumbers={this.state.pageNumbers} currentPage={this.props.match.params.page} />
            </div>
        )
    }
}

export default MembersBoard;