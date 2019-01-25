import React, { Component } from 'react'
import '../../styles/styles.css'
import MembersList from './MembersList';

class MembersBoard extends Component {
    render() {
        return (
            <div>
                <div className='jokesContainer'>
                        <div className='container'>
                            <MembersList />
                        </div>
                    </div>
            </div>
        )
    }
}

export default MembersBoard;