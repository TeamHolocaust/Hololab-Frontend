import React from 'react';
import shazan from '../Images/shazan3.jpeg'
import thomy from '../Images/thomy.jpg'
import ishu from '../Images/ishu.jpeg'
import sachi from '../Images/sachi.jpeg'
import yenu from '../Images/yenu.jpeg'
import shenali from '../Images/shena.jpeg'
import './Team.css';

function Team() {
    return (
        <div>
            <div className="grid-container">
                <div className="grid-item" id="team-heading">
                    <p>THE TEAM HOLOCAUST</p>
                </div>
                <div className="grid-item">
                    <div className="member-img">
                        <img src={shazan} alt="shazan" />
                    </div>
                    <div className="member-info">
                        <h2>SHAZAN FAZAL</h2>
                        <h3>FrontEnd</h3>
                        <p>some quote</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="member-img">
                        <img src={thomy} alt="thomy" />
                    </div>
                    <div className="member-info">
                        <h2>THOMY DE CROOS</h2>
                        <h3>FrontEnd</h3>
                        <p>some quote</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="member-img">
                        <img src={ishu} alt="ishu" />
                    </div>
                    <div className="member-info">
                        <h2>ISURANGI THILAKSHANA</h2>
                        <h3>FrontEnd</h3>
                        <p>some quote</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="member-img">
                        <img src={sachi} alt="sachi" />
                    </div>
                    <div className="member-info">
                        <h2>SACHINI SULAKSHANA</h2>
                        <h3>FrontEnd</h3>
                        <p>some quote</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="member-img">
                        <img src={yenu} alt="yenu" />
                    </div>
                    <div className="member-info">
                        <h2>YENULI BOYAGODA</h2>
                        <h3>FrontEnd</h3>
                        <p>some quote</p>
                    </div>
                </div>
                <div className="grid-item">
                    <div className="member-img">
                        <img src={shenali} alt="shenali" />
                    </div>
                    <div className="member-info">
                        <h2>SHENALI JAYAKODY</h2>
                        <h3>FrontEnd</h3>
                        <p>some quote</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
