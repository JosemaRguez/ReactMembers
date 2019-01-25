import React from 'react'
import { Link } from 'react-router-dom'

const MembersList = (props) => {
    return (
        <div className="row">
            <div className="col s5 card">
                <Link to={"/member/1"} key="1">
                    <div>
                        <img src="https://pbs.twimg.com/profile_images/661718785905201152/dgLmIh3v_400x400.jpg" alt="image1" />
                        <span className="card-title">Señor fardón</span>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I did nothing in my whole life but I have style.</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="col s5 offset-s1 card">
                <Link to={"/member/2"} key="2">
                    <div>
                        <img src="https://as01.epimg.net/img/comunes/fotos/fichas/deportistas/m/mes/large/15167.png" alt="image1" />
                        <span className="card-title">Retard</span>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>I'm just retard.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MembersList