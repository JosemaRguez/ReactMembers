import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'

const MembersList = (props) => {
    console.log(props.listOfMembers)
    return (
        <div className="container">
            <div className="row">
                {props.listOfMembers.map(member =>
                    <Link to={`/member/${member.id}`} className="col-4 p-5" style={{ textDecoration: 'none' }} key={member.id}>
                        <div className="card">
                            <div className="p-1">
                                <img className="img-fluid float-left rounded-circle p-2" src={member.image} alt={`Card ${member.id} not found`} />
                                <p>{`${member.name}`}</p>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <p className="card-text">{`Age: ${member.age}`}</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                )}
            </div>
        </div>
    )
}

export default MembersList
