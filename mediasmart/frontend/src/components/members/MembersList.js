import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'

const MembersList = (props) => {
    console.log(props.listOfMembers)
    return (
        <div className="container">
            <div className="row">
                {props.listOfMembers.map(member =>
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

export default MembersList
