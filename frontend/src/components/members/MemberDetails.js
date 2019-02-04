import React from 'react'
import { connect } from 'react-redux'
import '../../styles/styles.css'

const MemberDetails = (props) => {
  const { member } = props
  console.log(member)

  if (member) {
    return (
      <div className="container">
        <div className="p-5" key={member.id}>
          <div className="card detailsNoMove p-2">
            <div className="card-header">
              <img className="img-fluid float-left rounded-circle p-2" src={member.image} alt={`${props.match.params.id}`} />
              <p>Name: {member.name}</p>
              <p>Age: {member.age} years old</p>
            </div>
            <div className="card-body">
              <div className="card-content">
                <p className="card-text text-justify">{member.bio}</p>
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-lg btn-block p-2" onClick={() => props.history.goBack()} name="action">
              Close
        </button>
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="container">
          MEMBER NOT FOUND
          <button type="button" className="btn btn-danger btn-block p-2" onClick={() => props.history.goBack()} name="action">
          Close
        </button>
      </div>
    )
  }

}


const mapStateToProps = (state, ownProps) => {
  const listOfMembers = state.listMembers
  const id = ownProps.match.params.id
  const memberList = listOfMembers.listMembers[listOfMembers.page - 1]
  const memberIsolated = memberList ? memberList.find(m => m.id === id) : null

  return {
    member: memberIsolated
  }
}

export default connect(mapStateToProps)(MemberDetails)