import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'

const MembersList = (props) => {
    if (props.listOfMembers) {
        return (
            <div className="container">
                <div className="row">
                    {props.listOfMembers && props.listOfMembers.map(member =>
                        <div className="col-4 p-5" key={member.id}>
                            <div className="card">
                                <div className="p-1">
                                    <img className="img-fluid float-left rounded-circle p-2" src={member.image} alt={`Card ${member.id} not found`} />
                                    <p className="p-2">{`${member.name}`}</p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">{`${member.age} years old`}</p>
                                    <Link to={`/member/${member.id}`} className="btn btn-secondary btn-block ">
                                        Check bio
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container">
                <p className="text-danger p-5" style={{ fontSize: "2rem", textAlign: "center" }}>Oops! There are no members to show</p>
            </div>
        )
    }
}

export default MembersList
