import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'

const MembersList = (props) => {

    if (props.listOfMembers && !props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    {props.listOfMembers.map(member =>
                        <div className="p-4" key={member.id}>
                            <div className="card cardNoMove">
                                <div className="card-header p-1">
                                    <img className="img-fluid float-left rounded-circle p-2" src={member.image} alt={`Card ${member.id} not found`} />
                                    <p className="p-2">{`${member.name}`}</p>
                                </div>
                                <div className="card-body text-center">
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
            <div className="container d-flex justify-content-center">
                <div className="spinner-border spin-big p-5" style={{color: "#E85A4F"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default MembersList
