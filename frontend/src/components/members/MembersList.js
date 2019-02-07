import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import memberNotFound from '../../images/memberNotFound.png'

const MembersList = (props) => {
    if (props.listOfMembers && !props.isLoading) {
        return (
            <div className="row">
                {props.listOfMembers.map(member =>
                    <div className="col-lg-4 d-flex align-items-stretch p-5" key={member.id}>
                        <div className="card cardNoMove">
                            <div className="card-header p-1">
                                <img className="img-fluid float-left rounded-circle p-2 text-light" src={member.image} alt={`Card ${member.id} not found`} onError={(e) => e.target.src = memberNotFound} />
                                <p className="p-2 responsive-text text-light">{`${member.name}`}</p>
                            </div>
                            <div className="card-body text-center">
                                <p className="card-text responsive-text text-light">{`${member.age} years old`}</p>
                                <Link to={`/member/${member.id}`} className="btn btn-secondary btn-block text-dark" style={{ backgroundColor: "#E0DFD5" }}>
                                    Check bio
                                    </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
    else {
        return (
            <div className="container d-flex justify-content-center">
                <div className="spinner-border spin-big" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
}

export default MembersList
