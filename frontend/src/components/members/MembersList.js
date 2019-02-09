import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/styles.css'
import image404 from '../../images/404.png'
import memberNotFound from '../../images/memberNotFound.png'

const MembersList = (props) => {
    if(props.listOfMembers && props.listOfMembers.length === 0){
        return(<div className="container p-5">
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src={image404} alt="error 404" />
          <h1 className="responsive-text">Oops, the members you’re looking for disappeared</h1>
        </div>
      </div>)
    }
    else if (props.listOfMembers && !props.isLoading) {
        return (
            <div className="row">
                {props.listOfMembers.map(member =>
                    <div className="col-lg-4 d-flex align-items-stretch p-5" key={member.id}>
                        <div className="card cardNoMove">
                            <div className="card-header p-1">
                                <img className="img-fluid float-left rounded-circle p-2 text-light" src={member.image} alt={`Card ${member.id} not found`} onError={(e) => e.target.src = memberNotFound} />
                                <p className="text-light text-width">{member.name}</p>
                            </div>
                            <div className="card-body">
                                <p className="card-text text-width text-light text-button-space">{`${member.age} years old`}</p>
                                <div className="at-bottom">
                                <Link to={`/member/${member.id}`} className="btn btn-block text-dark" style={{backgroundColor: "#E0DFD5"}}>
                                    Check bio
                                </Link>
                                </div>
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
