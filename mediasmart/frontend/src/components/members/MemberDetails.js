import React from 'react'

const MemberDetails = (props) => {
  console.log(props)
  return (
    <div className="card col-6 p-5">
      <div className="p-1">
        <img className="img-fluid float-left rounded-circle p-2" src="https://www.mediasmart.io/assets/images/team/aniss.laamouri.funny.jpg" alt={`image ${props.match.params.id}`} />
        <p>{"NAME"}</p>
        <p>{"AGE"}</p>
      </div>
      <div className="card-body">
        <div className="card-content">
          <p className="card-text">{"BIO"}</p>
        </div>
      </div>
    </div>
  )
}

export default MemberDetails