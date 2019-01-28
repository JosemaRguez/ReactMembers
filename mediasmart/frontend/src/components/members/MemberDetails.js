import React from 'react'

const MemberDetails = (props) => {
    console.log(props)
    return (
        <div className="col s4 m7">
        <div className="card horizontal">
            <div className="card-image">
                <img src="https://pbs.twimg.com/profile_images/661718785905201152/dgLmIh3v_400x400.jpg" alt={"image" + props.match.params.id} />
            </div>
          <div className="card-stacked">
            <div className="card-content">
              <p>This is the bio number {props.match.params.id}.</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MemberDetails