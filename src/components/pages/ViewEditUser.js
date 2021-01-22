import React, {useState} from 'react'
import NavbarAdmin from '../NavbarAdmin'
import {Button} from '../Button'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'

function ViewEditUser() {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
    const [modalIsOpen2, setmodalIsOpen2] =useState(false)

    const shoot = () =>{
        alert('Removed');
    }

    return (
        <div className='ViewEditUser'>
            <NavbarAdmin/>
            <div className="ViewEditUser-container">
                <div className="Topbar-container-adviser">
                    <label>Admin</label>
                    <label>Baron Nashor</label>
                </div>

                <div className="Toplogo">
                    <h1>EDIT USERS</h1>
                    <div className="Toplogo-button">
                        <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen2(true)}>Add</Button>
                        <Link to='/admin'>
                            <Button buttonSize='btn--superliit'>Back</Button>
                        </Link>
                    </div>
                </div>

                <table className='Adviser-table'>
                <thead>
                    <tr>
                        <th>Faculty ID</th>
                        <th>Name</th>
                        <th>Section</th>
                        <th>Contact no</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ronald Abdul</td>
                        <td>BSCS A</td>
                        <td>09455802513</td>
                        <td>kurimawburacho1</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>Edit user</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Jamsheed Rashaad</td>
                        <td>BSIT A</td>
                        <td>09455802513</td>
                        <td>ilovemymom777</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>Edit user</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr>

                        
                    <tr>
                        <td>4</td>
                        <td>Benjie Felipe</td>
                        <td>BSIT B</td>
                        <td>09455802513</td>
                        <td>mapagmahalimba143</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>Edit user</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Baby Bash</td>
                        <td>BSCS B</td>
                        <td>09455802513</td>
                        <td>ihatepakseeew</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>Edit user</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            </div>

            <Modal className='modal' isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
                <h2>EDIT USER</h2>
                <input type="text" placeholder='Section'/>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Password'/>
                <input type="text" placeholder='Faculty ID'/>
                <div>
                    <Button onClick={() => setmodalIsOpen(false)} buttonSize='btn--superliit'>Confirm</Button>
                    <Button onClick={() => setmodalIsOpen(false)} buttonColor='red' buttonSize='btn--superliit'>Cancel</Button>
                </div>
 
            </Modal>

            <Modal className='modal' isOpen={modalIsOpen2} onRequestClose={() => setmodalIsOpen2(false)}>
                <h2>EDIT USER</h2>
                <input type="text" placeholder='Section'/>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Contact no'/>
                <input type="text" placeholder='Password'/>
                <input type="text" placeholder='Faculty ID'/>
                <div>
                    <Button onClick={() => setmodalIsOpen(false)} buttonSize='btn--superliit'>Confirm</Button>
                    <Button onClick={() => setmodalIsOpen(false)} buttonColor='red' buttonSize='btn--superliit'>Cancel</Button>
                </div>
 
            </Modal>
        
        </div>
        
    )
}

export default ViewEditUser
