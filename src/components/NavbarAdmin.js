import React from 'react'
import '../components/Components.css'
import IcsLogo from '../components/assets/ics.png'
import {Link} from 'react-router-dom'

function NavbarAdmin() {
    return (
        <div className="NavbarAdmin">
            <div className="NavbarAdmin-container">
            <img className='ics-logo' src={IcsLogo} alt="icslogo" width={50} height={50}/>
                <div className="Admin-logo-container"> 
                    <label className='bold1'>ICS-DLOA</label>
                    <label>powered by Cybersolution</label>
                </div>

                <div className="Logout">
                    <Link className='Link' to='/'>
                        <label>Logout</label>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavbarAdmin
