import React from 'react'
import { Link } from 'react-router-dom'

const MembersList = (props) => {
    return (
        <div className="row">
            <div className="col s2 offset-s1 card">
                {props.listOfMembers.map(member =>
                    <Link to={`/member/${member.id}`} key={member.id}>
                        <div>
                            <img className="rounded-circle" src={member.image} alt={`${member.id} not found`} style={{ width: "5em", height: "5em" }} />
                            <span className="card-title">{member.name}</span>
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>{member.age}</p>
                            </div>
                        </div>
                    </Link>
                )
                }
            </div>
        </div>
    )
}

export default MembersList
