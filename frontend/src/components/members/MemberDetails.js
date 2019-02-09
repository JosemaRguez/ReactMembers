import React from 'react'
import { connect } from 'react-redux'
import '../../styles/styles.css'
import image404 from '../../images/404.png'
import memberNotFound from '../../images/memberNotFound.png'

const MemberDetails = (props) => {
  const { member } = props

  if (member) {
    return (
      <div className="container-fluid">
        <div className="p-5" key={member.id}>
          <div className="card p-2">
            <div className="card-header card-color-details">
              <img className="img-fluid float-left rounded-circle p-2" src={member.image} alt={`${props.match.params.id}`}  onError={(e) => e.target.src = memberNotFound} />
              <p className="responsive-header-text text-light">Name: {member.name}</p>
              <p className="responsive-header-text text-light">Age: {member.age} years old</p>
            </div>
            <div className="card-body">
              <div className="card-content">
                <p className="card-text text-justify responsive-text p-2 responsive-bio">{member.bio}</p>
              </div>
            </div>
            <button type="button" className="btn btn-lg btn-block button-member-details p-2 responsive-text" onClick={() => props.history.goBack()} name="action">
              Close
          </button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container p-5">
        <div className="d-flex justify-content-center">
          <img className="img-fluid" src={image404} alt="error 404" />
          <h1 className="responsive-text">Oops, the member you’re looking for disappeared</h1>
        </div>
        <div className="p-4 d-flex justify-content-center">
          <button type="button" className="btn btn-success" onClick={() => props.history.goBack()} name="action">
            Go back!
        </button>
        </div>
      </div>
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  const memberList = state.listOfMembers.listOfMembers[state.listOfMembers.page - 1]
  const memberIsolated = memberList ? memberList.find(m => m.id === id) : null

  return {
    member: memberIsolated
  }
}

export default connect(mapStateToProps)(MemberDetails)