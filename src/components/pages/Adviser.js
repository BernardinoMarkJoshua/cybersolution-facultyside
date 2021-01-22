import React from 'react'
import {Link} from 'react-router-dom'
import NavbarAdmin from '../NavbarAdmin'
import GateCard from '../assets/gate.png'
import StudentCard from '../assets/student.png'
import VerifyCard from '../assets/verify.png'

function Adviser() {
    return (
        <div className='Adviser'>
            <NavbarAdmin/>
            <div className="Adviser-container">
                <div className="Topbar-container-adviser">
                    <label>Adviser</label>
                    <label>Ronald Abdul</label>
                </div>

                <div className="Card-container-adviserpage">
                    <Link to='/advisergate'>
                        <img src={GateCard} alt="gatecard" width={320} height={420}/>
                    </Link>

                    <Link to='/adviserstudent'>
                        <img src={StudentCard} alt="gatecard" width={320} height={420}/>
                    </Link>

                    <Link to='/adviserverify'>
                        <img src={VerifyCard} alt="gatecard" width={320} height={420}/>
                    </Link>
                
                </div>
            </div>
        </div>
    )
}

export default Adviser
