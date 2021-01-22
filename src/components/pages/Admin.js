import React, {useState} from 'react'
import NavbarAdmin from '../NavbarAdmin'
import ApproveAndEditLogo from '../assets/approveANDaccept.png'
import {Button} from '../Button'
import {Link} from 'react-router-dom'
import Modal from 'react-modal'


function Admin() {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return (
        <div className='Admin'>
            <NavbarAdmin/>
            <div className="Admin-container">
                <div className="Topbar-container-adviser">
                    <label>Admin</label>
                    <label>Baron Nashor</label>
                </div>

                <div className="Admin-container-container">
                    <img src={ApproveAndEditLogo} alt="approve"/>
                <div className="Button-admin">
                    <Link className='LINK1' to='/viewachievers'>
                        <Button>VIEW ACHIEVERS</Button>
                    </Link>
                </div>

                <div className="Button-admin">
                    <Link className='LINK1' to='/viewarchive'>
                        <Button>VIEW ARCHIVE</Button>
                    </Link>
                </div>

                <div className="Button-admin">
                    <Link className='LINK1' to='/viewedituser'>    
                        <Button>VIEW/EDIT USER</Button>
                    </Link>
                </div>

                <div className="Button-admin">
                    <Link className='LINK1' to='/vieweditsubject'>
                        <Button>VIEW/EDIT SUBJECT</Button>
                    </Link>
                </div>
                    
                <div className="Button-admin"> 
                    <Button onClick={() =>setmodalIsOpen(true)}>EDIT ARCHIVE DATE</Button>
                </div>
                    
                </div>
            </div>
        
            <Modal className='modal' isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
                <h2>EDIT ARCHIVING DATE</h2>
                    <label className='semester-label'>Semester Start:</label>
                    <input type="text" placeholder='1/3/2020'/>
                    <label className='semester-label'>Semester End:</label>
                    <input type="text" placeholder='6/23/2021'/>
                <Button onClick={() => setmodalIsOpen(false)}>Confirm</Button>
            </Modal>
        </div>
    )
}

export default Admin
