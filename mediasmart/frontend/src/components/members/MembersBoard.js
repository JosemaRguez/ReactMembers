import React, { Component } from 'react'
import '../../styles/styles.css'
import MembersList from './MembersList';

class MembersBoard extends Component {
    render() {
        return (
            <div className=''>
                <MembersList />
            </div>
        )
    }
}

export default MembersBoard;