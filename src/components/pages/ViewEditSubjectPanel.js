import React,{useState} from 'react'
import NavbarAdmin from '../NavbarAdmin'
import {Button} from '../Button'
import Modal from 'react-modal'
import {Link} from 'react-router-dom'
function ViewEditSubjectPanel() {
    const [modalIsOpen, setmodalIsOpen] = useState(false)

    const shoot = () =>{
        alert('Removed');
    }
    return (
        <div className='ViewEditSubjectPanel'>
            <NavbarAdmin/>
            <div className="ViewEditSubjectPanel-container">
                <div className="Topbar-container-adviser">
                        <label>Admin</label>
                        <label>Baron Nashor</label>
                </div>

                <div className="Toplogo">
                    <h1>EDIT SUBJECTS</h1>
                    <label>Edit subjects for 3rd year 1st sem BSIT</label>
                    <Link to='/vieweditsubject'>
                        <Button buttonSize='btn--superliit'>Back</Button>
                    </Link>
                </div>

                <table className='Adviser-table'>
                <thead>
                    <tr>
                        <th>Subject Code</th>
                        <th>Subject Name</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>IT 131</td>
                        <td>Advanced Database Systems</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>edit subject</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr>         

                    <tr>
                        <td>IT 133</td>
                        <td>Networking 2</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>edit subject</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr>  

                    <tr>
                        <td>IT 135</td>
                        <td>Systems Integration And Architecture</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>edit subject</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr>    

                    <tr>
                        <td>IT 137</td>
                        <td>Web Systems and Technologies</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>edit subject</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr>   

                    <tr>
                        <td>IT 139</td>
                        <td>IT Elective</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>edit subject</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr> 

                    <tr>
                        <td>CC 105</td>
                        <td>Application Development and Emerging Technologies</td>
                        <td>
                            <Button buttonSize='btn--superliit' onClick={() =>setmodalIsOpen(true)}>edit subject</Button>
                            <Button buttonSize='btn--superliit' buttonColor='red' onClick={shoot}>Delete</Button>
                        </td>
                    </tr> 

                </tbody>
            </table>

            </div>

            <Modal className='modal' isOpen={modalIsOpen} onRequestClose={() => setmodalIsOpen(false)}>
                <h2>EDIT SUBJECT</h2>
                <input type="text" placeholder='Subject Name'/>
                <input type="text" placeholder='Subject Code'/>
                <Button onClick={() => setmodalIsOpen(false)}>Confirm</Button>
            </Modal>
        </div>
    )
}

export default ViewEditSubjectPanel
